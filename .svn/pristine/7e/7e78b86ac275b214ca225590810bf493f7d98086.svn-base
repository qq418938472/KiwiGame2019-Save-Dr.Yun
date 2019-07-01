class LayerManager {
	public constructor() {
	}

	public static main: Main;
	private static baseUILayer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();

	public static init(m: Main) {
		this.main = m;
		LayerManager.initBaseLayer();
	}

	public static initBaseLayer() {
		LayerManager.main.addChild(LayerManager.baseUILayer);
	}

	public static openStory(): void {
		var story = new Story();
		if (LayerManager.baseUILayer.getChildIndex(story) == -1) {
			LayerManager.baseUILayer.addChild(story);
		}
	}

	public static openBomb(): void {
		var bomb = new Bomb();
		if (LayerManager.baseUILayer.getChildIndex(bomb) == -1) {
			LayerManager.baseUILayer.addChild(bomb);
		}
	}

	public static addChildLayer(panel: ViewBase) {
		console.log(panel)
		if (LayerManager.baseUILayer.getChildIndex(panel) == -1) {
			LayerManager.baseUILayer.addChild(panel);
		}
	}

	public static removeChildLayer(o: egret.DisplayObjectContainer) {
		LayerManager.baseUILayer.removeChild(o);
	}
}