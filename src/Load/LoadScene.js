/**
 * Created by chenyong on 16/6/22.
 */

var LoadScene = cc.Scene.extend({
   onEnter: function () {
       this._super();
       var layer = new LoadLayer();
       this.addChild(layer);
       return true;
   } 
});

var LoadLayer = cc.Layer.extend({
    backgroundLayer:null,
    mainLayer:null,
    ctor: function () {
        this._super();
        this.loadBackground();
        this.loadMain();
        return true;
    },
    loadBackground: function () {
        var layer = new LoadBackgroundLayer();
        this.addChild(layer);
    },
    loadMain : function () {
        var layer = new LoadMainLayer();
        this.addChild(layer);
    }
});

var LoadBackgroundLayer = cc.Layer.extend({
   ctor: function () {
       this._super();
       return true;
   }
});

var LoadMainLayer = cc.Layer.extend({
    loadNumber : 7,
    loadIndex : 0,
    loadBar : null,
    ctor : function () {
        this._super();
        this.loadProgressBar();
        this.loadSource();
        this.scheduleUpdate();
        return true;
    },
    update : function (dt) {
        var percent = this.loadIndex / this.loadNumber * 100;
        this.loadBar.setPercentage(percent);
        if(this.loadIndex==this.loadNumber){
            cc.log('load succes!');
        }
    },
    loadProgressBar : function () {
        var barBg = new cc.Sprite(res.load_png);
        this.addChild(barBg);
        barBg.setPosition(GC.w2,GC.h2);

        var bar = new cc.ProgressTimer(new cc.Sprite(res.loadBar_png));
        barBg.addChild(bar);
        bar.setType(cc.ProgressTimer.TYPE_BAR);
        bar.setMidpoint(cc.p(0,0.5));
        bar.setBarChangeRate(cc.p(1,0));
        bar.setPercentage(0);
        bar.setPosition(cc.p(barBg.width / 2,barBg.height / 6));
        this.loadBar = bar;

    },
    loadSource : function () {
        cc.spriteFrameCache.addSpriteFrames(res.MainMenu_plist);
        this.loadIndex++ ;

        cc.spriteFrameCache.addSpriteFrames(res.LeveInfo_plist);
        this.loadIndex++;

        cc.spriteFrameCache.addSpriteFrames(res.ChooseLevel_plist);
        this.loadIndex++;

        cc.spriteFrameCache.addSpriteFrames(res.GamePlay_Info_plist);
        this.loadIndex++;

        cc.spriteFrameCache.addSpriteFrames(res.enemy_plist);
        this.loadIndex++;

        cc.textureCache.addImage(res.sh_bg_png,this.loadingCallback,this);
        cc.textureCache.addImage(res.go_failedPanel_png,this.loadingCallback,this);

    },
    loadingCallback : function () {
        this.loadIndex++;
    }
});