/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc> 
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License version 3
 as published by the Free Software Foundation. You may not use, modify
 or distribute this program under any other version of the
 GNU Affero General Public License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package handling.channel.handler;

import constants.GameConstants;
import java.awt.Point;
import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;

import client.Skill;
import client.MapleBuffStat;
import client.MapleClient;
import client.MapleCharacter;
import client.MapleDisease;
import client.SkillFactory;
import client.SummonSkillEntry;
import client.MonsterStatusEffect;
import client.anticheat.CheatingOffense;
import client.MonsterStatus;
import client.PlayerStats;
import handling.world.World;
import java.awt.Rectangle;
import java.lang.ref.WeakReference;
import java.util.EnumMap;
import java.util.Map;
import server.MapleItemInformationProvider;
import server.MapleStatEffect;
import server.Randomizer;
import server.Timer.CloneTimer;
import server.movement.LifeMovementFragment;
import server.life.MapleMonster;
import server.maps.MapleDragon;
import server.maps.MapleMap;
import server.maps.MapleSummon;
import server.maps.MapleMapObject;
import server.maps.MapleMapObjectType;
import server.maps.SummonMovementType;
import tools.AttackPair;
import tools.packet.MobPacket;
import tools.data.LittleEndianAccessor;
import tools.Pair;
import tools.packet.CField.EffectPacket;
import tools.packet.CField;
import tools.packet.CField.SummonPacket;
import tools.packet.CWvsContext;
import static tools.packet.CWvsContext.BuffPacket.giveBuff;
import extensions.temporary.SpecialEffectType;

public class SummonHandler {

    public static final void MoveDragon(final LittleEndianAccessor slea, final MapleCharacter chr) {
        slea.skip(8); //POS
        final List<LifeMovementFragment> res = MovementParse.parseMovement(slea, 5, chr);
        if (chr != null && chr.getDragon() != null && res.size() > 0) {
            final Point pos = chr.getDragon().getPosition();
            MovementParse.updatePosition(res, chr.getDragon(), 0);
            if (!chr.isHidden()) {
                chr.getMap().broadcastMessage(chr, CField.moveDragon(chr.getDragon(), pos, res), chr.getTruePosition());
            }

            WeakReference<MapleCharacter>[] clones = chr.getClones();
            for (int i = 0; i < clones.length; i++) {
                if (clones[i].get() != null) {
                    final MapleMap map = chr.getMap();
                    final MapleCharacter clone = clones[i].get();
                    CloneTimer.getInstance().schedule(new Runnable() {
                        @Override
                        public void run() {
                            try {
                                if (clone.getMap() == map && clone.getDragon() != null) {
                                    final Point startPos = clone.getDragon().getPosition();
                                    MovementParse.updatePosition(res, clone.getDragon(), 0);
                                    if (!clone.isHidden()) {
                                        map.broadcastMessage(clone, CField.moveDragon(clone.getDragon(), startPos, res), clone.getTruePosition());
                                    }

                                }
                            } catch (Exception e) {
                                //very rarely swallowed
                            }
                        }
                    }, 500 * i + 500);
                }
            }
        }
    }

    public static final void MoveSummon(final LittleEndianAccessor slea, final MapleCharacter chr) {
        if (chr == null || chr.getMap() == null) {
            return;
        }
        final MapleMapObject obj = chr.getMap().getMapObject(slea.readInt(), MapleMapObjectType.SUMMON);
        if (obj == null) {
            return;
        }
        if (obj instanceof MapleDragon) {
            MoveDragon(slea, chr);
            return;
        }
        final MapleSummon sum = (MapleSummon) obj;
        if (sum.getOwnerId() != chr.getId() || sum.getSkillLevel() <= 0 || sum.getMovementType() == SummonMovementType.不會移動) {
            return;
        }
        slea.skip(4);
        slea.skip(4);
        slea.skip(4);
        final List<LifeMovementFragment> res = MovementParse.parseMovement(slea, 4, chr);

        final Point pos = sum.getPosition();
        MovementParse.updatePosition(res, sum, 0);
        if (res.size() > 0) {
            chr.getMap().broadcastMessage(chr, SummonPacket.moveSummon(chr.getId(), sum.getObjectId(), pos, res), sum.getTruePosition());
        }
    }

