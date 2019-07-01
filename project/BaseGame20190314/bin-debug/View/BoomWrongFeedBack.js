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
var BoomWrongFeedBack = (function (_super) {
    __extends(BoomWrongFeedBack, _super);
    function BoomWrongFeedBack() {
        return _super.call(this) || this;
    }
    BoomWrongFeedBack.prototype.onload = function () {
        this.skinName = BoomWrongFeedBackSkin;
    };
    BoomWrongFeedBack.prototype.onshow = function () {
        Tools.audioPlay('boomAudio_mp3');
        this.x = 375;
        this.y = 350;
        egret.Tween.get(this.boomFeedBack)
            .to({ scaleX: 5, scaleY: 5 }, 0)
            .to({ scaleX: 0.8, scaleY: 0.8 }, 200)
            .to({ scaleX: 2, scaleY: 2 }, 200)
            .to({ scaleX: 1.3, scaleY: 1.3 }, 200);
    };
    return BoomWrongFeedBack;
}(ViewBase));
__reflect(BoomWrongFeedBack.prototype, "BoomWrongFeedBack");
//# sourceMappingURL=BoomWrongFeedBack.js.map