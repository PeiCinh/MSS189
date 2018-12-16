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
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["剛剛跟你戰鬥的對象是什麼?不是機器也不像生命體。"]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["這個有可能是灰塵怪物。附近的學校也有幾次發現的紀錄"]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["等一下，樓上有聲音。似乎該去看一下。"]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 5, 37, 1, ["...如果你的判斷是這樣的話。\n怪物掉落甚麼東西的話,請收集10個後帶來,知道嗎?"]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 2, 37, 1, ["不要在這地方待太久比較好。\n(收集從樓上的灰塵掉落的道具10個)"]);
    } else if (status === i++) {
        //qm.updateInfoQuest(22700, "V01=1;V02=1;q21end=0;coNight=1;kinetuto=1;E1=1;kinetuto2=1;E2=1;E3=1");
        qm.forceStartQuest(22728);
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
            if (qm.haveItem(4034602, 10) ) {
                qm.removeAll(4034602);
                qm.forceCompleteQuest();
				qm.forceStartQuest(22729);
            } else {
                qm.sendNext("請確認你裝備欄有足夠空間。");
            }
            qm.dispose();
        } else {
            qm.dispose();
        }
    }
}