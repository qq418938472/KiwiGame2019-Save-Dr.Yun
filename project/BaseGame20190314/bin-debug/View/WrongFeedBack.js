var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var WrongFeedBack = (function (_super) {
    __extends(WrongFeedBack, _super);
    function WrongFeedBack() {
        return _super.call(this) || this;
    }
    WrongFeedBack.prototype.onload = function () {
        this.skinName = WrongFeedBackSkin;
    };
    WrongFeedBack.prototype.onshow = function () {
        Tools.audioPlay('wrong_mp3');
        egret.Tween.get(this.bg0)
            .to({ x: 750, y: 600 }, 0)
            .to({ x: 0, y: 600 }, 50);
        egret.Tween.get(this.bg1)
            .wait(50)
            .to({ x: 750, y: 600 }, 0)
            .to({ x: 150, y: 600 }, 150)
            .wait(800)
            .to({ x: -600, y: 600 }, 250);
    };
    return WrongFeedBack;
}(ViewBase));
__reflect(WrongFeedBack.prototype, "WrongFeedBack");
//# sourceMappingURL=WrongFeedBack.js.map