    public static final void DamageSummon(final LittleEndianAccessor slea, final MapleCharacter chr) {
        final int unkByte = slea.readByte();
        final int damage = slea.readInt();
        final int monsterIdFrom = slea.readInt();
        //       slea.readByte(); // stance

        final Iterator<MapleSummon> iter = chr.getSummonsReadLock().iterator();
        MapleSummon summon;
        boolean remove = false;
        try {
            while (iter.hasNext()) {
                summon = iter.next();
                if (summon.isPuppet() && summon.getOwnerId() == chr.getId() && damage > 0) { //We can only have one puppet(AFAIK O.O) so this check is safe.
                    summon.addHP((short) -damage);
                    if (summon.getHP() <= 0) {
                        remove = true;
                    }
                    chr.getMap().broadcastMessage(chr, SummonPacket.damageSummon(chr.getId(), summon.getSkill(), damage, unkByte, monsterIdFrom), summon.getTruePosition());
                    break;
                }
            }
        } finally {
            chr.unlockSummonsReadLock();
        }
        if (remove) {
            chr.cancelEffectFromBuffStat(MapleBuffStat.PUPPET);
        }
    }

    public static void SummonAttack(final LittleEndianAccessor slea, final MapleClient c, final MapleCharacter chr) {
        final MapleMap map = chr.getMap();
        final MapleMapObject obj = map.getMapObject(slea.readInt(), MapleMapObjectType.SUMMON);
        if (obj == null || !(obj instanceof MapleSummon)) {
            chr.dropMessage(5, "召喚獸已經消失。");
            return;
        }
        final MapleSummon summon = (MapleSummon) obj;
        if (summon.getOwnerId() != chr.getId() || summon.getSkillLevel() <= 0) {
            chr.dropMessage(5, "出現錯誤.");
            return;
        }
        final SummonSkillEntry sse = SkillFactory.getSummonData(summon.getSkill());
        if (summon.getSkill() / 1000000 != 35 && summon.getSkill() != 33101008 && sse == null) {
            chr.dropMessage(5, "召喚獸攻擊處理出錯。");
            return;
        }
        int tick = slea.readInt();
        if (sse != null && sse.delay > 0) {
            chr.updateTick(tick);
            summon.CheckSummonAttackFrequency(chr, tick);
            chr.getCheatTracker().checkSummonAttack();
        }
        slea.skip(4);
        final byte animation = slea.readByte();
        byte tbyte = (slea.readByte());
        byte numAttacked = (byte) ((tbyte >>> 4) & 0xF);
        byte numDamage = (byte) (tbyte & 0xF);
        if (summon.getSkill() == 1301013 && summon.getScream()) {
            //TODO 添加灵魂助力震惊的效果 
            chr.getMap().broadcastMessage(chr, SummonPacket.summonSkill(chr.getId(), 217592, 141), false);
            chr.getMap().broadcastMessage(chr, CField.EffectPacket.showBuffEffect(true, chr, 1301013, SpecialEffectType.REMOTE_SKILL, chr.getLevel(), 1), false);
            Map<MapleBuffStat, Integer> statups = new EnumMap<>(MapleBuffStat.class);
            statups.put(MapleBuffStat.BEHOLDER, 1);
            c.getSession().write(CWvsContext.BuffPacket.giveBuff(summon.getSkill(), summon.SummonTime(360000), statups, null, null));
        }
        if (sse != null) {
            int count = sse.mobCount;
            if (summon.getSkill() == 1301013) {
                count = 10;
            }
            if (numAttacked > count) {
                if (chr.isShowErr()) {
                    chr.dropMessage(-5, "召喚獸攻擊次數錯誤 (Skillid : " + summon.getSkill() + " 怪物數量 : " + numAttacked + " 默認數量: " + count + ")");
                }
                chr.dropMessage(5, "[警告] 請不要使用非法程式。召喚獸攻擊怪物數量錯誤.");
                chr.getCheatTracker().registerOffense(CheatingOffense.SUMMON_HACK_MOBS);
                return;
            }
            int numAttackCount = chr.getStat().getAttackCount(summon.getSkill()) + sse.attackCount;
            if (numDamage > numAttackCount) {
                if (chr.isShowErr()) {
                    chr.dropMessage(-5, "召喚獸攻擊次數錯誤 (Skillid : " + summon.getSkill() + " 打怪次數 : " + numDamage + " 默認次數: " + sse.attackCount + " 超級技能增加次數: " + chr.getStat().getAttackCount(summon.getSkill()) + ")");
                }
                chr.dropMessage(5, "[警告] 請不要使用非法程式。召喚獸攻擊怪物次數錯誤.");
                chr.getCheatTracker().registerOffense(CheatingOffense.SUMMON_HACK_MOBS);
                return;
            }
        }
        slea.skip(summon.getSkill() == 35111002 ? 24 : 12); //some pos stuff

        final List<AttackPair> allDamage = new ArrayList<>();
        for (int i = 0; i < numAttacked; i++) {
            int oid = slea.readInt();
            MapleMonster mob = map.getMonsterByOid(oid);
            if (mob == null) {
                continue;
            }
            slea.skip(4);
            slea.skip(20);
            List allDamageNumbers = new ArrayList();
            for (int j = 0; j < numDamage; j++) {
                int damge = slea.readInt();
                if (chr.isAdmin()) {
                    chr.dropMessage(-5, "召喚獸攻擊 打怪數量: " + numAttacked + " 打怪次數: " + numDamage + " 打怪傷害: " + damge + " 怪物OID: " + mob.getObjectId());
                }
                if (damge > /*chr.getMaxDamageOver(0)*/ 50000000 && !chr.isGM()) {
                    World.Broadcast.broadcastGMMessage(CWvsContext.broadcastMsg(5, "[GM 訊息] " + chr.getName() + " ID: " + chr.getId() + " (等級 " + chr.getLevel() + ") 召喚獸攻擊傷害異常。打怪傷害: " + damge + " 地圖ID: " + chr.getMapId()));
                }
                allDamageNumbers.add(new Pair(damge, false));
            }
            slea.skip(4);
            allDamage.add(new AttackPair(mob.getObjectId(), allDamageNumbers));
        }
        final Skill summonSkill = SkillFactory.getSkill(summon.getSkill());
        final MapleStatEffect summonEffect = summonSkill.getEffect(summon.getSkillLevel());
        if (summonEffect == null) {
            chr.dropMessage(5, "召喚獸攻擊出現錯誤 => 攻擊效果為空.");
            return;
        }

        if (allDamage.isEmpty()) {
            return;
        }
        map.broadcastMessage(chr, SummonPacket.summonAttack(summon.getOwnerId(), summon.getObjectId(), animation, tbyte, allDamage, chr.getLevel(), false), summon.getTruePosition());
        for (AttackPair attackEntry : allDamage) {
            final MapleMonster mob = map.getMonsterByOid(attackEntry.objectid);
            if (mob == null) {
                continue;
            }
            int totDamageToOneMonster = 0;
            for (Pair eachde : attackEntry.attack) {
                int toDamage = ((Integer) eachde.left);
                totDamageToOneMonster += toDamage;
                if (!((chr.isGM()) || (toDamage < chr.getStat().getCurrentMaxBaseDamage() * 5.0D * (summonEffect.getSelfDestruction() + summonEffect.getDamage() + chr.getStat().getDamageIncrease(summonEffect.getSourceId())) / 100.0D))) {
                    World.Broadcast.broadcastGMMessage(CWvsContext.broadcastMsg(5, "[GM 訊息] " + chr.getName() + " ID: " + chr.getId() + " (等級 " + chr.getLevel() + ") 召喚獸攻擊傷害異常。打怪傷害: " + toDamage + " 地圖ID: " + chr.getMapId()));
                }
            }
            if (sse != null && sse.delay > 0 && summon.getMovementType() != SummonMovementType.不會移動 && summon.getMovementType() != SummonMovementType.CIRCLE_STATIONARY && summon.getMovementType() != SummonMovementType.自由移動 && chr.getTruePosition().distanceSq(mob.getTruePosition()) > 400000.0
                    && !chr.getMap().isBossMap()) {
                chr.getCheatTracker().registerOffense(CheatingOffense.ATTACK_FARAWAY_MONSTER_SUMMON);
            }

            if (totDamageToOneMonster > 0) {
                if (summonEffect.getMonsterStati().size() > 0
                        && summonEffect.makeChanceResult()) {
                    for (Map.Entry<MonsterStatus, Integer> z : summonEffect.getMonsterStati().entrySet()) {
                        mob.applyStatus(chr, new MonsterStatusEffect(z.getKey(), z.getValue(), summonSkill.getId(), null, false), summonEffect.isPoison(), summonEffect.isPoison() ? summonEffect.getDOTTime() * 1000 : 4000, true, summonEffect);
                    }
                }

                if (chr.isShowInfo()) {
                    chr.dropMessage(5, "召喚獸打怪最終傷害 : " + totDamageToOneMonster);
                }

                if (totDamageToOneMonster < (chr.getStat().getCurrentMaxBaseDamage() * 5.0 * (summonEffect.getSelfDestruction() + summonEffect.getDamage() + chr.getStat().getDamageIncrease(summonEffect.getSourceId())) / 100.0)) { //10 x dmg.. eh
                    mob.damage(chr, totDamageToOneMonster, true);
                    chr.checkMonsterAggro(mob);
                    if (!mob.isAlive()) {
                        chr.getClient().getSession().write(MobPacket.killMonster(mob.getObjectId(), 1, false));
                    }
                } else {
                    if (chr.isShowInfo()) {
                        chr.dropMessage(5, "Warning - high damage.");
                    }
                    //AutobanManager.getInstance().autoban(c, "High Summon Damage (" + toDamage + " to " + attackEntry.right + ")");
                    break;
                }
            }
        }

        if (!summon.isMultiAttack()) {
            if (summon.getSkill() == 2111010) {
                chr.removeLinksummon(summon);
            }
            chr.getMap().broadcastMessage(SummonPacket.removeSummon(summon, true));
            chr.getMap().removeMapObject(summon);
            chr.removeVisibleMapObject(summon);
            chr.removeSummon(summon);
            if (summon.getSkill() != 35121011) {
                chr.dispelSkill(summon.getSkill());
            }
        }
    }

