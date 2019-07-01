var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LayerManager = (function () {
    function LayerManager() {
    }
    LayerManager.init = function (m) {
        this.main = m;
        LayerManager.initBaseLayer();
    };
    LayerManager.initBaseLayer = function () {
        LayerManager.main.addChild(LayerManager.baseUILayer);
    };
    LayerManager.openStory = function () {
        var story = new Story();
        if (LayerManager.baseUILayer.getChildIndex(story) == -1) {
            LayerManager.baseUILayer.addChild(story);
        }
    };
    LayerManager.openBomb = function () {
        var bomb = new Bomb();
        if (LayerManager.baseUILayer.getChildIndex(bomb) == -1) {
            LayerManager.baseUILayer.addChild(bomb);
        }
    };
    LayerManager.addChildLayer = function (panel) {
        console.log(panel);
        if (LayerManager.baseUILayer.getChildIndex(panel) == -1) {
            LayerManager.baseUILayer.addChild(panel);
        }
    };
    LayerManager.removeChildLayer = function (o) {
        LayerManager.baseUILayer.removeChild(o);
    };
    LayerManager.baseUILayer = new egret.DisplayObjectContainer();
    return LayerManager;
}());
__reflect(LayerManager.prototype, "LayerManager");
//# sourceMappingURL=LayerManager.js.map