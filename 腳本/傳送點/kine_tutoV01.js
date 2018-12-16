/* global pi */

function enter(pi) {
    if (pi.getOneInfo(22700, "V01") !== "1") {
        pi.updateOneInfo(22700, "V01", "1");
        pi.playVoiceEffect("Voice3.img/Kinesis/guide_02");
    }
}
