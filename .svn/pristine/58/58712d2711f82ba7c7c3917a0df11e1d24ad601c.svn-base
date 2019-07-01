class GameEventManager extends egret.DisplayObjectContainer {
    public constructor() {
        super();
    }

    private static _instance: GameEventManager;
    public static getInstance(): GameEventManager {
        if (!this._instance) {
            this._instance = new GameEventManager();
        }
        return this._instance;
    }

    /**更改金钱 */
    public static SET_MONEY = "SET_MONEY";

    //爆炸结果返回
    public static BOOMFALG = "BOOMFALG";

    //ReadyGo
    public static READYGO = "READYGO";

    //关闭
    public static CLOSEGUIDE = "CLOSEGUIDE";

    //出局
    public static OUT = "OUT";

    //成功返回
    public static BACK = "BACK";
}