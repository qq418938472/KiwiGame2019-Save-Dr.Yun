class Tips extends ViewBase {
	public constructor() {
		super();
	}

	private static _instance: Tips;
	public static getInstance(): Tips {
		if (!this._instance) {
			this._instance = new Tips();
		}
		return this._instance;
	}

    protected onload() {
		this.tipsGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hideTips, this);
		this.hideTips();
	}

	public tipsGroup: eui.Group;
	public bg: eui.Image;
	public tips: eui.Label;
	public kuohao: eui.Label;

	public showTips(text: string, kuohao: string = "") {
		this.visible = true;
		this.tips.text = text;
		this.bg.height = 0;
		this.kuohao.text = kuohao;
		egret.Tween.get(this.bg).to({ height: 226 }, 100, egret.Ease.circInOut);
	}

	private hideTips() {
		egret.Tween.get(this.bg).to({ height: 0 }, 100, egret.Ease.circInOut).call(() => {
			this.visible = false;
		});
	}
}