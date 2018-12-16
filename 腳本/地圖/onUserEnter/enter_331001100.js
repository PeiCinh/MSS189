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
        ms.getDirectionEffect(9, "", [1]);
        ms.showEnvironment(15, "", [1, 255, 0, 0, 0, 0]);
        ms.playMovie("Kinesis1.avi", true);
    } else if (status === i++) {
        ms.getDirectionEffect(7, "", [0, 1000, 0, 4830, -620]);
    } else if (status === i++) {
        ms.showEnvironment(5, "Sound/SoundEff.img/kinesis/signal", []);
        ms.getDirectionEffect(1, "", [500]);
    } else if (status === i++) {
        ms.showEnvironment(15, "", [1, 255, 0, 0, 0, 0]);
        ms.getDirectionEffect(1, "", [1200]);
    } else if (status === i++) {
        ms.showEnvironment(15, "", [0, 0, 0, 0, 0, 1000]);
        ms.getDirectionEffect(1, "", [1400]);
    } else if (status === i++) {
        ms.getDirectionEffect(7, "", [10000, 1000, 10000, 4450, -620]);
    } else if (status === i++) {
        ms.getDirectionEffect(1, "", [5000]);
    } else if (status === i++) {
        ms.showEnvironment(17, ["title", "Map/Effect2.img/kinesis/title"], [0, 3000, 0, 0, 40, 4, 0]);
        ms.getDirectionEffect(1, "", [4000]);
    } else if (status === i++) {
        ms.showEnvironment(17, ["title"], [2, 2000]);
        ms.getDirectionEffect(1, "", [2000]);
    } else if (status === i++) {
        ms.getDirectionEffect(1, "", [3000]);
    } else if (status === i++) {
        ms.getDirectionEffect(7, "", [8000, 1000, 8000, 200, -300]);
    } else if (status === i++) {
        ms.getDirectionEffect(1, "", [8000]);
    } else if (status === i++) {
        ms.showEnvironment(15, "", [1, 255, 0, 0, 0, 500]);
        ms.getDirectionEffect(1, "", [500]);
    } else if (status === i++) {
        ms.getDirectionEffect(9, "", [0]);
        ms.disableOthers(false);
        ms.lockUI(0);
        ms.dispose();
        ms.warp(331001110, 0);
    } else {
        ms.dispose();
    }
}
