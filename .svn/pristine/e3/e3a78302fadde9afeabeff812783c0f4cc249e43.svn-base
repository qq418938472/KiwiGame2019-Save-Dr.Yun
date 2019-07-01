class Guide extends ViewBase {

	private goBoomBtn: eui.Button;
	private goCalculateBtn: eui.Button;
	private successBtn: eui.Button;
	private boomGuide: eui.Group;
	private calculateGuide: eui.Group;
	private successGuide: eui.Group;
	public type: number = 0;
	public constructor() {
		super();
	}

	protected onload(): void {
		this.skinName = GuideSkin;
	}

	protected onshow() {
		this.calculateGuide.visible = this.type == 0;
		this.boomGuide.visible = this.type == 1;
		this.successGuide.visible = this.type == 2;
		this.goBoomBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
		this.goCalculateBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
		this.successBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.back, this);
	}

	protected close() {
		GameEventManager.getInstance().dispatchEventWith(GameEventManager.CLOSEGUIDE);
		this.hide();
	}

	protected back() {
		GameEventManager.getInstance().dispatchEventWith(GameEventManager.BACK);
		this.hide();
	}
}