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
var Calculate = (function (_super) {
    __extends(Calculate, _super);
    function Calculate() {
        var _this = _super.call(this) || this;
        _this.audioLoad = false;
        //暂停
        _this._pauseTime = 0;
        return _this;
    }
    Calculate.prototype.onload = function () {
        this.skinName = CalculateSkin;
        this.addTouchEvent();
    };
    Calculate.prototype.onshow = function () {
        Animation.getInstance().animationPlay('middleSlowlyShow', this, 250);
        if (DataManager.levelIndex == 0 && DataManager.isFirstTimePlayCalculate) {
            var guide = new Guide();
            guide.type = 0;
            this.addChild(guide);
            GameEventManager.getInstance().addEventListener(GameEventManager.CLOSEGUIDE, this.showReady, this);
        }
        else {
            this.showReady();
        }
        this.sound = new egret.Sound();
        this.sound.load(RES.getRes("calculate_mp3").url);
        this.sound.addEventListener(egret.Event.COMPLETE, function (e) {
            this.bgAudioPlay();
            this.audioLoad = true;
        }, this);
    };
    Calculate.prototype.showReady = function () {
        GameEventManager.getInstance().removeEventListener(GameEventManager.CLOSEGUIDE, this.showReady, this);
        DataManager.isFirstTimePlayCalculate = false;
        this.hand.visible = false;
        this.feedback.visible = false;
        var ready = new ReadyGo();
        this.addChild(ready);
        GameEventManager.getInstance().addEventListener(GameEventManager.READYGO, this.calculateReadyGo, this);
    };
    Calculate.prototype.calculateReadyGo = function () {
        GameEventManager.getInstance().removeEventListener(GameEventManager.READYGO, this.calculateReadyGo, this);
        this.initPage();
        this.initNumbers();
        this.initTimer();
    };
    Calculate.prototype.addTouchEvent = function () {
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startCountDown, this);
    };
    Calculate.prototype.startCountDown = function () {
        this.initNumbers();
    };
    Calculate.prototype.initPage = function () {
        this.choiceNums = [];
        this.choiceImages = [];
        this.removeLabels = [];
        this.maskIndex = 2;
        this.titleIndex = 0;
        this.hand.alpha = DataManager.levels[DataManager.levelIndex].handAlpha;
        this.titleNumImgs = [];
        this.rightCount = 0;
        this.progress.width = 0;
        this.groupChoices = [];
        for (var i = 0; i <= 2; i++) {
            this.titleNumImgs.push(this.titleImgsGroup.getChildAt(i));
        }
        for (var i = 0; i <= 2; i++) {
            var group = this.choiceGroup.getChildAt(i);
            group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.judge, this);
            group.touchEnabled = group.touchChildren = false;
            this.groupChoices.push(group);
            this.choiceImages.push(group.getChildAt(1));
        }
    };
    Calculate.prototype.initTimer = function () {
        this.second = DataManager.levels[DataManager.levelIndex].calculateCountDown;
        this.minutesecond = 0;
        this.milliscond = 0;
        this.timer = new egret.Timer(10, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.countDown, this);
        this.timer.start();
        this.countDownNums = [];
        for (var i = 0; i <= 3; i++) {
            this.countDownNums.push(this.countDownGroup.getChildAt(i));
        }
    };
    Calculate.prototype.initNumbers = function () {
        this.titleNums = [];
        this.ansNum = Tools.GetRandomNum(1, 9);
        var num0 = Tools.GetRandomNum(0, this.ansNum);
        var num1 = this.ansNum - num0;
        this.titleNums.push(num0);
        this.titleNums.push(num1);
        this.titleNums.push(this.ansNum);
        this.refresh();
    };
    Calculate.prototype.nextTitle = function () {
        // this.labelHide();
        var index = Tools.GetRandomNum(0, 100);
        if (index < 40) {
            this.maskIndex = 0;
        }
        else if (40 < index && index < 80) {
            this.maskIndex = 1;
        }
        else {
            this.maskIndex = 2;
        }
        if (this.maskIndex > 1) {
            var num0 = Tools.GetRandomNum(0, this.ansNum);
            var num1 = this.ansNum - num0;
            this.titleNums[0] = num0;
            this.titleNums[1] = num1;
        }
        else {
            var num = Tools.GetRandomNum(0, 9 - this.titleNums[this.maskIndex]);
            this.ansNum = num + this.titleNums[this.maskIndex];
            if (this.maskIndex == 0) {
                this.titleNums[1] = num;
            }
            else {
                this.titleNums[0] = num;
            }
            this.titleNums[2] = this.ansNum = this.titleNums[this.maskIndex] + num;
        }
        this.refresh();
    };
    Calculate.prototype.refresh = function () {
        this.setTouch(true);
        this.setQuestionNum();
        this.setTitleNums();
        this.setChoiceNums();
        if (this.titleIndex != 0) {
            this.hand.visible = true;
            egret.Tween.get(this.hand)
                .to({ y: 230 }, DataManager.levels[DataManager.levelIndex].handSpeed)
                .to({
                x: this.titleNumImgs[this.maskIndex].x - 27,
                y: this.titleNumImgs[this.maskIndex].y - 19
            }, DataManager.levels[DataManager.levelIndex].handSpeed);
        }
    };
    Calculate.prototype.setQuestionNum = function () {
        var _this = this;
        var indexs = [0, 1, 2];
        indexs = indexs.filter(function (s) { return s !== _this.maskIndex; });
        var num = Tools.GetRandomNum(0, 1);
        this.hollowIndex = indexs[num];
    };
    Calculate.prototype.setTitleNums = function () {
        var _this = this;
        this.titleNumImgs.map(function (s, index) {
            s.source = index !== _this.hollowIndex ? "topic" + _this.titleNums[index] + "_png" : 'topic_png';
            s.name = String(_this.titleNums[index]);
        });
    };
    Calculate.prototype.setTouch = function (isTouch) {
        this.groupChoices.map(function (s) {
            s.touchEnabled = s.touchChildren = isTouch;
        });
    };
    Calculate.prototype.setChoiceNums = function () {
        var _this = this;
        this.choiceNums = [];
        this.choiceNums.push(this.titleNums[this.hollowIndex]);
        for (var i = 0; i <= 1; i++) {
            var num = Tools.GetRandomNum(0, 9);
            this.choiceNums.indexOf(num) == -1 ? this.choiceNums.push(num) : i--;
        }
        this.choiceNums = Tools.ArrayDisorder(this.choiceNums);
        this.choiceImages.map(function (s, index) {
            s.source = "btn_" + _this.choiceNums[index] + "_png";
            s.name = String(_this.choiceNums[index]);
        });
    };
    Calculate.prototype.judge = function (e) {
        var img = e.currentTarget.getChildAt(1);
        this.setTouch(false);
        if (Number(img.name) == this.titleNums[this.hollowIndex]) {
            Tools.audioPlay('right_mp3');
            this.titleIndex++;
            this.rightCount++;
            this.titleNumImgs[this.hollowIndex].source = "topic0_" + img.name + "_png";
            this.titleNumImgs[this.hollowIndex].name = img.name;
            DataManager.totalScore += 10;
            egret.Tween.get(this.progress)
                .to({ width: this.progress.width + 625 / DataManager.levels[DataManager.levelIndex].accessTitleNum }, 100);
            egret.Tween.get(this)
                .wait(DataManager.levels[DataManager.levelIndex].changeTitleSpeed)
                .call(this.nextTitle);
            if (this.rightCount == DataManager.levels[DataManager.levelIndex].accessTitleNum) {
                this.changeBoomLayer();
            }
            egret.Tween.get(this.feedback)
                .to({ visible: true, scaleX: 10, scaleY: 10, x: 374, y: 852 }, 0)
                .to({ scaleX: 0.5, scaleY: 0.5, x: 539, y: 867 }, 200, egret.Ease.circIn)
                .to({ scaleX: 1.2, scaleY: 1.2, x: 539, y: 867 }, 100)
                .to({ scaleX: 1, scaleY: 1, x: 539, y: 867 }, 100)
                .to({ visible: false }, 300);
        }
        else {
            this.dead();
        }
    };
    Calculate.prototype.dead = function () {
        var _this = this;
        Tools.audioStop();
        this.bgAudioStop();
        var wrongTips = new WrongFeedBack();
        this.addChild(wrongTips);
        this.timer.stop();
        egret.Tween.get(this)
            .wait(1400)
            .call(function () {
            var result = new Result();
            LayerManager.addChildLayer(result);
            LayerManager.removeChildLayer(_this);
            Tools.audioPlay('result_mp3');
        });
    };
    Calculate.prototype.countDown = function () {
        this.milliscond = this.milliscond - 1;
        if (this.milliscond <= 0) {
            if (0 + this.minutesecond > 1) {
                this.minutesecond = this.minutesecond - 1;
                this.milliscond = 9;
            }
            else {
                if (0 + this.second > 0) {
                    this.second = this.second - 1;
                    this.minutesecond = 9;
                    this.milliscond = 0;
                }
                else {
                    this.milliscond = 0;
                    this.minutesecond = 0;
                    this.second = 0;
                    this.timer.stop();
                    this.dead();
                }
            }
        }
        this.countDownNums[0].source = this.second >= 10 ? "countdown" + String(this.second).substring(0, 1) + "_png" : "countdown0_png";
        this.countDownNums[1].source = this.second >= 10 ? "countdown" + String(this.second).substring(1, 2) + "_png"
            : "countdown" + String(this.second).substring(0, 1) + "_png";
        this.countDownNums[2].source = "countdown" + this.minutesecond + "_png";
        this.countDownNums[3].source = "countdown" + this.milliscond + "_png";
    };
    Calculate.prototype.changeBoomLayer = function () {
        var _this = this;
        this.timer.stop();
        Tools.audioStop();
        this.bgAudioStop();
        this.dispose();
        egret.Tween.get(this)
            .wait(1000)
            .call(function () {
            var boom = new Bomb();
            LayerManager.addChildLayer(boom);
            LayerManager.removeChildLayer(_this);
        });
    };
    Calculate.prototype.bgAudioPlay = function () {
        this.soundChennel = this.sound.play(this._pauseTime, -1);
        this.soundChennel.addEventListener(egret.Event.SOUND_COMPLETE, this.onComplete, this);
    };
    Calculate.prototype.onComplete = function (e) {
        this.bgAudioStop();
    };
    //停止
    Calculate.prototype.bgAudioStop = function () {
        if (this.soundChennel) {
            this.soundChennel.removeEventListener(egret.Event.SOUND_COMPLETE, this.onComplete, this);
            this.soundChennel.stop();
            this.soundChennel = null;
        }
    };
    Calculate.prototype.bgAudioPause = function () {
        if (this.soundChennel) {
            this._pauseTime = this.soundChennel.position;
            this.bgAudioStop();
        }
    };
    return Calculate;
}(ViewBase));
__reflect(Calculate.prototype, "Calculate");
//# sourceMappingURL=Calculate.js.map