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
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["#face3##b#h0##k, 最近你的帳號在新聞上、 社群軟體以及搜索網站中，已經變成熱門話題了，你知道嗎？ "], [0, 1, 0, 1531002]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["幹嘛說的這麼小聲？可以大聲一點啊。"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["#face4#如果給其他人聽到的話，那該怎麼辦！\r\n普通的英雄們都會儘量隱藏自己的身分，為此還戰戰兢兢…但為什麼你總是讓你旁邊的人這麼辛苦？"], [1, 1, 0, 1531002]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["#face9##fs12#說得太好了。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["冷靜一點，知道我真實身分的人目前只有我們三個人而已。"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["你也真是的…總之，有件事想拜託你。\r\n為了體育室的修補作業，我需要學校裡100位同學的簽名。"], [1, 1, 0, 1531002]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["#face2#想當然我們的副會長大∼人已經準備的差不多了吧？"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 5, 37, 1, ["目前已經拿到97個簽名，剩下的3個就由你負責吧。 #b#h0##k.\r\n#b#L1#知道了，包在我身上。#l\r\n#L2#什麼？很煩欸！#l"], [1531002]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["怎麼回事，你竟然有這麼熱心的時候。"], [0, 1, 0, 1531002]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 2, 37, 1, ["在學校裡蒐集三位同學的簽名，應該是小事一樁對吧？"], [1531002]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["我在這等你。"], [0, 1, 0, 1531002]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["#b(尋找學校內的三名同學。)#k"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.forceStartQuest(22721);
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
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["簽名全部都拿到了吧？辛苦了。"], [0, 1, 0, 1531002]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face3#那個， #b#h0##k.\r\n你不要再玩危險的英雄遊戲了…好不好？"], [1, 1, 0, 1531002]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face3#幫助別人固然是件好事…但是你的本分是學生，而且還是學生會長。\r\n把會長該做的事情放一邊，還讓我在網路上看到你在其他地方做這種事，你覺得作何感想呢？"], [1, 1, 0, 1531002]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 5, 37, 1, ["#face3#你覺得如何呢， #b#h0##k?\r\n#b#L1#取悅悠娜#l\r\n#L2#轉移話題#l"], [1531002]);
    } else if (status === i++) {
        qm.updateInfoQuest(22721, "done1=1");
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face2#哎呀，我們家悠娜生氣了嗎？常生氣的話，妳那漂亮的臉蛋上會有皺紋的。"], [0, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face1#哼…"], [1, 1, 0, 1531002]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face1#這種話你留著去跟那些喜歡你又巴著你不放的女孩們說吧。"], [1, 1, 0, 1531002]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["可是你說的那種女孩現在似乎就在我眼前呢？"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face1#什麼……\r\n我什麼時候巴著你不放了！"], [1, 1, 0, 1531002]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face2#根據有印象以來，應該是從10歲開始的？"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face1#是因為從那時候你就天天闖禍…甚至到現在還是！"], [1, 1, 0, 1531002]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face2#哼… 不管怎麼樣，自己單獨前往事故現場是很危險的事。 \r\n每天看新聞的時候，我都提心吊膽的。"], [1, 1, 0, 1531002]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face2#妳看起來很擔心我的樣子？還是擔心我的粉絲變多了？"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face1#這是當然的！！！\r\n啊！每次只要跟你說話，就會有整個人變得很奇怪的感覺。 "], [1, 1, 0, 1531002]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face10##fs12#說得再好不過了。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face1#這個拿去啦！還有，老老實實的出席啦，還不都是因為你…害我這個副會長當得超級辛苦的。"], [1, 1, 0, 1531002]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face2##b(我…我總是覺得很不安。)#k"], [1, 1, 0, 1531002]);
    } else if (status === i++) {
        if (qm.getOneInfo(22700, "q21end") !== "1") {
            qm.updateOneInfo(22700, "q21end", "1");
            qm.gainItem(2000040, 30);
        }
        qm.forceCompleteQuest(22721);
        qm.forceStartQuest(11620, "0");
        qm.updateInfoQuest(25980, "normal=#;hard=#");
        qm.updateInfoQuest(25980, "normal=#;hard=#");
        qm.getDirectionEffect(1, "", [1000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face9#凱內西斯，如果你每次都這樣欺負悠娜，以後可是會後悔的。"], [0, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face2#因為很有趣嘛，真的很難抗拒啊。"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["順道一提，你為什麼總是要這樣跟我對話？"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face9#又不只一兩次了。\r\n我是你的後方支援，你總要習慣這樣的對話模式。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.showEnvironment(15, "", [1, 200, 0, 0, 0, 1300]);
        qm.getDirectionEffect(1, "", [1600]);
    } else if (status === i++) {
        qm.getDirectionEffect(11, "#fs20#\r\n\r\n#fEffect/BasicEff.img/QuestAlert/Default/0#\r\n擊點畫面左方的燈泡，\r\n可在遠方確認接取到的任務。", [1]);
        qm.playVoiceEffect("Voice3.img/Kinesis/guide_10");
    } else if (status === i++) {
        qm.showEnvironment(15, "", [0, 0, 0, 0, 0, 1300]);
        qm.getDirectionEffect(1, "", [1600]);
    } else if (status === i++) {
        qm.disableOthers(false);
        qm.lockUI(0);
        qm.dispose();
    } else {
        qm.dispose();
    }
}
