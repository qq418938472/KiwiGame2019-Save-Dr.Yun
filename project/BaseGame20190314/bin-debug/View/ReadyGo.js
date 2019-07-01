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
var ReadyGo = (function (_super) {
    __extends(ReadyGo, _super);
    function ReadyGo() {
        return _super.call(this) || this;
    }
    ReadyGo.prototype.onload = function () {
        this.skinName = ReadyGoSkin;
    };
    ReadyGo.prototype.onshow = function () {
        var _this = this;
        Tools.audioPlay('readyGo_mp3');
        this.go.visible = false;
        egret.Tween.get(this)
            .to({ x: 750, y: 450 }, 0)
            .to({ x: 100, y: 450 }, 300)
            .to({ x: 80, y: 450 }, 800)
            .call(function () {
            _this.go.visible = true;
            _this.ready.visible = false;
        })
            .to({ x: 70, y: 450 }, 50)
            .to({ x: -750, y: 450 }, 500, egret.Ease.quadInOut)
            .call(function () {
            GameEventManager.getInstance().dispatchEventWith(GameEventManager.READYGO);
        });
    };
    return ReadyGo;
}(ViewBase));
__reflect(ReadyGo.prototype, "ReadyGo");
//# sourceMappingURL=ReadyGo.js.map