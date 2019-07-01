var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MainLogic = (function () {
    function MainLogic(m) {
        MainLogic.main = m;
        MainLogic.initLoading();
    }
    MainLogic.getStage = function () {
        return MainLogic.main.stage;
    };
    MainLogic.initLoading = function () {
        MainLogic.initMoving();
        MainLogic.startLogin();
        MainLogic.initData();
        LayerManager.init(MainLogic.main);
    };
    MainLogic.startLogin = function () {
        // hm.login();
        // MusicManager.ins.init();
        // SoundManager.initSound();
    };
    MainLogic.startGame = function () {
        // MainLogic.initData();
        // hm.d.loading.onLoaing(100);
        this.loadFinish = true;
        // this.nextUpdateTime = FrameManager.trueTime + 800;
        // SubUIManager.showClazz(TableResultUI);
        // var error:LoginError = new LoginError;
        // error.showLoginError(-5);return;
    };
    MainLogic.recvStart = function () {
        this.hasRecvStart = true;
    };
    MainLogic.updateLoading = function () {
        // if (this.hasRecvStart == true) {
        // 	return;
        // }
        // if (this.loadFinish == false) {
        // 	return;
        // }
        // if (this.nextUpdateTime > FrameManager.trueTime) {
        // 	return;
        // }
        // hm.d.loading.onLoaing(100);
        // this.nextUpdateTime = FrameManager.trueTime + 800;
    };
    MainLogic.initData = function () {
        // dm.d = new dm;
        // dm.d.loadData();
        // this.initConfig();
    };
    MainLogic.writeFrame = function () {
    };
    ///////////////////////////////////////////////////
    MainLogic.initConfig = function () {
    };
    ///////////////////////////////////////////////////
    MainLogic.initMoving = function () {
        this.main.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoving, this);
    };
    MainLogic.setMovingObj = function (p) {
        this.moveObj = p;
    };
    MainLogic.clearPlane = function () {
        this.moveObj = null;
    };
    MainLogic.onMoving = function (e) {
        if (this.moveObj == null) {
            return;
        }
        this.moveObj.onMoving(e.stageX, e.stageY);
    };
    MainLogic.hasRecvStart = false;
    MainLogic.loadFinish = false;
    MainLogic.nextUpdateTime = 0;
    return MainLogic;
}());
__reflect(MainLogic.prototype, "MainLogic");
//# sourceMappingURL=MainLogic.js.map