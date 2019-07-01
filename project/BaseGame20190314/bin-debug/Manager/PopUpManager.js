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
var PopUpManager = (function (_super) {
    __extends(PopUpManager, _super);
    function PopUpManager() {
        return _super.call(this) || this;
    }
    PopUpManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new PopUpManager();
        }
        return this._instance;
    };
    // 调用参考 
    /**
    * 添加面板方法
    */
    PopUpManager.prototype.addPopUp = function (panel) {
        if (this.getChildIndex(panel) == -1) {
            this.addChild(panel);
        }
    };
    return PopUpManager;
}(egret.DisplayObjectContainer));
__reflect(PopUpManager.prototype, "PopUpManager");
//# sourceMappingURL=PopUpManager.js.map