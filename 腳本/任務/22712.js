/* global qm */
var status = -1;

function start(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        if (status === 1) {
            qm.getNPCTalk(3, 0, -1, 0, 36, 1, ["…我準備了你常喝的飲料耶。你該不會又愛上別的品牌了吧？"], [0, 0, 0, 1531001]);
            qm.dispose();
            return;
        }
        status--;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 36, 1, ["似乎都有正常運作呢。"], [0, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 2, 36, 1, ["那今天的測試就先這樣吧。最後幫你準備了涼爽的運動飲料，先休息一下吧。要記錄你身體中的疲勞物質正常化的過程。"], [1531001]);
    } else if (status === i++) {
        qm.forceStartQuest(22712);
        qm.gainItem(2000040, 1);
        qm.showWZEffectNew("UI/tutorial.img/kinesis/3");
        qm.playVoiceEffect("Voice3.img/Kinesis/guide_07");
        if (qm.getLevel() < 11) {
            for (var i = 0 ; i < 11 - qm.getLevel() ; i++) {
                qm.levelUp();
            }
        }
        qm.dispose();
    } else if (status === i++) {
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
        qm.getNPCTalk(3, 0, -1, 0, 36, 1, ["好，那麼最後再檢查一次你的身體狀況。"], [0, 1, 0, 1531001]);
    } else {
        if (qm.getPlayerStat("RAP") > 0) {
            rap(mode, type, selection);
        } else {
            qm.forceCompleteQuest(22712);
            qm.forceCompleteQuest(22715);
            qm.getNPCTalk(3, 0, -1, 0, 36, 1, ["才休息一下子就恢復了。你的體力真的很好。"], [1, 0, 0, 1531001]);
            qm.dispose();
        }
    }
}

function rap(mode, type, selection) {
    var i = 0;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 36, 1, ["#face3#欸∼凱內西斯。\r\n你似乎還沒提升的能力點數呢？"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 36, 1, ["#face2#升級時，可以提升#g基本能力值#k和 #g技能等級#k喔。建議你立刻提升。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 36, 1, ["#face2#因為你使用的是控制物品的念動力，所以把AP投在智力 #gINT#k 會比較好。如果覺得麻煩，也可以使用自動分配。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 36, 1, ["唉唷，真麻煩。再繼續變聰明的話，智商滿出來會讓我很困擾的。\r\n\r\n#b(使用全部的AP提升能力值後，再進行對話吧。)#k"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.playVoiceEffect("Voice3.img/Kinesis/guide_03");
        qm.dispose();
    } else {
        qm.dispose();
    }
}
