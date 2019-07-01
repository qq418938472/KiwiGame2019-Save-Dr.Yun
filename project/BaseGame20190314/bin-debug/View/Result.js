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
var Result = (function (_super) {
    __extends(Result, _super);
    function Result() {
        return _super.call(this) || this;
    }
    Result.prototype.onload = function () {
        this.skinName = ResultSkin;
    };
    Result.prototype.onshow = function () {
        this.initUI();
        this.reStartBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reStart, this);
    };
    Result.prototype.reStart = function () {
        DataManager.levelIndex = 0;
        var calculate = new Calculate();
        LayerManager.addChildLayer(calculate);
        this.hide();
    };
    Result.prototype.initUI = function () {
        this.countNums = [];
        for (var i = 0; i <= 3; i++) {
            this.countNums.push(this.countGroup.getChildAt(i));
            this.countNums[i].source = 'score0_png';
        }
        var nums = DataManager.totalScore.toString().split('').reverse();
        for (var i = 0; i <= nums.length - 1; i++) {
            this.countNums[i].source = 'score' + nums[i] + '_png';
        }
        egret.Tween.get(this.rotationBg, { loop: true })
            .to({ rotation: 360 }, 4000);
        var input = new egret.TextField();
        this.inputGroup.addChild(input);
        input.width = 481;
        input.height = 123;
        input.size = 50;
        input.textColor = 0xe0e9cf;
        input.x = 0;
        input.y = 0;
        input.border = false;
        input.verticalAlign = egret.VerticalAlign.MIDDLE;
        input.textAlign = 'center';
        this.savePeopleNum.text = String(DataManager.savePeopleNum);
        /*** 本示例关键代码段开始 ***/
        input.type = egret.TextFieldType.INPUT;
        input.addEventListener(egret.FocusEvent.FOCUS_IN, function (e) {
            this.tips.visible = false;
        }, this);
        input.addEventListener(egret.FocusEvent.FOCUS_OUT, function (e) {
            if (input.text == "") {
                this.tips.visible = true;
            }
        }, this);
        input.addEventListener(egret.Event.CHANGE, function (e) {
        }, this);
        /*** 本示例关键代码段结束 ***/
        DataManager.totalScore = 0;
        DataManager.savePeopleNum = 0;
        Tools.audioArrPlay(["result_mp3", "result_mp3"]);
    };
    ;
    return Result;
}(ViewBase));
__reflect(Result.prototype, "Result");
//# sourceMappingURL=Result.js.map