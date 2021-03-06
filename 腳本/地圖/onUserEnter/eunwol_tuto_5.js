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
        ms.lockUI(1, 0);
        ms.getDirectionEffect(9, "", [0]);
        ms.getDirectionEffect(1, "", [1000]);
        ms.getDirectionStatus(true);
    } else if (status === i++) {
        ms.showEnvironment(5, "eunwolTuto/seal", []);
        ms.getDirectionEffect(1, "", [300]);
        ms.showWZEffectNew("Effect/Direction15.img/effect/tuto/seal/front");
        ms.showWZEffectNew("Effect/Direction15.img/effect/tuto/seal/back");
    } else if (status === i++) {
        ms.showEnvironment(5, "eunwolTuto/particle", []);
        ms.getDirectionEffect(1, "", [1500]);
    } else if (status === i++) {
        ms.showEnvironment(5, "eunwolTuto/seal_stone", []);
        ms.getDirectionEffect(2, "Effect/Direction15.img/effect/tuto/seal/stone", [0, 600, -310, 1, 1, 0, 0, 0]);
        ms.getDirectionEffect(2, "Effect/Direction15.img/effect/tuto/seal/stone", [0, -600, -310, 1, 1, 0, 0, 0]);
        ms.getDirectionEffect(2, "Effect/Direction15.img/effect/tuto/seal/stone", [0, 150, -520, 1, 1, 0, 0, 0]);
        ms.getDirectionEffect(2, "Effect/Direction15.img/effect/tuto/seal/stone", [0, -150, -520, 1, 1, 0, 0, 0]);
        ms.getDirectionEffect(2, "Effect/Direction15.img/effect/tuto/seal/stone", [0, 0, -81, 1, 1, 0, 0, 0]);
        ms.getDirectionEffect(1, "", [600]);
    } else if (status === i++) {
        ms.getDirectionEffect(9, "", [1]);
        ms.getDirectionEffect(1, "", [1000]);
    } else if (status === i++) {
        ms.getDirectionEffect(2, "Effect/Direction15.img/effect/story/BalloonMsg0/3", [0, 200, -320, 1, 1, 0, 0, 0]);
        ms.getDirectionEffect(1, "", [2000]);
    } else if (status === i++) {
        ms.showEnvironment(15, "", [1, 255, 0, 0, 0, 0]);
        ms.lockUI(0);
        ms.dispose();
        ms.warp(940200000, 0);
    } else {
        ms.dispose();
    }
}
