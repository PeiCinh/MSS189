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
        if (!ms.isQuestActive(22712) && !ms.isQuestFinished(22712)) {
            ms.getNPCTalk(3, 0, -1, 0, 36, 1, ["辛苦了，往第2層移動。"], [0, 1, 0, 1531001]);
        } else {
            ms.dispose();
        }
    } else if (status === i++) {
        ms.dispose();
    } else {
        ms.dispose();
    }
}
