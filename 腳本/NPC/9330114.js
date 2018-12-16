var status = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
        if (cm.haveItem(5220040)) {
	    cm.sendYesNo("[弓箭手轉蛋機]：確定要使用 #b楓葉轉蛋券#k.\r\n祝你好運哦!");
	} else {
	    cm.sendOk("你沒有轉蛋券哦!.");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	var item;
        if (Math.floor(Math.random() * 1) == 50) {
            item = cm.gainGachaponItem(1452252, 1);
	}
        else if (Math.floor(Math.random() * 1) == 50) {
	    item = cm.gainGachaponItem(1462239, 1);
	}
        else if (Math.floor(Math.random() * 1) == 50) {
	    item = cm.gainGachaponItem(1522138, 1);
	}
        else if (Math.floor(Math.random() * 1) == 40) {
	    item = cm.gainGachaponItem(1302297, 1);
	}
        else if (Math.floor(Math.random() * 1) == 40) {
	    item = cm.gainGachaponItem(1312173, 1);
	}
        else if (Math.floor(Math.random() * 1) == 40) {
	    item = cm.gainGachaponItem(1322223, 1);
	}
        else if (Math.floor(Math.random() * 1) == 30) {
	    item = cm.gainGachaponItem(1452226, 1);
	}
        else if (Math.floor(Math.random() * 1) == 30) {
	    item = cm.gainGachaponItem(1462213, 1);
	}
        else if (Math.floor(Math.random() * 1) == 30) {
	    item = cm.gainGachaponItem(1522113, 1);
	}
        else if (Math.floor(Math.random() * 1) == 20) {
	    item = cm.gainGachaponItem(1152111, 1);
	}
        else if (Math.floor(Math.random() * 1) == 10) {
	    item = cm.gainGachaponItem(1452205, 1);
	}
        else if (Math.floor(Math.random() * 1) == 10) {
	    item = cm.gainGachaponItem(1462193, 1);
	}
        else if (Math.floor(Math.random() * 1) == 10) {
	    item = cm.gainGachaponItem(1522094, 1);
	}
        else if (Math.floor(Math.random() * 1) == 10) {
	    item = cm.gainGachaponItem(1452105, 1);
	}
        else if (Math.floor(Math.random() * 1) == 10) {
	    item = cm.gainGachaponItem(1462090, 1);
	}
        else if (Math.floor(Math.random() * 1) == 300) {
	    item = cm.gainGachaponItem(1452229, 1);
	}
        else if (Math.floor(Math.random() * 1) == 5) {
	    item = cm.gainGachaponItem(1452018, 1);
	} else {
	    var itemList = new Array(1452057, 1452059, 1452129, 1452130, 1452189, 1452102, 1452103, 1452104, 1462087, 1462088 ,1462089, 1462050, 1462051, 1462118, 1462119, 1462177, 1522015, 1522016, 1522020, 1522021);
	    item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1);
	}

	if (item != -1) {
	    cm.gainItem(5220040, -1);
	    cm.sendOk("您已獲得 #b#t" + item + "##k.");
	} else {
	    cm.sendOk("檢查一下背包是否已滿,至少空出2到3格位置.");
	}
	cm.safeDispose();
    }
}