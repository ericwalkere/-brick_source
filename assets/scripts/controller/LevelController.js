
const Emitter = require("EventEmitter");
const { registerEvent } = require("EventHelper");
const Code = require("EventCode");

cc.Class({
    extends: cc.Component,

    properties: {
        levelPrefab: cc.Prefab,
        parentNode: cc.Node,
        levels: [cc.TextAsset],
    },

    onLoad() {
        this.initEvent();
        this.init();
    },

    initEvent() {
        registerEvent(Code.LEVEL.CLICK_LEVEL, this.clickLevel, this);
    },

    init() {
        this.levels.forEach((element, i) => {
            const level = cc.instantiate(this.levelPrefab);
            level.getComponent("Level").setLevel(element, i + 1);
            level.parent = this.parentNode;
        });
    },

    clickLevel(level, num) {
        const levelArr = level.text.split("\r\n");
        Emitter.instance.emit(Code.GAME.GET_LEVEL, levelArr, num);
    },
});
