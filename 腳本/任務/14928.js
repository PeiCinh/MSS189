var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        status++;

        if (status == 0) {
            qm.sendPlayerToNpc("超開心！這是第一次看到的地方！");
        } else if (status == 1) {
            qm.PlayerToNpc("。。。冷靜點。想要玩得開心的話，就必須要設定目前的目標，這樣才可以玩得更開心。");
        } else if (status == 2) {
            qm.PlayerToNpc("為了預防這種狀況，必須要先做好『祕密日記』才行！");
        } else if (status == 3) {
            qm.PlayerToNpc("不要因為到了新的世界就緊張，只要查看畫面左邊或物品欄中的#i2434005#圖示就行了！先以那邊所說的目標為主吧。說不定可以獲得些什麼。");
        } else if (status == 4) {
            qm.PlayerToNpc("雖然沒有目標隨便玩是我的風格。但我也帶來了我喜歡的『好吃的肉』還有寵物，所以就盡情的玩吧！嘿嘿嘿。");
        } else if (status == 5) {
			qm.gainItem(2010041, 100); // 美味肉塊*100
			qm.gainItem(2434005, 1);   // 皮卡啾的秘密日記
			qm.gainItem(2120000, 1500);// 寵物食品*1500
			qm.gainItem(2110000, 1);   // 取寵物名
			qm.gainItem(2434009, 1);   // Q彈皮卡啾寵物交換券
			qm.forceCompleteQuest();
            qm.dispose();
        } else {
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
		qm.dispose();
    }
}