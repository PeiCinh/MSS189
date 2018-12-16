/* global pi */

function enter(pi) {
    if (pi.getOneInfo(22700, "V02") !== "1") {
        pi.updateOneInfo(22700, "V02", "1");
    }
}
