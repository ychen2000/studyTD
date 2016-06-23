/**
 * Created by chenyong on 16/6/23.
 */

var MainMenuScene = cc.Scene.extend({
    onEnter: function(){
        this._super();
        var layer = new MainMenuLayer();
        this.addChild(layer);
    }
});

var MainMenuLayer = cc.Layer.extend({
    BackgroundLayer:null,
    MainLayer:null,
    ctor: function () {
       this._super();
       this.loadBackgroundLayer();
       this.loadMainLayer();
       return true;
   },
    loadBackgroundLayer: function () {
        this.BackgroundLayer = new MMBackgroundLayer();
        this.addChild(this.BackgroundLayer);
    },
    loadMainLayer: function () {
        this.MainLayer = new MMMainLayer();
        this.addChild(this.MainLayer);
    }
});

var MMBackgroundLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.loadBg();
        return true;
    },
    loadBg: function () {
        var bg = new cc.Sprite(res.sh_bg_png);
        this.addChild(bg);
        bg.setPosition(GC.w2,GC.h2);
        // bg.setAnchorPoint(0,0);
    }

});

var MMMainLayer = cc.Layer.extend({
    btnStart: null,
    ctor: function () {
        this._super();
        this.loadTitle();
        this.loadStartBtn();
        //this.loadStartBtnParticle();
        return true;
    },
    loadTitle: function () {
        var node = new cc.Sprite("#mm_title.png")
        this.addChild(node);
        node.setPosition(GC.w / 3,GC.h / 3 * 2);

        var move = cc.moveBy(1,cc.p(0,20));
        var action = cc.sequence(move,move.reverse()).repeatForever();
        node.runAction(action);
    },
    loadStartBtn: function () {
        var nodeNormal = new cc.Sprite("#mm_btnStartGame.png");
        var nodeSelected = new cc.Sprite("#mm_btnStartGame.png");
        var nodeDisabled = new cc.Sprite("#mm_btnStartGame.png");

        var node = new cc.MenuItemSprite(
            nodeNormal,
            nodeSelected,
            nodeDisabled,
            function () {
                cc.log("btn click");
            }.bind(this)
        );

        node.setPosition(0,-GC.h2 / 3);
        var menu = new cc.Menu(node);
        this.addChild(menu);
        //menu.setPosition(GC.w2,GC.h2);
        this.btnStart = node;
    }
});