/* global ms */
var status = -1;

function action(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.getDirectionStatus(true);
        ms.lockUI(1, 0);
        ms.disableOthers(true);
        ms.showEnvironment(15, "", [1, 255, 0, 0, 0, 0]);
        ms.getDirectionEffect(16, "", [-1]);
        ms.getDirectionEffect(14, "", []);
        ms.showEnvironment(5, "Sound/Ambience.img/flare_ready", []);
        ms.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face9#啊- 啊- 測試。測試。OK。\r\n看來通信系統可以正常運作呢。準備開始測量你的動作了。"], [0, 1, 0, 1531001]);
        ms.getDirectionStatus(true);
    } else if (status === i++) {
        ms.getNPCTalk(3, 0, 0, 0, 37, 1, ["杰伊，我覺得我該戴眼鏡了。"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        ms.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face9#你的雙眼視力都是 2.5。是要戴什麼眼鏡？"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        ms.showEnvironment(15, "", [1, 255, 0, 0, 0, 0]);
        ms.getDirectionEffect(1, "", [300]);
    } else if (status === i++) {
        ms.showEnvironment(15, "", [0, 0, 0, 0, 0, 250]);
        ms.getDirectionEffect(1, "", [300]);
    } else if (status === i++) {
        ms.getDirectionEffect(1, "", [4000]);
    } else if (status === i++) {
        ms.getNPCTalk(3, 0, 0, 0, 37, 1, ["怎麼會呢。\r\n如果我的視力正常，那寫在這裡的數字是 #b10#k 沒錯吧。"], [0, 1, 0, 1531000]);
    } else if (status === i++) {
        ms.getNPCTalk(3, 0, 0, 0, 37, 1, ["身為英雄的我…竟然只有 #b10等級#k。\r\n如果不是我的眼睛有問題，那就是你那邊搞錯了什麼吧。 "], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        ms.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face9#… 那是因為還沒有任何資料的關係。\r\n把你的動作與念動力轉換為資料並累積時，數字就會跟著變動的。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        ms.getNPCTalk(3, 0, 0, 0, 37, 1, ["嘛，看來你是想看我奇蹟般地快速升級吧。"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        ms.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face9#來吧，從基本測量開始。\r\n請跟著指標移動吧。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        ms.showEnvironment(5, "Sound/Field.img/flowervioleta/wink", []);
        ms.getDirectionEffect(1, "", [1000]);
    } else if (status === i++) {
        ms.getNPCTalk(3, 0, 0, 0, 37, 1, ["等等，在開始之前還要先解決一個很重要的問題"], [0, 1, 0, 1531000]);
    } else if (status === i++) {
        ms.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face10#？我的測試準備是萬全的。到底還有什麼問題？"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        ms.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face3#來點嗨歌吧，不覺得這樣太掃興了嗎？"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        ms.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face9#......"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        ms.showEnvironment(5, "Sound/SoundEff.img/blackHeaven/switch_push", []);
        ms.getDirectionEffect(1, "", [300]);
    } else if (status === i++) {
        ms.showEnvironment(7, "Bgm42/TheBeast2", [0]);
        ms.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face2#對嘛。這才像話！"], [0, 1, 0, 1531000]);
    } else if (status === i++) {
        ms.showEnvironment(19, "", [0, 1000, 3000, 1]);
        ms.getDirectionEffect(7, "", [0, 3000, 0, 1477, -68]);
    } else if (status === i++) {
        ms.getDirectionEffect(1, "", [300]);
    } else if (status === i++) {
        ms.showEnvironment(20, "", [1000]);
        ms.showEnvironment(5, "Sound/SoundEff.img/PvP/80001740_Use", []);
        ms.showEnvironment(17, ["0", "Map/Effect2.img/kinesis/chaKine"], [0, 500, 800, 0, 12, 5, 1]);
        ms.showEnvironment(17, ["0"], [1, 300, -800, 0]);
        ms.getDirectionEffect(1, "", [4500]);
    } else if (status === i++) {
        ms.showEnvironment(5, "Sound/SoundEff.img/12thMS/jump_m", []);
        ms.showEnvironment(17, ["0"], [2, 500]);
        ms.showEnvironment(17, ["0"], [1, 300, 800, 0]);
        ms.getDirectionEffect(1, "", [500]);
    } else if (status === i++) {
        ms.showEnvironment(19, "", [0, 1000, 3000, 1]);
        ms.getDirectionEffect(7, "", [0, 1000, 2147483647, 2147483647, 2147483647]);
    } else if (status === i++) {
        ms.getDirectionEffect(5, "", [1, 0]);
    } else if (status === i++) {
        ms.getDirectionEffect(1, "", [300]);
    } else if (status === i++) {
        ms.showEnvironment(20, "", [1000]);
        ms.disableOthers(false);
        ms.lockUI(0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
