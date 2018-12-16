/* global qm */
var status = -1;

function start(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.forceStartQuest(22714);
        qm.getDirectionStatus(true);
        qm.lockUI(1, 0);
        qm.disableOthers(true);
        qm.getDirectionEffect(14, "", []);
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["都講解完了嗎？"], [0, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face9#對了，還有還一部分還沒說明。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face9#你可以累積心靈點數 #g(PP)#k來使用終極技喔。這是你能使用的最強招式。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face9#至於要怎麼累積心靈點數？\r\n很簡單。只要持續使用念動力的話，就會自動累積。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getDirectionEffect(1, "", [2500]);
        qm.showWZEffectNew("UI/tutorial.img/kinesis/2");
        qm.playVoiceEffect("Voice3.img/Kinesis/guide_14");
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face9#若還沒使用過終極技的話，我幫你放在 #g[END]#k 鍵吧。\r\n出來之前用用看吧。"], [0, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.showEnvironment(5, "Sound/SoundEff.img/blackHeaven/metaldrop", []);
        qm.spawnMob(2700300, 200, -238);
        qm.spawnMob(2700300, 200, -238);
        qm.spawnMob(2700300, 200, -238);
        qm.spawnMob(2700300, 200, -238);
        qm.spawnMob(2700300, 200, -238);
        qm.spawnMob(2700300, 200, -238);
        qm.spawnMob(2700300, 200, -238);
        qm.setSkillMap(142001002, 79);
        qm.getDirectionEffect(1, "", [1000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face9#終極技-梅泰利爾 #g[END]#k 技能不只傷害很強，還可以輕鬆的攻擊位在高處的敵人。"], [0, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.disableOthers(false);
        qm.lockUI(0);
        qm.dispose();
    } else {
        qm.dispose();
    }
}
