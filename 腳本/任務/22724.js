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
        qm.getNPCTalk(4, 1531047, -1, 0, 9, 0, ["嗯？簽名？\r\n既然是學生會長的請託，那當然非常樂意。"], [0, 1, 0]);
    } else if (status === i++) {
        qm.getNPCTalk(4, 1531047, -1, 0, 9, 0, ["那個， 聽說凱內西斯抓到這次銀行搶案的搶匪。\r\n你看到新聞了嗎？"], [1, 1, 0]);
    } else if (status === i++) {
        qm.getDirectionStatus(true);
        qm.lockUI(1, 0);
        qm.disableOthers(true);
        qm.getDirectionEffect(1, "", [1500]);
    } else if (status === i++) {
        qm.showEnvironment(15, "", [1, 255, 0, 0, 0, 500]);
        qm.getDirectionEffect(1, "", [500]);
    } else if (status === i++) {
        qm.showEnvironment(17, ["2", "Map/Effect2.img/kinesis/news3"], [0, 1000, 0, 0, 12, 4, 0]);
        qm.getDirectionEffect(1, "", [1500]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#b(照片挺不賴的，為了讓這兩人面對鏡頭微笑，當時還耗了點功夫。)#k"], [0, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getDirectionEffect(1, "", [1500]);
    } else if (status === i++) {
        qm.showEnvironment(17, ["2"], [2, 1500]);
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
        qm.getNPCTalk(4, 1531047, -1, 0, 9, 0, ["那個，這是秘密情報。\r\n根據可靠的消息，凱內西斯的真實身分…"], [0, 1, 0]);
    } else if (status === i++) {
        qm.getNPCTalk(4, 1531047, -1, 0, 9, 0, ["是因為遺傳因子實驗而誕生的異變體。被恐怖份子綁架、接著被昆蟲咬到後，就變成綠色肌膚的超人異變體。"], [1, 1, 0]);
    } else if (status === i++) {
        qm.getNPCTalk(4, 1531047, -1, 0, 9, 0, ["應該是平時帶著眼鏡，以新聞記者自居的傢伙吧。可是實際上非常有錢也說不定喔？"], [1, 1, 0]);
    } else if (status === i++) {
        qm.getNPCTalk(4, 1531047, -1, 0, 3, 0, ["…是說大家也看太多美劇了吧。"], [1, 1, 0]);
    } else if (status === i++) {
        qm.forceStartQuest(22724);
        qm.forceCompleteQuest(22724);
		qm.gainExp(1242);
        qm.forceStartQuest(11620, "0");
        qm.updateInfoQuest(25980, "normal=#;hard=#");
        qm.updateInfoQuest(25980, "normal=#;hard=#");
        qm.dispose();
    } else {
        qm.dispose();
    }
}
