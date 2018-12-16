/* global qm */
var status = -1;

function start(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.getNPCTalk(4, 1531061, -1, 0, 9, 0, ["#b#h0##k, 你有看到那個了嗎？\r\n就是那個新聞，有嗎有嗎？聽說凱內西斯救了個小孩呢。"], [0, 1, 0]);
    } else if (status === i++) {
        qm.getDirectionStatus(true);
        qm.lockUI(1, 0);
        qm.disableOthers(true);
        qm.getDirectionEffect(1, "", [1500]);
    } else if (status === i++) {
        qm.showEnvironment(15, "", [1, 255, 0, 0, 0, 500]);
        qm.getDirectionEffect(1, "", [500]);
    } else if (status === i++) {
        qm.showEnvironment(17, ["0", "Map/Effect2.img/kinesis/news1"], [0, 1000, 0, 0, 12, 4, 0]);
        qm.getDirectionEffect(1, "", [1500]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#b(是啊，那時候頭髮差點被燒光。)#k"], [0, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getDirectionEffect(1, "", [1500]);
    } else if (status === i++) {
        qm.showEnvironment(17, ["0"], [2, 1500]);
        qm.getDirectionEffect(1, "", [1500]);
    } else if (status === i++) {
        qm.showEnvironment(15, "", [1, 255, 0, 0, 0, 0]);
        qm.getDirectionEffect(1, "", [1200]);
    } else if (status === i++) {
        qm.showEnvironment(15, "", [0, 0, 0, 0, 0, 1000]);
        qm.getDirectionEffect(1, "", [1400]);
    } else if (status === i++) {
        qm.disableOthers(false);
        qm.lockUI(0);
        qm.getNPCTalk(4, 1531061, -1, 0, 9, 0, ["嗯？你說什麼？"], [0, 1, 0]);
    } else if (status === i++) {
        qm.getNPCTalk(4, 1531061, -1, 0, 3, 0, ["沒，什麼都沒說，快簽名吧。"], [1, 1, 0]);
    } else if (status === i++) {
        qm.forceStartQuest(22722);
        qm.forceCompleteQuest(22722);
		qm.gainExp(1242);
        qm.dispose();
    } else {
        qm.dispose();
    }
}
