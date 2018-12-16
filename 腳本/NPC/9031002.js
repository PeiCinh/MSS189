var status = -1;
var sel = -1;

function action(mode, type, selection) {
    if (mode == -1 || mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (status == 0) {
        //cm.sendSimple("#b#L0# 學習 / 放棄 挖礦技能 #l\r\n#L1# 交換礦物碎片 #l");
        cm.sendSimple("\r\n#b#L0# 學習 / 放棄 挖礦技能 #l\r\n#L1# 交換礦物碎片 #l");
    } else if (status == 1) {
        sel = selection;
        if (sel == 0) {
            if(cm.getPlayer().getProfessionLevel(92030000) > 0 || cm.getPlayer().getProfessionLevel(92020000) > 0) {
                cm.sendOk("你確定你不具有其他技能 ? 確定將重置技能.");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getProfessionLevel(92010000) > 0) {
                cm.sendYesNo("你確定你要放棄 挖礦技能 ? 這會讓你喪失這個技能的經驗值.");
                //cm.sendYesNo("What? You'll forget everything i taught you. You'll have no level in Mining, no Mastery... You really want to do this?");
            } else if (cm.getPlayer().getProfessionLevel(92000000) > 0 || cm.getPlayer().getProfessionLevel(92040000) > 0) {
                cm.sendOk("請去學習 #bAlchemy,#k .");
                cm.dispose();
            } else {
                //cm.sendYesNo("你想學習挖礦 ?");
                var numprofessions = 0;
                if (cm.getPlayer().getProfessionLevel(92000000) > 0)
                    numprofessions += 1;
                if (cm.getPlayer().getProfessionLevel(92010000) > 0)
                    numprofessions += 1;
                if (cm.getPlayer().getProfessionLevel(92020000) > 0)
                    numprofessions += 1;
                if (cm.getPlayer().getProfessionLevel(92030000) > 0)
                    numprofessions += 1;
                if (cm.getPlayer().getProfessionLevel(92040000) > 0)
                    numprofessions += 1;
                cm.sendYesNo("學習挖礦將耗費你的 5000 楓幣.");
            }
        } 
        else if (sel == 1) {
            if (!cm.haveItem(4011010, 100)) {
                cm.sendOk("你沒有 100 個碎片.");
            } else if (!cm.canHold(2028067, 1)) {
                cm.sendOk("請空出空間來.");
            } else {
                cm.sendOk("兌換成功.");
                cm.gainItem(2028067, 1);
                cm.gainItem(4011010, -100);
            } 
            cm.dispose();
        }
    } else if (status == 2) {
        if (sel == 0) {
            if (cm.getPlayer().getProfessionLevel(92010000) > 0) {
                cm.sendNext("你已經失去了 挖礦技能 !");
                cm.teachSkill(92010000, 0, 0);
            } else {
                if(cm.getPlayer().getMeso() >= 5000) {
                    cm.gainMeso(-5000);
                    cm.sendNext("你已經成功學習此技能 !");
                    cm.teachSkill(92010000, 0x1000000, 0); //00 00 00 01
                    if (cm.canHold(1512000,1)) {
                        cm.gainItem(1512000,1);
                    }
                }else{
                    cm.sendNext("你沒有 5000 楓幣 窮鬼!");
                }
            }
            cm.dispose();
        }
    }
}