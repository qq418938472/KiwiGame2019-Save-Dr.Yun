class ReadyGo extends ViewBase {
	private ready:eui.Image;
	private go:eui.Image;

	public constructor() {
		super()
	}

	protected onload(): void {
		this.skinName = ReadyGoSkin;
	}

	private label: eui.Label;
	protected onshow() {
		Tools.audioPlay('readyGo_mp3');
		this.go.visible = false; 
		egret.Tween.get(this)
			.to({ x: 750, y: 450 }, 0)
			.to({ x: 100, y: 450 }, 300)
			.to({ x: 80, y: 450 }, 800)
			.call(() => {
				this.go.visible = true; 
				this.ready.visible = false;
			})
			.to({ x: 70, y: 450 }, 50)
			.to({ x: -750, y: 450 }, 500, egret.Ease.quadInOut)
			.call(() => {
				GameEventManager.getInstance().dispatchEventWith(GameEventManager.READYGO);
			})
	}
}