    public static final void RemoveSummon(final LittleEndianAccessor slea, final MapleClient c) {
        final MapleMapObject obj = c.getPlayer().getMap().getMapObject(slea.readInt(), MapleMapObjectType.SUMMON);
        if (obj == null || !(obj instanceof MapleSummon)) {
            return;
        }
        final MapleSummon summon = (MapleSummon) obj;
        if (summon.getOwnerId() != c.getPlayer().getId() || summon.getSkillLevel() <= 0) {
            c.getPlayer().dropMessage(5, "移除召喚獸出現錯誤。");
            return;
        }
        if (c.getPlayer().isShowInfo()) {
            c.getPlayer().showMessage(10, "收到移除召喚獸信息 - 召喚獸技能ID: " + summon.getSkill() + " 技能名字 " + SkillFactory.getSkillName(summon.getSkill()));
        }
        if (summon.getSkill() == 35111002 || summon.getSkill() == 35121010) { //rock n shock, amp
            return;
        }
        c.getPlayer().getMap().broadcastMessage(SummonPacket.removeSummon(summon, true));
        c.getPlayer().getMap().removeMapObject(summon);
        c.getPlayer().removeVisibleMapObject(summon);
        c.getPlayer().removeSummon(summon);
        if (summon.getSkill() != 35121011) {
            c.getPlayer().dispelSkill(summon.getSkill());
            if (summon.isAngel()) {
                int buffId = summon.getSkill() % 10000 == 1179 ? 2022823 : summon.getSkill() % 10000 == 1087 ? 2022747 : 2022746;
                c.getPlayer().dispelBuff(buffId);
            }
        }
    }

