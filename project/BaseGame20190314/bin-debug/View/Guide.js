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
var Guide = (function (_super) {
    __extends(Guide, _super);
    function Guide() {
        var _this = _super.call(this) || this;
        _this.type = 0;
        return _this;
    }
    Guide.prototype.onload = function () {
        this.skinName = GuideSkin;
    };
    Guide.prototype.onshow = function () {
        this.calculateGuide.visible = this.type == 0;
        this.boomGuide.visible = this.type == 1;
        this.successGuide.visible = this.type == 2;
        this.goBoomBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
        this.goCalculateBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
        this.successBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.back, this);
    };
    Guide.prototype.close = function () {
        GameEventManager.getInstance().dispatchEventWith(GameEventManager.CLOSEGUIDE);
        this.hide();
    };
    Guide.prototype.back = function () {
        GameEventManager.getInstance().dispatchEventWith(GameEventManager.BACK);
        this.hide();
    };
    return Guide;
}(ViewBase));
__reflect(Guide.prototype, "Guide");
//# sourceMappingURL=Guide.js.map