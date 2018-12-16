/* global ms */
var status = -1;

function action(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.getDirectionStatus(true);
        ms.lockUI(1, 0);
        ms.disableOthers(true);
        ms.getDirectionEffect(14, "", []);
        ms.getDirectionEffect(16, "", [-1]);
        ms.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face9#凱內西斯，現在來使用你持有的攻擊技能吧。"], [0, 1, 0, 1531001]);
        ms.getDirectionStatus(true);
    } else if (status === i++) {
        ms.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face9#我會幫把你的ESP限制器資料升級到 #b階段 1#k。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        ms.teachSkill(142001000, 1, 10);
        ms.teachSkill(142001001, 1, 20);
        ms.teachSkill(142001004, 1, 5);
        ms.teachSkill(142001002, 1, 10);
        ms.setSkillMap(142001000, 42);
        ms.setSkillMap(142001001, 83);
        ms.disableOthers(false);
        ms.lockUI(0);
        ms.getNPCTalk(3, 0, -1, 0, 37, 1, ["#face9#心靈推手 #g[SHIFT]#k 技能是把怪物推到所想的方向的技能喔。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        ms.getNPCTalk(3, 0, -1, 0, 37, 1, ["#face9#然後擊潰暴殺 #g[DEL]#k 技能是可以用你的念動力來把敵人抬起來後扔下去的技能。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        ms.getNPCTalk(3, 0, -1, 0, 37, 1, ["用#gSHIFT#k擊退、然後再用#gDEL#k來攻擊的意思吧？"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        ms.getNPCTalk(3, 0, -1, 0, 37, 1, ["#face9#正解。然後連續按下跳躍鍵時，可以移動的更遠喔。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        ms.showEnvironment(5, "Sound/SoundEff.img/blackHeaven/metaldrop", []);
        ms.spawnMob(2700300, -50, 63);
        ms.spawnMob(2700300, -50, 63);
        ms.spawnMob(2700300, -50, 63);
        ms.spawnMob(2700300, -50, 63);
        ms.spawnMob(2700300, -50, 63);
        ms.spawnMob(2700300, -50, 63);
        ms.spawnMob(2700300, -50, 63);
        ms.showEnvironment(5, "Sound/Field.img/flowervioleta/wink", []);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
