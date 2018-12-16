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
        if (cm.getOneInfo(22700, "E1") !== "1") {
            cm.showEnvironment(23, "", [350]);
            cm.updateOneInfo(22700, "E1", "1");
            cm.gainExp(350);
        }
        cm.getDirectionEffect(1, "", [2500]);
        cm.playVoiceEffect("Voice3.img/Kinesis/guide_04");
    } else if (status === i++) {
        cm.disableOthers(false);
        cm.lockUI(0);
        cm.dispose();
        cm.warp(331001120, 0);
    } else {
        cm.dispose();
    }
}
