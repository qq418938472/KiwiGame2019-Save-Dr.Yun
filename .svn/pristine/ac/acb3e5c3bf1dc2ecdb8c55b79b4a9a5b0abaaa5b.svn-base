class GuidePage extends ViewBase {
	private car: eui.Image;
	private ren: eui.Image;

	public constructor() {
		super();
	}

	private guideBtn: eui.Button;
	protected onload(): void {
		this.skinName = GuidePageSkin;
		this.addTouchEvent();
	}

	protected onshow() {
		this.moveCar();
		this.moveRen();
	}

	protected moveCar() {
		egret.Tween.get(this.car, { loop: true })
			.to({ y: 904 }, 2000)
			.to({ y: 894 }, 2000)

	};

	protected moveRen() {
		egret.Tween.get(this.ren,{ loop: true })
			.to({ y: 180 - 10 }, 2000)
			.to({ y: 180 }, 2000)
	};

	private addTouchEvent() {
		this.guideBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, LayerManager.main.startGame, LayerManager.main);
	}
}