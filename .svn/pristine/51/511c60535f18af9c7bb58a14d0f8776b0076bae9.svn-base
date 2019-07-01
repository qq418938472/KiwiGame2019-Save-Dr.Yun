class WrongFeedBack extends ViewBase {
	public constructor() {
		super();
	}

	protected onload(): void {
		this.skinName = WrongFeedBackSkin;
	}

	private bg0: eui.Image;
	private bg1: eui.Image;
	protected onshow() {
		Tools.audioPlay('wrong_mp3');
		egret.Tween.get(this.bg0)
			.to({ x: 750, y: 600 }, 0)
			.to({ x: 0, y: 600 }, 50)
		egret.Tween.get(this.bg1)
			.wait(50)
			.to({ x: 750, y: 600 }, 0)
			.to({ x: 150, y: 600 }, 150)
			.wait(800)
			.to({ x: -600, y: 600 }, 250)
	}
}