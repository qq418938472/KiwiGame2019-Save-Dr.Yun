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
var GameEventManager = (function (_super) {
    __extends(GameEventManager, _super);
    function GameEventManager() {
        return _super.call(this) || this;
    }
    GameEventManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new GameEventManager();
        }
        return this._instance;
    };
    /**更改金钱 */
    GameEventManager.SET_MONEY = "SET_MONEY";
    //爆炸结果返回
    GameEventManager.BOOMFALG = "BOOMFALG";
    //ReadyGo
    GameEventManager.READYGO = "READYGO";
    //关闭
    GameEventManager.CLOSEGUIDE = "CLOSEGUIDE";
    //出局
    GameEventManager.OUT = "OUT";
    //成功返回
    GameEventManager.BACK = "BACK";
    return GameEventManager;
}(egret.DisplayObjectContainer));
__reflect(GameEventManager.prototype, "GameEventManager");
//# sourceMappingURL=GameEventManager.js.map