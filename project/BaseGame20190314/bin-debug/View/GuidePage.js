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
var GuidePage = (function (_super) {
    __extends(GuidePage, _super);
    function GuidePage() {
        return _super.call(this) || this;
    }
    GuidePage.prototype.onload = function () {
        this.skinName = GuidePageSkin;
        this.addTouchEvent();
    };
    GuidePage.prototype.onshow = function () {
        this.moveCar();
        this.moveRen();
    };
    GuidePage.prototype.moveCar = function () {
        egret.Tween.get(this.car, { loop: true })
            .to({ y: 904 }, 2000)
            .to({ y: 894 }, 2000);
    };
    ;
    GuidePage.prototype.moveRen = function () {
        egret.Tween.get(this.ren, { loop: true })
            .to({ y: 180 - 10 }, 2000)
            .to({ y: 180 }, 2000);
    };
    ;
    GuidePage.prototype.addTouchEvent = function () {
        this.guideBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, LayerManager.main.startGame, LayerManager.main);
    };
    return GuidePage;
}(ViewBase));
__reflect(GuidePage.prototype, "GuidePage");
//# sourceMappingURL=GuidePage.js.map