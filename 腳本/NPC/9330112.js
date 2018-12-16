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
	    cm.sendYesNo("[戰士轉蛋機]：確定要使用 #b楓葉轉蛋券#k.\r\n祝你好運哦!");
	} else {
	    cm.sendOk("你沒有轉蛋券哦!.");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	var item;
        if (Math.floor(Math.random() * 1) == 50) {
            item = cm.gainGachaponItem(1232109, 1);
	}
        else if (Math.floor(Math.random() * 1) == 50) {
	    item = cm.gainGachaponItem(1302333, 1);
	}
        else if (Math.floor(Math.random() * 1) == 50) {
	    item = cm.gainGachaponItem(1312199, 1);
	}
        else if (Math.floor(Math.random() * 1) == 50) {
	    item = cm.gainGachaponItem(1322250, 1);
	}
        else if (Math.floor(Math.random() * 1) == 50) {
	    item = cm.gainGachaponItem(1402251, 1);
	}
        else if (Math.floor(Math.random() * 1) == 50) {
	    item = cm.gainGachaponItem(1412177, 1);
	}
        else if (Math.floor(Math.random() * 1) == 50) {
	    item = cm.gainGachaponItem(1422184, 1);
	}
        else if (Math.floor(Math.random() * 1) == 50) {
	    item = cm.gainGachaponItem(1432214, 1);
	}
        else if (Math.floor(Math.random() * 1) == 50) {
	    item = cm.gainGachaponItem(1442268, 1);
	}
        else if (Math.floor(Math.random() * 1) == 50) {
	    item = cm.gainGachaponItem(1542108, 1);
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
        else if (Math.floor(Math.random() * 1) == 40) {
	    item = cm.gainGachaponItem(1402220, 1);
	}
        else if (Math.floor(Math.random() * 1) == 40) {
	    item = cm.gainGachaponItem(1412152, 1);
	}
        else if (Math.floor(Math.random() * 1) == 40) {
	    item = cm.gainGachaponItem(1422158, 1);
	}
        else if (Math.floor(Math.random() * 1) == 40) {
	    item = cm.gainGachaponItem(1432187, 1);
	}
        else if (Math.floor(Math.random() * 1) == 40) {
	    item = cm.gainGachaponItem(1442242, 1);
	}
        else if (Math.floor(Math.random() * 1) == 40) {
	    item = cm.gainGachaponItem(1542072, 1);
	}
        else if (Math.floor(Math.random() * 1) == 30) {
	    item = cm.gainGachaponItem(1232057, 1);
	}
        else if (Math.floor(Math.random() * 1) == 30) {
	    item = cm.gainGachaponItem(1302275, 1);
	}
        else if (Math.floor(Math.random() * 1) == 30) {
	    item = cm.gainGachaponItem(1312153, 1);
	}
        else if (Math.floor(Math.random() * 1) == 30) {
	    item = cm.gainGachaponItem(1322203, 1);
	}
        else if (Math.floor(Math.random() * 1) == 30) {
	    item = cm.gainGachaponItem(1402196, 1);
	}
        else if (Math.floor(Math.random() * 1) == 30) {
	    item = cm.gainGachaponItem(1412135, 1);
	}
        else if (Math.floor(Math.random() * 1) == 30) {
	    item = cm.gainGachaponItem(1422140, 1);
	}
        else if (Math.floor(Math.random() * 1) == 30) {
	    item = cm.gainGachaponItem(1432167, 1);
	}
        else if (Math.floor(Math.random() * 1) == 30) {
	    item = cm.gainGachaponItem(1442223, 1);
	}
        else if (Math.floor(Math.random() * 1) == 30) {
	    item = cm.gainGachaponItem(1542063, 1);
	}
        else if (Math.floor(Math.random() * 1) == 20) {
	    item = cm.gainGachaponItem(1152108, 1);
	}
        else if (Math.floor(Math.random() * 1) == 10) {
	    item = cm.gainGachaponItem(1302147, 1);
	}
        else if (Math.floor(Math.random() * 1) == 10) {
	    item = cm.gainGachaponItem(1322089, 1);
	}
        else if (Math.floor(Math.random() * 1) == 10) {
	    item = cm.gainGachaponItem(1312061, 1);
	}
        else if (Math.floor(Math.random() * 1) == 10) {
	    item = cm.gainGachaponItem(1402089, 1);
	}
        else if (Math.floor(Math.random() * 1) == 10) {
	    item = cm.gainGachaponItem(1302214, 1);
	}
        else if (Math.floor(Math.random() * 1) == 300) {
	    item = cm.gainGachaponItem(1402194, 1);
	}
        else if (Math.floor(Math.random() * 1) == 10) {
	    item = cm.gainGachaponItem(1412061, 1);
	}
        else if (Math.floor(Math.random() * 1) == 10) {
	    item = cm.gainGachaponItem(1422062, 1);
	}
        else if (Math.floor(Math.random() * 1) == 10) {
	    item = cm.gainGachaponItem(1432080, 1);
	}
        else if (Math.floor(Math.random() * 1) == 10) {
	    item = cm.gainGachaponItem(1442110, 1);
	} else {
	    var itemList = new Array(1302026, 1302032, 1302037, 1302081, 1302086, 1302173, 1302174, 1302146, 1302145, 1302144, 1302143, 1302217, 1302218, 1302219, 1302220, 1302221, 1302223, 1302248, 1322060, 1322061, 1322086, 1322087, 1322088, 1322107, 1322108, 1322181, 1312037, 1312038, 1312072, 1312073, 1312135, 1312058, 1312059, 1312060, 1402046, 1402047, 1402111, 1402112, 1402172, 1402086, 1402087, 1402088, 1412033, 1412034, 1412071, 1412072, 1412122, 1412058, 1412059, 1412060, 1422037, 1422038, 1422073, 1422074, 1422124, 1422059, 1422060, 1422061, 1432047, 1432049, 1432150, 1432077, 1432078, 1432079, 1442063, 1442067, 1442136, 1442137, 1442202, 1442107, 1442108, 1442109, 1542012, 1542013, 1542033, 1542034, 1542060);
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