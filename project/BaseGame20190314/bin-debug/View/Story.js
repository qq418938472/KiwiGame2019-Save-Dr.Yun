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
var Story = (function (_super) {
    __extends(Story, _super);
    function Story() {
        var _this = _super.call(this) || this;
        _this.storyIndex = 0;
        _this.storyData = [];
        return _this;
    }
    Story.prototype.onload = function () {
        this.skinName = StorySkin;
        this.addTouchEvent();
    };
    Story.prototype.onshow = function () {
        this.storyData = RES.getRes('storyJson_json');
        this.setContent();
    };
    Story.prototype.addTouchEvent = function () {
        this.nextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeBg, this);
    };
    Story.prototype.changeBg = function () {
        this.storyIndex++;
        if (this.storyIndex == 6) {
            Tools.audioStop();
            DataManager.levelIndex = 0;
            DataManager.isFirstTimePlayBoom = true;
            DataManager.isFirstTimePlayCalculate = true;
            var calculate = new Calculate();
            LayerManager.addChildLayer(calculate);
            this.hide();
        }
        else {
            this.setContent();
        }
    };
    Story.prototype.setContent = function () {
        this.storyContent.width = this.storyData[this.storyIndex].width;
        this.storyContent.height = this.storyData[this.storyIndex].height;
        this.storyContent.source = this.storyData[this.storyIndex].storyName + "_png";
        Tools.audioPlay(this.storyData[this.storyIndex].audio + "_mp3");
    };
    return Story;
}(ViewBase));
__reflect(Story.prototype, "Story");
(function (Story) {
    var storyData = (function () {
        function storyData() {
        }
        return storyData;
    }());
    Story.storyData = storyData;
    __reflect(storyData.prototype, "Story.storyData");
})(Story || (Story = {}));
//# sourceMappingURL=Story.js.map