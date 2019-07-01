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
var Bomb = (function (_super) {
    __extends(Bomb, _super);
    function Bomb() {
        var _this = _super.call(this) || this;
        //暂停
        _this._pauseTime = 0;
        return _this;
    }
    Bomb.prototype.onload = function () {
        this.skinName = BombSkin;
    };
    Bomb.prototype.onshow = function () {
        this.initData();
        if (DataManager.levelIndex == 0 && DataManager.isFirstTimePlayBoom) {
            this.guide = new Guide();
            this.guide.type = 1;
            this.addChild(this.guide);
            GameEventManager.getInstance().addEventListener(GameEventManager.CLOSEGUIDE, this.readyGo, this);
        }
        else {
            this.readyGo();
        }
        this.sound = new egret.Sound();
        this.sound.load(RES.getRes("boom_mp3").url);
        this.sound.addEventListener(egret.Event.COMPLETE, function (e) {
            this.bgAudioPlay();
        }, this);
    };
    Bomb.prototype.readyGo = function () {
        GameEventManager.getInstance().removeEventListener(GameEventManager.CLOSEGUIDE, this.readyGo, this);
        DataManager.isFirstTimePlayBoom = false;
        var ready = new ReadyGo();
        this.addChild(ready);
        GameEventManager.getInstance().addEventListener(GameEventManager.READYGO, this.timeStart, this);
        GameEventManager.getInstance().addEventListener(GameEventManager.BOOMFALG, this.boomFalg, this);
    };
    Bomb.prototype.initData = function () {
        this.box1 = new CellBoom(1, DataManager.levels[DataManager.levelIndex].boomLimitValue);
        this.addChild(this.box1);
        this.box2 = new CellBoom(2, DataManager.levels[DataManager.levelIndex].boomLimitValue);
        this.addChild(this.box2);
        this.box2.x = 250;
        this.box3 = new CellBoom(3, DataManager.levels[DataManager.levelIndex].boomLimitValue);
        this.addChild(this.box3);
        this.box3.x = 500;
        this.winNum = 0;
        //this.timeStart();
    };
    Bomb.prototype.timeStart = function () {
        GameEventManager.getInstance().removeEventListener(GameEventManager.READYGO, this.timeStart, this);
        this.box1.startTime();
        this.box2.startTime();
        this.box3.startTime();
    };
    Bomb.prototype.boomFalg = function (evt) {
        console.log(evt.data.Falg);
        if (evt.data.Falg == false) {
            GameEventManager.getInstance().removeEventListener(GameEventManager.BOOMFALG, this.boomFalg, this);
            this.result();
        }
        else {
            Tools.audioPlay('right_mp3');
            this.winNum = this.winNum + 1;
            if (this.winNum == 3) {
                GameEventManager.getInstance().removeEventListener(GameEventManager.BOOMFALG, this.boomFalg, this);
                this.result();
            }
        }
    };
    ;
    Bomb.prototype.result = function () {
        var _this = this;
        GameEventManager.getInstance().removeEventListener(GameEventManager.CLOSEGUIDE, this.timeStart, this);
        GameEventManager.getInstance().removeEventListener(GameEventManager.READYGO, this.initData, this);
        if (this.winNum == 3) {
            DataManager.savePeopleNum++;
            this.bgAudioStop();
            if (DataManager.levelIndex < 2) {
                DataManager.levelIndex++;
            }
            var guide = new Guide();
            guide.type = 2;
            this.addChild(guide);
            Tools.audioPlay('success_mp3');
            GameEventManager.getInstance().addEventListener(GameEventManager.BACK, this.changeCalculate, this);
        }
        else {
            this.box1.stopTime();
            this.box2.stopTime();
            this.box3.stopTime();
            var boomFeedBack = new BoomWrongFeedBack();
            this.addChild(boomFeedBack);
            egret.Tween.get(this)
                .wait(2000)
                .call(function () {
                _this.bgAudioStop();
                LayerManager.removeChildLayer(_this);
                var result = new Result();
                LayerManager.addChildLayer(result);
            });
        }
    };
    ;
    Bomb.prototype.changeCalculate = function () {
        var _this = this;
        GameEventManager.getInstance().removeEventListener(GameEventManager.BACK, this.changeCalculate, this);
        egret.Tween.get(this)
            .wait(500)
            .call(function () {
            Tools.audioStop();
            var calculate = new Calculate();
            LayerManager.addChildLayer(calculate);
            LayerManager.removeChildLayer(_this);
            DataManager.totalScore += 50;
        });
    };
    Bomb.prototype.bgAudioPlay = function () {
        this.soundChennel = this.sound.play(this._pauseTime, -1);
        this.soundChennel.addEventListener(egret.Event.SOUND_COMPLETE, this.onComplete, this);
    };
    Bomb.prototype.onComplete = function (e) {
        this.bgAudioStop();
    };
    //停止
    Bomb.prototype.bgAudioStop = function () {
        if (this.soundChennel) {
            this.soundChennel.removeEventListener(egret.Event.SOUND_COMPLETE, this.onComplete, this);
            this.soundChennel.stop();
            this.soundChennel = null;
        }
    };
    Bomb.prototype.bgAudioPause = function () {
        if (this.soundChennel) {
            this._pauseTime = this.soundChennel.position;
            this.bgAudioStop();
        }
    };
    return Bomb;
}(ViewBase));
__reflect(Bomb.prototype, "Bomb");
//# sourceMappingURL=Bomb.js.map