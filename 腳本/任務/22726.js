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
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["#face1#凱內西斯，不管怎樣，搞不好這是為了要釣你出來所設下的陷阱。\r\n最好別再插手，說不定會比較好。"], [0, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["但如果我們的推測是正確的話，說不定是某個瘋狂的傢伙正要釋放怪物到我們的城市裡，不是嗎？"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["是啊，雖然只是推測。\r\n但是你想怎麼做？"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 5, 37, 1, ["信號是指向學校，要去嗎？\r\n#b#L1#當然去。#l\r\n#b#L2#再仔細考慮一下。#l"], [1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 2, 37, 1, ["我就知道你會這麼回答。\r\n時間是…就是不久之後了，如果你要去看的話，我會在這邊支援你。"], [1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["OK。我現在傳送位置資訊給你，似乎是學校的教室，因為現在還是學生在校的時間，你最好小心一點。"], [0, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["#b(去學校確認是否有異況。)#k"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.updateInfoQuest(22700, "V01=1;V02=1;q21end=0;coNight=1;kinetuto=1;E1=1;kinetuto2=1;E2=1;E3=1");
        qm.forceStartQuest(22726);
        qm.dispose();
    } else {
        qm.dispose();
    }
}
