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
var CellBoom = (function (_super) {
    __extends(CellBoom, _super);
    function CellBoom(index, mixSecond) {
        var _this = _super.call(this) || this;
        _this.skinName = cellBoomSkin;
        _this.boxIndex = index;
        _this.winSecond = mixSecond;
        _this.initUI();
        return _this;
    }
    CellBoom.prototype.initUI = function () {
        if (this.boxIndex == 1) {
            this.btnBg.source = "btn_yellow_png";
        }
        else if (this.boxIndex == 2) {
            this.btnBg.source = "btn_blue_png";
        }
        else if (this.boxIndex == 3) {
            this.btnBg.source = "btn_red_png";
        }
        this.countDownNums = [];
        for (var i = 1; i <= 4; i++) {
            this.countDownNums.push(this.countDownGroup.getChildAt(i));
        }
        this.countDownNums1 = [];
        for (var i = 0; i <= 4; i++) {
            this.countDownNums1.push(this.countDownGroup1.getChildAt(i));
        }
        this.countDownGroup1.visible = false;
        this.isTimeOut = false;
        this.timer = new egret.Timer(10, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.countDown, this);
        this.button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.stopBoom, this);
        this.button.touchEnabled = false;
        this.feedback.visible = false;
    };
    CellBoom.prototype.countDown = function () {
        this.milliscond = this.milliscond - 1;
        if (this.milliscond <= 0) {
            if (this.minutesecond > 0) {
                this.minutesecond = this.minutesecond - 1;
                this.milliscond = 9;
            }
            else {
                if (this.second > 0) {
                    this.second = this.second - 1;
                    this.minutesecond = 9;
                    this.milliscond = 0;
                    this.minutesecond;
                }
                else {
                    this.stopTime();
                    this.isTimeOut = true;
                    this.isWinFalg = false;
                    this.milliscond = 0;
                    this.second = 0;
                    this.isWin();
                }
            }
        }
        this.countDownNums[0].source = this.second >= 10 ? "num_green_" + String(this.second).substring(0, 1) + "_png"
            : "num_green_0_png";
        this.countDownNums[1].source = this.second >= 10 ? "num_green_" + String(this.second).substring(1, 2) + "_png"
            : "num_green_" + String(this.second).substring(0, 1) + "_png";
        this.countDownNums[2].source = "num_green_" + this.minutesecond + "_png";
        this.countDownNums[3].source = "num_green_" + this.milliscond + "_png";
    };
    CellBoom.prototype.stopBoom = function () {
        this.stopTime();
        this.isWin();
        var rect = new eui.Rect();
        rect.width = 250;
        rect.height = 1334;
        rect.fillColor = 0xffffff;
        this.addChild(rect);
        egret.Tween.get(rect)
            .to({ alpha: 0 }, 0)
            .to({ alpha: 1 }, 100)
            .to({ alpha: 0 }, 100);
    };
    CellBoom.prototype.stopTime = function () {
        this.timer.stop();
        this.button.touchEnabled = false;
    };
    CellBoom.prototype.isWin = function () {
        this.feedback.visible = true;
        var str = "num_white_";
        var times = (this.second + 0) * 1 + (this.minutesecond + 0) * 0.1 + (this.milliscond + 0) * 0.01;
        if (times <= this.winSecond && this.isTimeOut == false) {
            this.isWinFalg = true;
            if (times <= 0.02) {
                this.feedback.source = "ef_perfect_png";
            }
            else if (times <= 0.05) {
                this.feedback.source = "ef_great_png";
            }
            else if (times <= 0.08) {
                this.feedback.source = "ef_okay_png";
            }
            ;
        }
        else {
            this.isWinFalg = false;
            str = "num_red_";
            this.feedback.source = "ef_bad_png";
        }
        ;
        egret.Tween.get(this.feedback)
            .to({ visible: true, scaleX: 10, scaleY: 10 }, 0)
            .to({ scaleX: 0.5, scaleY: 0.5 }, 200, egret.Ease.circIn)
            .to({ scaleX: 1.2, scaleY: 1.2 }, 100)
            .to({ scaleX: 1, scaleY: 1 }, 100);
        this.countDownGroup1.visible = true;
        this.countDownNums1[0].source = this.second > 10 ? str + String(this.second).substring(0, 1) + "_png" : str + "0_png";
        this.countDownNums1[1].source = this.second > 10 ? str + String(this.second).substring(1, 2) + "_png"
            : str + String(this.second).substring(0, 1) + "_png";
        this.countDownNums1[2].source = str + this.minutesecond + "_png";
        this.countDownNums1[3].source = str + this.milliscond + "_png";
        this.countDownNums1[4].source = str + "png";
        GameEventManager.getInstance().dispatchEventWith(GameEventManager.BOOMFALG, true, { Falg: this.isWinFalg, index: this.boxIndex });
    };
    ;
    CellBoom.prototype.startTime = function () {
        this.second = Tools.GetRandomNum(DataManager.levels[DataManager.levelIndex].boomCountDown[0], DataManager.levels[DataManager.levelIndex].boomCountDown[1]); //[8-5]随机数;
        this.minutesecond = Tools.GetRandomNum(0, 9);
        this.milliscond = 0;
        this.timer.start();
        this.button.touchEnabled = true;
    };
    ;
    return CellBoom;
}(eui.Component));
__reflect(CellBoom.prototype, "CellBoom", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=cellBoom.js.map