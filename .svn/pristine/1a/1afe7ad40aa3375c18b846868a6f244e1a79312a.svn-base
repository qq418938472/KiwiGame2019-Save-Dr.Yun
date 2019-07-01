class Story extends ViewBase {
    public constructor() {
        super();
    }

    public nextBtn: eui.Button;
    private storyIndex: number = 0;
    private bgRect: eui.Rect;
    private tipsLabel: eui.Label;
    private storyContent: eui.Image;
    private storyData: Array<Story.storyData> = []
    protected onload(): void {
        this.skinName = StorySkin;
        this.addTouchEvent();
    }

    protected onshow() {
        this.storyData = RES.getRes('storyJson_json');
        this.setContent();
    }

    private addTouchEvent() {
        this.nextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeBg, this);
    }

    private changeBg() {
        this.storyIndex++;
        if (this.storyIndex == 6) {
            Tools.audioStop();
            DataManager.levelIndex = 0;
            DataManager.isFirstTimePlayBoom = true;
            DataManager.isFirstTimePlayCalculate = true;
            var calculate = new Calculate();
            LayerManager.addChildLayer(calculate);
            this.hide();
        } else {
            this.setContent();
        }
    }

    private setContent() {
        this.storyContent.width = this.storyData[this.storyIndex].width;
        this.storyContent.height = this.storyData[this.storyIndex].height;
        this.storyContent.source = this.storyData[this.storyIndex].storyName + "_png";
        Tools.audioPlay(this.storyData[this.storyIndex].audio + "_mp3");
    }
}

namespace Story {
    export class storyData {
        storyName: string;
        width: number;
        height: number;
        audio: string;
    }
}
