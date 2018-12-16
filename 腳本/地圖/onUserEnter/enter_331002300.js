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
        ms.spawnMob(2700303, 0, 0);
        ms.spawnMob(2700303, 0, 0);
        ms.spawnMob(2700303, 0, 0);
        ms.spawnMob(2700303, 0, 0);
        ms.spawnMob(2700303, 0, 0);
        ms.spawnMob(2700304, 0, 0);
        ms.spawnMob(2700304, 0, 0);
        ms.spawnMob(2700304, 0, 0);
        ms.spawnMob(2700304, 0, 0);
        ms.spawnMob(2700304, 0, 0);
        ms.spawnMob(2700305, 0, 0);
        ms.spawnMob(2700305, 0, 0);
        ms.spawnMob(2700305, 0, 0);
        ms.spawnMob(2700305, 0, 0);
        ms.spawnMob(2700305, 0, 0);
        ms.forceStartQuest(22727, "000001000");
        //ms.forceStartQuest(25965, "1");
        //ms.forceStartQuest(11620, "12");
        ms.dispose();
        //ms.warp(331002000, 0);
    } else {
        ms.dispose();
    }
}