    public static final void SubSummon(final LittleEndianAccessor slea, final MapleCharacter chr) {
        final MapleMapObject obj = chr.getMap().getMapObject(slea.readInt(), MapleMapObjectType.SUMMON);
        if (obj == null || !(obj instanceof MapleSummon)) {
            return;
        }
        final MapleSummon sum = (MapleSummon) obj;
        if (sum.getOwnerId() != chr.getId() || sum.getSkillLevel() <= 0 || !chr.isAlive()) {
            return;
        }
        switch (sum.getSkill()) {
            case 35121009:
                if (!chr.canSummon(2000)) {
                    return;
                }
                final int skillId = slea.readInt(); // 35121009?
                if (sum.getSkill() != skillId) {
                    return;
                }
                slea.skip(1); // 0E?
                chr.updateTick(slea.readInt());
                for (int i = 0; i < 3; i++) {
                    final MapleSummon tosummon = new MapleSummon(chr, SkillFactory.getSkill(35121011).getEffect(sum.getSkillLevel()), new Point(sum.getTruePosition().x, sum.getTruePosition().y - 5), SummonMovementType.自由移動);
                    chr.getMap().spawnSummon(tosummon);
                    chr.addSummon(tosummon);
                }
                break;
            case 35111011: //healing
                if (!chr.canSummon(1000)) {
                    return;
                }
                chr.addHP((int) (chr.getStat().getCurrentMaxHp() * SkillFactory.getSkill(sum.getSkill()).getEffect(sum.getSkillLevel()).getHp() / 100.0));
                chr.getClient().getSession().write(EffectPacket.showBuffEffect(true, chr, sum.getSkill(), SpecialEffectType.REMOTE_SKILL, chr.getLevel(), sum.getSkillLevel()));
                chr.getMap().broadcastMessage(chr, EffectPacket.showBuffEffect(false, chr, sum.getSkill(), SpecialEffectType.REMOTE_SKILL, chr.getLevel(), sum.getSkillLevel()), false);
                break;
            case 1321007: //beholder
                Skill bHealing = SkillFactory.getSkill(slea.readInt());
                final int bHealingLvl = chr.getTotalSkillLevel(bHealing);
                if (bHealingLvl <= 0 || bHealing == null) {
                    return;
                }
                final MapleStatEffect healEffect = bHealing.getEffect(bHealingLvl);
                if (bHealing.getId() == 1320009) {
                    healEffect.applyTo(chr);
                } else if (bHealing.getId() == 1320008) {
                    if (!chr.canSummon(healEffect.getX() * 1000)) {
                        return;
                    }
                    chr.addHP(healEffect.getHp());
                }
                chr.getClient().getSession().write(EffectPacket.showBuffEffect(true, chr, sum.getSkill(), SpecialEffectType.REMOTE_SKILL, chr.getLevel(), bHealingLvl));
                chr.getMap().broadcastMessage(SummonPacket.summonSkill(chr.getId(), sum.getSkill(), bHealing.getId() == 1320008 ? 5 : (Randomizer.nextInt(3) + 6)));
                chr.getMap().broadcastMessage(chr, EffectPacket.showBuffEffect(false, chr, sum.getSkill(), SpecialEffectType.REMOTE_SKILL, chr.getLevel(), bHealingLvl), false);
                break;
        }

        if (GameConstants.isAngel(sum.getSkill())) {
            int itemEffect = 0;
            switch (sum.getSkill() % 10000) {
                case 86: // 大天使祝福 [等級上限：1]\n得到大天使的祝福。
                case 1085: // 大天使 [等級上限：1]\n召喚被大天使祝福封印的大天使。
                case 1090: // 大天使 [等級上限：1]\n召喚被大天使祝福封印的大天使。
                    itemEffect = 2022746; // 天使祝福
                    break;
                case 1087: // 黑天使 [等級上限：1]\n召喚被黑天使祝福封印的大天使。
                    itemEffect = 2022747; // 黑天使祝福
                    break;
                case 1179: // 白色天使 [最高等級： 1]\n召喚出被封印的聖潔天使。
                    itemEffect = 2022823; // 白色精靈祝福
                    break;
                default:
                    switch (sum.getSkill()) {
                        case 80001154: // 白色天使 [最高等級：1]\n召喚被白天使的祝福封印的白天使。
                            itemEffect = 2022823; // 白色精靈祝福
                            break;
                        case 80000086: // 戰神祝福 [等級上限：1]\n得到戰神的祝福。
                        case 80001262: // 戰神祝福 [等級上限：1]\n召喚戰神
                            itemEffect = 2023189; // 戰神的祝福
                            break;
                        case 80000054: // 恶魔契约 获得恶魔的力量，攻击力和魔法攻击力增加15，HP、MP增加20%，可以和其他增益叠加。
                            itemEffect = 2023150;
                            break;
                        case 80000052: // 恶魔之息 获得恶魔的力量，攻击力和魔法攻击力增加6，HP、MP增加5%，可以和其他增益叠加。
                            itemEffect = 2023148;
                            break;
                        case 80000053: // 恶魔召唤 获得恶魔的力量，攻击力和魔法攻击力增加13，HP、MP增加10%，可以和其他增益叠加。
                            itemEffect = 2023159; // 豚骨蛇湯
                            break;
                        default:
                            itemEffect = 2022746; // 天使祝福
                            if (chr.isShowErr()) {
                                chr.showInfo("天使戒指", true, "itemEffect未設定");
                            }
                    }
            }
            MapleItemInformationProvider.getInstance().getItemEffect(itemEffect).applyTo(chr);
            chr.getClient().getSession().write(EffectPacket.showBuffEffect(true, chr, sum.getSkill(), SpecialEffectType.ZERO, 2, 1));
            chr.getMap().broadcastMessage(chr, EffectPacket.showBuffEffect(false, chr, sum.getSkill(), SpecialEffectType.ZERO, 2, 1), false);
        }
    }

