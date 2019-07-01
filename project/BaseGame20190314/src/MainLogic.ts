class MainLogic {
	private static main: Main;
	public constructor(m) {
		MainLogic.main = m;
		MainLogic.initLoading();
	}
	public static getStage(): egret.Stage {
		return MainLogic.main.stage;
	}
	public static initLoading() {
		MainLogic.initMoving();
		MainLogic.startLogin();
		MainLogic.initData();

		LayerManager.init(MainLogic.main);
	}

	private static startLogin() {
		// hm.login();
		// MusicManager.ins.init();
		// SoundManager.initSound();
	}
	public static startGame() {
		// MainLogic.initData();
		// hm.d.loading.onLoaing(100);
		this.loadFinish = true;
		// this.nextUpdateTime = FrameManager.trueTime + 800;

		// SubUIManager.showClazz(TableResultUI);

		// var error:LoginError = new LoginError;
		// error.showLoginError(-5);return;
	}
	private static hasRecvStart: boolean = false;
	public static recvStart() {
		this.hasRecvStart = true;
	}
	private static loadFinish: boolean = false;
	private static nextUpdateTime: number = 0;
	public static updateLoading() {
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

	}
	public static initData() {
		// dm.d = new dm;
		// dm.d.loadData();
		// this.initConfig();
	}

	public static writeFrame() {

	}
	///////////////////////////////////////////////////
	private static initConfig() {
	}
	///////////////////////////////////////////////////
	private static initMoving() {
		this.main.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoving, this);
	}
	private static moveObj: any;
	public static setMovingObj(p: any) {
		this.moveObj = p;
	}
	public static clearPlane() {
		this.moveObj = null;
	}
	private static onMoving(e: egret.TouchEvent) {
		if (this.moveObj == null) {
			return;
		}
		this.moveObj.onMoving(e.stageX, e.stageY);
	}
}