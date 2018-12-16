/* global qm */
var status = -1;

function start(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

        if (status == 0) {
            qm.sendNext("哇, 你現在比我上次見你的時候強了很多呢, 我覺得你現在是時候轉職了。");
        } else if (status == 1) {
            qm.sendNextPrev("這是法師在等級30或以上才能進行的!");
        } else if (status == 2) {
            qm.sendYesNo("那麼..... 你想測試自己的能力嗎? 你只需要消滅那些怪物獲得30個黑珠就可以了! ");
        } else if (status == 3) {
            if (mode == 1) {
                qm.forceStartQuest();
                if (!qm.haveItem(4031013, 30)) {
                    qm.warp(910140000);//mage test
                }
            } else {
                qm.sendNext("好吧,那麼你想轉職的時候再來找我吧。");
            }
            qm.dispose();
        } else {
            qm.dispose();
        }
}


function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			//qm.getNPCTalk(3, 0, -1, 2, 37, 1, ["不要在這地方待太久比較好。\n(收集從樓上的灰塵掉落的道具10個)"]);
            // if (qm.haveItem(4034602, 10) ) {
                // qm.removeAll(4034602);
                qm.forceCompleteQuest();
				// qm.forceStartQuest(22729);
            // } else {
                // qm.sendNext("請確認你裝備欄有足夠空間。");
            // }
            qm.dispose();
        } else {
            qm.dispose();
        }
    }
}