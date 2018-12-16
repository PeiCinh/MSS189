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
        qm.getDirectionStatus(true);
        qm.lockUI(1, 0);
        qm.disableOthers(true);
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["已經全部放入系統，這次應該不會有太大的錯誤。 \r\n目前累積資料還是很重要的，如果資料變多的話，請升級。"], [0, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["那麼應該要快點準備下一個版本的樣子？依照你最近的活躍，似乎需要即時升級的版本呢。"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["凱、內、西、斯，我最近的工作量有多大，請你好好回想一下，光是昨天就消除了四個附近有你的影子的CCTV資料…"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["算我求你了， 就算要逞英雄，至少遮個臉低調點如何？"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 5, 37, 1, ["把臉遮住，可以嗎？\r\n#b\r\n#L1#我為什麼？很麻煩耶。#l\r\n#L2#根據當時的狀況，根本就沒時間。#l\r\n#L3#帥氣的遮住這麼帥的臉會讓世界少一份光彩的。#l"], [1531001]);
    } else if (status === i++) {
        qm.updateInfoQuest(22720, "done=1");
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["呃…真虧你答得出來，這答案簡直爛的有剩。"], [0, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["如果這樣的話，何不把你頭上那好笑的眼罩借給我，你覺得如何呢？\r\n不要凱內西斯也沒關係，想要貓咪人的話，我可以破例為你當一天喔。"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["不行，就算你是我的朋友，也不能碰我的東西，會被外面的細菌汙染的。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.showEnvironment(5, "Sound/SoundEff.img/PvP/80001740_Use", []);
        qm.showEnvironment(17, ["0", "Map/Effect2.img/kinesis/chaJay"], [0, 500, 800, 0, 12, 5, 0]);
        qm.showEnvironment(17, ["0"], [1, 300, -800, 0]);
        qm.getDirectionEffect(1, "", [5000]);
    } else if (status === i++) {
        qm.showEnvironment(5, "Sound/SoundEff.img/12thMS/jump_m", []);
        qm.showEnvironment(17, ["0"], [2, 500]);
        qm.showEnvironment(17, ["0"], [1, 300, 800, 0]);
        qm.getDirectionEffect(1, "", [1000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["對了，你不在的時候，點滿憤怒值的#b悠娜#k來過了，她叫我傳口信給你。"], [0, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.forceStartQuest(22720);
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["呃…這一看就覺得是非常無趣的東西…難道是學生會的記錄簿…？"], [1, 1, 0, 1531000]);
        qm.gainItem(4034601, 1);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["悠娜在學校等你，你是拖拖拉拉的話，小心悠娜的憤怒值會破表喔。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["別跟我說因為太久沒去學校所以忘記怎麼走了，出去之後往右邊。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#b(出門去找悠娜。)#k"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getDirectionEffect(1, "", [1000]);
    } else if (status === i++) {
        qm.disableOthers(false);
        qm.lockUI(0);
        qm.dispose();
    } else {
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.getDirectionStatus(true);
        qm.lockUI(1, 0);
        qm.disableOthers(true);
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#b#h0##k!! 真不敢相信你到現在才來，我請杰伊傳話已經是兩天前的事情了！！"], [0, 1, 0, 1531002]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["我不久前才知道這件事的。 \r\n因為怕你等，就用超★新★星★爆★發★的速度飛過來了。"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face1#是… 是嗎？"], [1, 1, 0, 1531002]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face2#嗯， #b(這麼說完表情馬上就釋懷了，真可愛。)#k"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["嗯嗯，這樣的話…就沒辦法了。如果一開始你就乖乖出席學生會會議的話，就不會這麼麻煩了。快給我會議紀錄簿吧。"], [1, 1, 0, 1531002]);
    } else if (status === i++) {
        qm.showEnvironment(5, "Sound/SoundEff.img/PvP/80001740_Use", []);
        qm.showEnvironment(17, ["0", "Map/Effect2.img/kinesis/chaYuna"], [0, 500, 800, 0, 12, 5, 0]);
        qm.showEnvironment(17, ["0"], [1, 300, -800, 0]);
        qm.getDirectionEffect(1, "", [5000]);
    } else if (status === i++) {
        qm.showEnvironment(5, "Sound/SoundEff.img/12thMS/jump_m", []);
        qm.showEnvironment(17, ["0"], [2, 500]);
        qm.showEnvironment(17, ["0"], [1, 300, 800, 0]);
        qm.getDirectionEffect(1, "", [1000]);
    } else if (status === i++) {
        qm.forceCompleteQuest(22720);
        qm.forceStartQuest(11620, "0");
        qm.updateInfoQuest(25980, "normal=#;hard=#");
        qm.updateInfoQuest(25980, "normal=#;hard=#");
        qm.disableOthers(false);
        qm.lockUI(0);
        qm.dispose();
        qm.gainItem(4034601, -1);
    } else {
        qm.dispose();
    }
}
