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
	cm.sendSimple("#b#L0#學習 / 放棄 煉金術#l");
    } else if (status == 1) {
	    if (cm.getPlayer().getProfessionLevel(92040000) > 0) {
			cm.sendYesNo("你確定要放棄此技能?");
	    } else if (cm.getPlayer().getProfessionLevel(92020000) > 0 || cm.getPlayer().getProfessionLevel(92030000) > 0) {
			if (cm.getPlayer().getProfessionLevel(92000000) <= 0) {
				cm.sendOk("你尚未學習採集技術.");
			} else {
				cm.sendOk("你已經有其他製作技術了.");
			}
			cm.dispose();
	    } else {
			cm.sendYesNo("你確定要學習此技能 ?");
	    }
    } else if (status == 2) {
	    if (cm.getPlayer().getProfessionLevel(92040000) > 0) {
			cm.sendOk("你已放棄此技能.");
			cm.teachSkill(92040000, 0, 0);
	    } else {
			cm.sendOk("你已成功學習此技能.");
			cm.teachSkill(92040000, 0x1000000, 0); //00 00 00 01
	    }
	    cm.dispose();
    }
}