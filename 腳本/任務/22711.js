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
        qm.forceStartQuest(22711);
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["#face9#很好。到目前都很順利的進行呢。那麼正式開始吧。\r\n去擊倒在上方的訓練機器人B 5隻吧。"], [0, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.spawnMob(2700300, 703, -150);
        qm.spawnMob(2700300, 703, -150);
        qm.spawnMob(2700300, 703, -150);
        qm.spawnMob(2700300, 703, -150);
        qm.spawnMob(2700300, 703, -150);
        qm.showEnvironment(5, "Sound/SoundEff.img/blackHeaven/metaldrop", []);
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["#face9#按Z可以拾取剛剛破壞器材後的殘骸。\r\n結束後，請透過左邊的出口來找我吧。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.playVoiceEffect("Voice3.img/Kinesis/guide_12");
        qm.showWZEffectNew("UI/tutorial.img/kinesis/1");
        qm.forceStartQuest(25965, "2");
        qm.dispose();
    } else {
        qm.dispose();
    }
}
