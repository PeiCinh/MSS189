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
	cm.sendSimple("#b#L0# 你要學習 / 放棄 製作飾品的技能嗎 ? #l");
    } else if (status == 1) {
	    if (cm.getPlayer().getProfessionLevel(92030000) > 0) {
		cm.sendYesNo("你確定你要放棄 製作飾品 的技能嗎 ? 此選項會讓你失去此技能的所有熟練度.");
	    } else if (cm.getPlayer().getProfessionLevel(92020000) > 0 || cm.getPlayer().getProfessionLevel(92040000) > 0 || cm.getPlayer().getProfessionLevel(92010000) <= 0) {
		cm.sendOk("你不能學習製作飾品的技能 因為你已經學習其他兩個技能 或是 你還沒有學習挖礦 !");
		cm.dispose();
	    } else {
		cm.sendYesNo("你確定你要學習 製作飾品 的技能嗎 ?");
	    }
    } else if (status == 2) {
	    if (cm.getPlayer().getProfessionLevel(92030000) > 0) {
		cm.sendOk("你已經放棄此技能.");
		cm.teachSkill(92030000, 0, 0);
	    } else {
		cm.sendOk("你學習了此技能.");
		cm.teachSkill(92030000, 0x1000000, 0); //00 00 00 01
	    }
	    cm.dispose();
    }
}