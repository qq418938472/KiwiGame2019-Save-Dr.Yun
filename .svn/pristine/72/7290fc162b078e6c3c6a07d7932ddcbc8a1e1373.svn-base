class BoomWrongFeedBack extends ViewBase {
	public constructor() {
		super();
	}

	protected onload(): void {
		this.skinName = BoomWrongFeedBackSkin;
	}

	private boomFeedBack: eui.Image;
	protected onshow() {
		Tools.audioPlay('boomAudio_mp3');
		this.x = 375;
		this.y = 350;
		egret.Tween.get(this.boomFeedBack)
			.to({ scaleX: 5, scaleY: 5 }, 0)
			.to({ scaleX: 0.8, scaleY: 0.8 }, 200)
			.to({ scaleX: 2, scaleY: 2 }, 200)
			.to({ scaleX: 1.3, scaleY: 1.3 }, 200)
	}

}