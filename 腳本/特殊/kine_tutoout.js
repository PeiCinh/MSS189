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
        cm.getDirectionStatus(true);
        cm.lockUI(1, 0);
        cm.disableOthers(true);
        cm.showEnvironment(5, "Sound/Field.img/masteryBook/EnchantSuccess", []);
        if (cm.getOneInfo(22700, "E3") !== "1") {
            cm.showEnvironment(23, "", [600]);
            cm.updateOneInfo(22700, "E3", "1");
            cm.gainExp(600);
        }
        cm.forceStartQuest(11620, "0");
        cm.getDirectionEffect(1, "", [2500]);
        cm.playVoiceEffect("Voice3.img/Kinesis/guide_08");
        cm.updateInfoQuest(25980, "normal=#0#;hard=#");
    } else if (status === i++) {
        cm.disableOthers(false);
        cm.lockUI(0);
        cm.forceCompleteQuest(22711);
        cm.forceCompleteQuest(22714);
        cm.forceStartQuest(22715);
        cm.dispose();
        cm.warp(331001000, 2);
    } else {
        cm.dispose();
    }
}
