var res = {
    load_png : "res/load.png",
    loadBar_png : "res/loadBar.png",

    MainMenu_plist : "res/MainMenu.plist",
    LeveInfo_plist : "res/LeveInfo.plist",
    ChooseLevel_plist : "res/ChooseLevel.plist",
    GamePlay_Info_plist : "res/GamePlay_Info.plist",
    enemy_plist : "res/enemy.plist",
    startParticle_plist : "res/startParticle.plist",
    go_failedPanel_png : "res/go_failedPanel.png",
    music_mp3 : "res/sound/music.mp3",

    sh_bg_png : "res/sh_bg.png"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}