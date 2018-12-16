var status = -1;
var sel = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	cm.sendSimple("#b#L0#學習 / 放棄 採集藥草技能 #l\r\n#L1# 交換藥草根 #l");
    } else if (status == 1) {
	sel = selection;
	if (sel == 0) {
	    if (cm.getPlayer().getProfessionLevel(92020000) > 0 || cm.getPlayer().getProfessionLevel(92030000) > 0 || cm.getPlayer().getProfessionLevel(92040000) > 0) {
		cm.sendOk("請先放棄其他製作技能.");
		cm.dispose();
		return;
	    }
	    if (cm.getPlayer().getProfessionLevel(92000000) > 0) {
		cm.sendYesNo("你確定要放棄 製作藥草 的技能 ? 此選項將會喪失 製作藥草的 經驗值.");
	    } else if (cm.getPlayer().getProfessionLevel(92010000) > 0) {
		cm.sendOk("你已經有採礦技能了.");
		cm.dispose();
	    } else {
		cm.sendYesNo("你想要學習採集藥草 ?");
	    }
	} else if (sel == 1) {
	    if (!cm.haveItem(4022023, 100)) {
		cm.sendOk("你沒有收集 100 個藥草根.");
 	    } else if (!cm.canHold(2028066, 1)) {
		cm.sendOk("你確認你的空間是否足夠.");
	    } else {
		cm.sendOk("兌換成功.");
		cm.gainItem(2028066, 1);
		cm.gainItem(4022023, -100);
	    } 
	    cm.dispose();
	}
    } else if (status == 2) {
	if (sel == 0) {
	    if (cm.getPlayer().getProfessionLevel(92000000) > 0) {
		cm.sendOk("你已經放棄此技能.");
		cm.teachSkill(92000000, 0, 0);
	    } else {
		cm.sendOk("你成功學習了此技能.");
		cm.teachSkill(92000000, 0x1000000, 0); //00 00 00 01
		if (cm.canHold(1502000,1)) {
			cm.gainItem(1502000,1);
		}
	    }
	    cm.dispose();
	}
    }
}