    public static final void SummonPVP(final LittleEndianAccessor slea, final MapleClient c) {
        final MapleCharacter chr = c.getPlayer();
        if (chr == null || chr.isHidden() || !chr.isAlive() || chr.hasBlockedInventory() || chr.getMap() == null || !chr.inPVP() || !chr.getEventInstance().getProperty("started").equals("1")) {
            return;
        }
        final MapleMap map = chr.getMap();
        final MapleMapObject obj = map.getMapObject(slea.readInt(), MapleMapObjectType.SUMMON);
        if (obj == null || !(obj instanceof MapleSummon)) {
            chr.dropMessage(5, "The summon has disappeared.");
            return;
        }
        int tick = -1;
        if (slea.available() == 27) {
            slea.skip(23);
            tick = slea.readInt();
        }
        final MapleSummon summon = (MapleSummon) obj;
        if (summon.getOwnerId() != chr.getId() || summon.getSkillLevel() <= 0) {
            chr.dropMessage(5, "Error.");
            return;
        }
        final Skill skil = SkillFactory.getSkill(summon.getSkill());
        final MapleStatEffect effect = skil.getEffect(summon.getSkillLevel());
        final int lvl = Integer.parseInt(chr.getEventInstance().getProperty("lvl"));
        final int type = Integer.parseInt(chr.getEventInstance().getProperty("type"));
        final int ourScore = Integer.parseInt(chr.getEventInstance().getProperty(String.valueOf(chr.getId())));
        int addedScore = 0;
        final boolean magic = skil.isMagic();
        boolean killed = false, didAttack = false;
        double maxdamage = lvl == 3 ? chr.getStat().getCurrentMaxBasePVPDamageL() : chr.getStat().getCurrentMaxBasePVPDamage();
        maxdamage *= (effect.getDamage() + chr.getStat().getDamageIncrease(summon.getSkill())) / 100.0;
        int mobCount = 1, attackCount = 1, ignoreDEF = chr.getStat().ignoreTargetDEF;

        final SummonSkillEntry sse = SkillFactory.getSummonData(summon.getSkill());
        if (summon.getSkill() / 1000000 != 35 && summon.getSkill() != 33101008 && sse == null) {
            chr.dropMessage(5, "Error in processing attack.");
            return;
        }
        Point lt, rb;
        if (sse != null) {
            if (sse.delay > 0) {
                if (tick != -1) {
                    summon.CheckSummonAttackFrequency(chr, tick);
                    chr.updateTick(tick);
                } else {
                    summon.CheckPVPSummonAttackFrequency(chr);
                }
                chr.getCheatTracker().checkSummonAttack();
            }
            mobCount = sse.mobCount;
            attackCount = sse.attackCount;
            lt = sse.lt;
            rb = sse.rb;
        } else {
            lt = new Point(-100, -100);
            rb = new Point(100, 100);
        }
        final Rectangle box = MapleStatEffect.calculateBoundingBox(chr.getTruePosition(), chr.isFacingLeft(), lt, rb, 0);
        List<AttackPair> ourAttacks = new ArrayList<>();
        List<Pair<Integer, Boolean>> attacks;
        for (MapleMapObject mo : chr.getMap().getCharactersIntersect(box)) {
            final MapleCharacter attacked = (MapleCharacter) mo;
            if (attacked.getId() != chr.getId() && attacked.isAlive() && !attacked.isHidden() && (type == 0 || attacked.getTeam() != chr.getTeam())) {
                double rawDamage = maxdamage / Math.max(0, ((magic ? attacked.getStat().mdef : attacked.getStat().wdef) * Math.max(1.0, 100.0 - ignoreDEF) / 100.0) * (type == 3 ? 0.1 : 0.25));
                if (attacked.getBuffedValue(MapleBuffStat.INVINCIBILITY) != null || PlayersHandler.inArea(attacked)) {
                    rawDamage = 0;
                }
                rawDamage += (rawDamage * chr.getDamageIncrease(attacked.getId()) / 100.0);
                rawDamage *= attacked.getStat().mesoGuard / 100.0;
                rawDamage = attacked.modifyDamageTaken(rawDamage, attacked).left;
                final double min = (rawDamage * chr.getStat().trueMastery / 100);
                attacks = new ArrayList<>(attackCount);
                int totalMPLoss = 0, totalHPLoss = 0;
                for (int i = 0; i < attackCount; i++) {
                    int mploss = 0;
                    double ourDamage = Randomizer.nextInt((int) Math.abs(Math.round(rawDamage - min)) + 1) + min;
                    if (attacked.getStat().dodgeChance > 0 && Randomizer.nextInt(100) < attacked.getStat().dodgeChance) {
                        ourDamage = 0;
                        //i dont think level actually matters or it'd be too op
                        //} else if (attacked.getLevel() > chr.getLevel() && Randomizer.nextInt(100) < (attacked.getLevel() - chr.getLevel())) {
                        //	ourDamage = 0;
                    }
                    if (attacked.getBuffedValue(MapleBuffStat.MAGIC_GUARD) != null) {
                        mploss = (int) Math.min(attacked.getStat().getMp(), (ourDamage * attacked.getBuffedValue(MapleBuffStat.MAGIC_GUARD).doubleValue() / 100.0));
                    }
                    ourDamage -= mploss;
                    if (attacked.getBuffedValue(MapleBuffStat.INFINITY) != null) {
                        mploss = 0;
                    }
                    attacks.add(new Pair<>((int) Math.floor(ourDamage), false));

                    totalHPLoss += Math.floor(ourDamage);
                    totalMPLoss += mploss;
                }
                attacked.addMPHP(-totalHPLoss, -totalMPLoss);
                ourAttacks.add(new AttackPair(attacked.getId(), attacked.getPosition(), attacks));
                attacked.getCheatTracker().setAttacksWithoutHit(false);
                if (totalHPLoss > 0) {
                    didAttack = true;
                }
                if (attacked.getStat().getHPPercent() <= 20) {
                    SkillFactory.getSkill(PlayerStats.getSkillByJob(93, attacked.getJob())).getEffect(1).applyTo(attacked);
                }
                if (effect != null) {
                    if (effect.getMonsterStati().size() > 0 && effect.makeChanceResult()) {
                        for (Map.Entry<MonsterStatus, Integer> z : effect.getMonsterStati().entrySet()) {
                            MapleDisease d = MonsterStatus.getLinkedDisease(z.getKey());
                            if (d != null) {
                                attacked.giveDebuff(d, z.getValue(), effect.getDuration(), d.getDisease(), 1);
                            }
                        }
                    }
                    effect.handleExtraPVP(chr, attacked);
                }
                chr.getClient().getSession().write(CField.getPVPHPBar(attacked.getId(), attacked.getStat().getHp(), attacked.getStat().getCurrentMaxHp()));
                addedScore += (totalHPLoss / 100) + (totalMPLoss / 100); //ive NO idea
                if (!attacked.isAlive()) {
                    killed = true;
                }

                if (ourAttacks.size() >= mobCount) {
                    break;
                }
            }
        }
        if (killed || addedScore > 0) {
            chr.getEventInstance().addPVPScore(chr, addedScore);
            chr.getClient().getSession().write(CField.getPVPScore(ourScore + addedScore, killed));
        }
        if (didAttack) {
            chr.getMap().broadcastMessage(SummonPacket.pvpSummonAttack(chr.getId(), chr.getLevel(), summon.getObjectId(), summon.isFacingLeft() ? 4 : 0x84, summon.getTruePosition(), ourAttacks));
            if (!summon.isMultiAttack()) {
                chr.getMap().broadcastMessage(SummonPacket.removeSummon(summon, true));
                chr.getMap().removeMapObject(summon);
                chr.removeVisibleMapObject(summon);
                chr.removeSummon(summon);
                if (summon.getSkill() != 35121011) {
                    chr.cancelEffectFromBuffStat(MapleBuffStat.SUMMON);
                }
            }
        }
    }
}
