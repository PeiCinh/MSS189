/* global cm */
var status = -1;

function action(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.getNPCTalk(3, 0, -1, 0, 36, 1, ["杰∼伊∼要慢慢走過去實在太無聊了。可以稍為動動身體了嗎？"], [0, 1, 0, 1531000]);
    } else if (status === i++) {
        cm.getNPCTalk(3, 0, -1, 0, 36, 1, ["#face9#知道了。在最後階段裡，我會把資料升級到可使用 #b三段跳#k和 #b攻擊技能#k。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        cm.getDirectionStatus(true);
        cm.lockUI(1, 0);
        cm.disableOthers(true);
        cm.showEnvironment(5, "Sound/Field.img/masteryBook/EnchantSuccess", []);
        if (cm.getOneInfo(22700, "E2") !== "1") {
            cm.showEnvironment(23, "", [600]);
            cm.updateOneInfo(22700, "E2", "1");
            cm.gainExp(600);
        }
        cm.getDirectionEffect(1, "", [2500]);
        cm.playVoiceEffect("Voice3.img/Kinesis/guide_04");
    } else if (status === i++) {
        cm.disableOthers(false);
        cm.lockUI(0);
        cm.dispose();
        cm.warp(331001130, 0);
    } else {
        cm.dispose();
    }
}

