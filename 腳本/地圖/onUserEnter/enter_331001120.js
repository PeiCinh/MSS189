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
        ms.spawnMob(2700302, 705, 63);
        ms.getDirectionStatus(true);
        ms.lockUI(1, 0);
        ms.disableOthers(true);
        ms.getDirectionEffect(16, "", [-1]);
        ms.getDirectionEffect(14, "", []);
        ms.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face9#在正式進行戰鬥力測量前，必須先有基本設定，所以請先擊倒前面的訓練機器人A吧。"], [0, 1, 0, 1531001]);
        ms.getDirectionStatus(true);
    } else if (status === i++) {
        ms.disableOthers(false);
        ms.lockUI(0);
        ms.showWZEffectNew("UI/tutorial.img/kinesis/0");
        ms.playVoiceEffect("Voice3.img/Kinesis/guide_06");
        ms.dispose();
    } else {
        ms.dispose();
    }
}
