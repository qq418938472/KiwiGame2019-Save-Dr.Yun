class CellBoom extends eui.Component implements eui.UIComponent {
	//定义初始化数据
	private second: number;
	private winSecond: number;
	private isTimeOut: Boolean;
	private isWinFalg: Boolean;
	private minutesecond: number;
	private milliscond: number;
	private timer: egret.Timer;
	private button: eui.Button;
	private boxIndex: number;
	private btnBg: eui.Image;
	private countDownGroup: eui.Group;
	private countDownNums: Array<eui.Image>;
	private feedback: eui.Image;

	private countDownGroup1: eui.Group;
	private countDownNums1: Array<eui.Image>;

	public constructor(index: any, mixSecond: any) {
		super();
		this.skinName = cellBoomSkin;

		this.boxIndex = index;
		this.winSecond = mixSecond;

		this.initUI();
	}

	protected initUI() {
		if (this.boxIndex == 1) {
			this.btnBg.source = "btn_yellow_png";
		} else if (this.boxIndex == 2) {
			this.btnBg.source = "btn_blue_png";
		} else if (this.boxIndex == 3) {
			this.btnBg.source = "btn_red_png";
		}

		this.countDownNums = [];
		for (var i = 1; i <= 4; i++) {
			this.countDownNums.push(<eui.Image>this.countDownGroup.getChildAt(i));
		}

		this.countDownNums1 = [];
		for (var i = 0; i <= 4; i++) {
			this.countDownNums1.push(<eui.Image>this.countDownGroup1.getChildAt(i));
		}
		this.countDownGroup1.visible = false;

		this.isTimeOut = false;

		this.timer = new egret.Timer(10, 0);
		this.timer.addEventListener(egret.TimerEvent.TIMER, this.countDown, this);
		this.button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.stopBoom, this);
		this.button.touchEnabled = false;
		this.feedback.visible = false;
	}

	protected countDown() {
		this.milliscond = this.milliscond - 1
		if (this.milliscond <= 0) {
			if (this.minutesecond > 0) {
				this.minutesecond = this.minutesecond - 1;
				this.milliscond = 9;
			} else {
				if (this.second > 0) {
					this.second = this.second - 1;
					this.minutesecond = 9;
					this.milliscond = 0;
					this.minutesecond;
				} else {
					this.stopTime();
					this.isTimeOut = true;
					this.isWinFalg = false;
					this.milliscond = 0;
					this.second = 0;
					this.isWin();
				}
			}
		}
		this.countDownNums[0].source = this.second >= 10 ? "num_green_" + String(this.second).substring(0, 1) + "_png"
			: "num_green_0_png";
		this.countDownNums[1].source = this.second >= 10 ? "num_green_" + String(this.second).substring(1, 2) + "_png"
			: "num_green_" + String(this.second).substring(0, 1) + "_png";
		this.countDownNums[2].source = "num_green_" + this.minutesecond + "_png";
		this.countDownNums[3].source = "num_green_" + this.milliscond + "_png";
	}

	protected stopBoom() {
		this.stopTime();
		this.isWin();
		var rect = new eui.Rect();
		rect.width = 250;
		rect.height = 1334;
		rect.fillColor = 0xffffff;
		this.addChild(rect);
		egret.Tween.get(rect)
			.to({ alpha: 0 }, 0)
			.to({ alpha: 1 }, 100)
			.to({ alpha: 0 }, 100)
	}

	public stopTime() {
		this.timer.stop();
		this.button.touchEnabled = false;
	}

	protected isWin() {
		this.feedback.visible = true;
		var str: string = "num_white_";
		var times = (this.second + 0) * 1 + (this.minutesecond + 0) * 0.1 + (this.milliscond + 0) * 0.01;
		if (times <= this.winSecond && this.isTimeOut == false) {
			this.isWinFalg = true;
			if (times <= 0.02) {
				this.feedback.source = "ef_perfect_png";
			} else if (times <= 0.05) {
				this.feedback.source = "ef_great_png";
			} else if (times <= 0.08) {
				this.feedback.source = "ef_okay_png";
			};
		} else {
			this.isWinFalg = false;
			str = "num_red_"
			this.feedback.source = "ef_bad_png";
		};

		egret.Tween.get(this.feedback)
			.to({ visible: true, scaleX: 10, scaleY: 10 }, 0)
			.to({ scaleX: 0.5, scaleY: 0.5 }, 200, egret.Ease.circIn)
			.to({ scaleX: 1.2, scaleY: 1.2 }, 100)
			.to({ scaleX: 1, scaleY: 1 }, 100)

		this.countDownGroup1.visible = true;
		this.countDownNums1[0].source = this.second > 10 ? str + String(this.second).substring(0, 1) + "_png" : str + "0_png";
		this.countDownNums1[1].source = this.second > 10 ? str + String(this.second).substring(1, 2) + "_png"
			: str + String(this.second).substring(0, 1) + "_png";
		this.countDownNums1[2].source = str + this.minutesecond + "_png";
		this.countDownNums1[3].source = str + this.milliscond + "_png";
		this.countDownNums1[4].source = str + "png";

		GameEventManager.getInstance().dispatchEventWith(GameEventManager.BOOMFALG, true, { Falg: this.isWinFalg, index: this.boxIndex });
	};

	public startTime() {
		this.second = Tools.GetRandomNum(DataManager.levels[DataManager.levelIndex].boomCountDown[0], DataManager.levels[DataManager.levelIndex].boomCountDown[1])//[8-5]随机数;
		this.minutesecond = Tools.GetRandomNum(0, 9);
		this.milliscond = 0;
		this.timer.start();
		this.button.touchEnabled = true;
	};
}