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
        qm.getNPCTalk(4, 1531046, -1, 0, 9, 0, ["來的剛好， #b#h0##k.\r\n捷運的日報上刊了這張照片，不管怎麼想都覺得是合成的，所以和朋友吵架了。"], [0, 1, 0]);
    } else if (status === i++) {
        qm.getDirectionStatus(true);
        qm.lockUI(1, 0);
        qm.disableOthers(true);
        qm.getDirectionEffect(1, "", [1500]);
    } else if (status === i++) {
        qm.showEnvironment(15, "", [1, 255, 0, 0, 0, 500]);
        qm.getDirectionEffect(1, "", [500]);
    } else if (status === i++) {
        qm.showEnvironment(17, ["1", "Map/Effect2.img/kinesis/news2"], [0, 1000, 0, 0, 12, 4, 0]);
        qm.getDirectionEffect(1, "", [1500]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#b(啊，想起來了，那時候剛好經過那邊。)#k"], [0, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getDirectionEffect(1, "", [1500]);
    } else if (status === i++) {
        qm.showEnvironment(17, ["1"], [2, 1500]);
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
        qm.getNPCTalk(4, 1531046, -1, 0, 9, 0, ["嗯？你說什麼？"], [0, 1, 0]);
    } else if (status === i++) {
        qm.getNPCTalk(4, 1531046, -1, 0, 3, 0, ["沒，什麼話都沒說。"], [1, 1, 0]);
    } else if (status === i++) {
        qm.getNPCTalk(4, 1531046, -1, 0, 9, 0, ["據說凱內西斯使用了念力。\r\n好像是不用手就可以移動物體的超能力。"], [1, 1, 0]);
    } else if (status === i++) {
        qm.getNPCTalk(4, 1531046, -1, 0, 9, 0, ["不管怎麼想，以科學角度來說真的一點都不合理。\r\n你不覺得嗎， #b#h0##k?"], [1, 1, 0]);
    } else if (status === i++) {
        qm.getNPCTalk(4, 1531046, -1, 0, 9, 0, ["對了…麻煩幫我在同意書上簽名。"], [1, 1, 0]);
    } else if (status === i++) {
        qm.forceStartQuest(22723);
        qm.forceCompleteQuest(22723);
		qm.gainExp(1242);
        qm.dispose();
    } else {
        qm.dispose();
    }
}
