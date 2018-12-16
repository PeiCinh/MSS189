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
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["#face9#凱內西斯，如果你忙完了就快點回來吧，我似乎發現了有趣的東西。"], [0, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["發現了什麼？如果是杰伊感興趣的事情，那應該是我們家樓下開了間有名的蛋糕店吧。"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["#face9#是有關之前怪物的事情。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["#face4#…說說看，是什麼樣的線索？"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["#face9#嗯，這個直接回來跟你說明比較快。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["#face9#回來的時候，記得哈密瓜冰淇淋…開玩笑的，今天已經攝取了足夠的糖分了。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["#b(回秘密據點跟杰伊對話吧)#k"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.updateInfoQuest(22700, "V01=1;V02=1;q21end=0;kinetuto=1;E1=1;kinetuto2=1;E2=1;E3=1");
        qm.forceStartQuest(22725);
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
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["凱內西斯，你有把手洗乾淨嗎？\r\n即使只是簡單的洗手，但養成習慣的話就可以預防大部分的病毒喔。"], [0, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["別說得像公益廣告的台詞，快說說到底發現了什麼。"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, -1, 0, 37, 1, ["#face3#是這樣的， 事情慢慢變得有趣了呢。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getDirectionStatus(true);
        qm.lockUI(1, 0);
        qm.disableOthers(true);
        qm.showEnvironment(7, "Bgm43.img/Unknown Part Of City", [0]);
        qm.showEnvironment(15, "", [1, 200, 0, 0, 0, 1300]);
        qm.getDirectionEffect(1, "", [1600]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["還記得那個帳號名稱叫W.M.的人嗎？\r\n常常會在各地散佈特定訊息的那個ID。"], [0, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["一開始大家都對他漠不關心，\r\n但一段時間過後…"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["他每次散播訊息的時間都和城市發生事故的時間重疊，人們突然理解了。\r\n只要W.M.發出訊息，不久後城市裡就會出現奇怪的現象。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["很多駭客都說W.M.是預言者，但是…"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["不可能有這種事。"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["是的，以常識來說，與其說是預言不如說是犯罪預告。\r\n這就是我們共識吧。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["難道你解開了W.M的訊息，杰伊？"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["嗯，比我想像中還簡單就解開了。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["其他國家的駭客無法解讀，自然有他的理由。這訊息只要和我國同一時間的電視台訊號混合後，就可以解開了。說真的，暗號本身因為是摩斯密碼的變形，所以要解開並不難。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["…似乎是故意期待有人可以解開這個暗號的感覺呢。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["警察那邊知道了嗎？"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["目前還不知道，警察的網路搜索資料庫裡並沒有這個情報。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["暗號訊息的內容是？"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["怪物出現的時間跟地點。\r\n但是這地點… #b就是凱內西斯你們學校#k。"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face4#…#b學校#k嗎？"], [1, 1, 0, 1531000]);
    } else if (status === i++) {
        qm.getNPCTalk(3, 0, 0, 0, 37, 1, ["#face0#如何，很怪吧？"], [1, 1, 0, 1531001]);
    } else if (status === i++) {
        qm.showEnvironment(15, "", [0, 0, 0, 0, 0, 1300]);
        qm.getDirectionEffect(1, "", [1600]);
    } else if (status === i++) {
        qm.forceCompleteQuest(22725);
        qm.disableOthers(false);
        qm.lockUI(0);
        qm.dispose();
    } else {
        qm.dispose();
    }
}
