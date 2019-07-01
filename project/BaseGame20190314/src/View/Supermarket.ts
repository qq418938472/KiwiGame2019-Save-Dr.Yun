class Supermarket extends ViewBase {
    public constructor() {
        super();
    }

    private static _instance: Supermarket;
    public static getInstance(): Supermarket {
        if (!this._instance) {
            this._instance = new Supermarket();
        }
        return this._instance;
    }

    protected isHaveBg = true;
    public mainScroller: eui.Scroller;
    public mainGroup: eui.Group;
    public commodityList: eui.List;
    public closeBtn: eui.Image;
    public addMoneyBtn: eui.Button;

    protected onload(): void {
        // 把数组数据转成EUI数组
        // 把EUI数组作为list的数据源
        this.mainScroller.viewport = this.commodityList;
        // 隐藏进度条
        this.commodityList.itemRenderer = CommodityListItemRender;
        this.addTouchEvent();
    }

    protected onshow() {
        Tools.setArrayCollection(this.commodityList, DataManager.dataArr);
    }

    private addTouchEvent() {
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
        this.addMoneyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addMoney, this);
    }

    private addMoney() {
        DataManager.money += 500; //触发事件机制
    }
}

class CommodityListItemRender extends eui.ItemRenderer {

    public constructor() {
        super();
    }

    public backgroundRect: eui.Rect;
    public price: eui.Label;
    public isHave: eui.Rect;
    public have: eui.Image;

    protected createChildren(): void {
        super.createChildren();
    }
    protected childrenCreated(): void {
        super.childrenCreated();
        //需要响应此事件的地方就绑定
        GameEventManager.getInstance().addEventListener(GameEventManager.SET_MONEY, this.addMoney, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tipsName, this);
    }

    private addMoney() {
        this.price.text = this.data.price + DataManager.money;
    }

    private tipsName() {
        Tips.getInstance().showTips(this.data.nameCH);
    }

    protected dataChanged(): void {
        super.dataChanged();
        // data 是你当前的数据
        let data = this.data;
    }
}