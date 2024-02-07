const Emitter = require("EventEmitter");
const Code = require("EventCode");

cc.Class({
    extends: cc.Component,

    properties: {
        levelText: cc.Label,
    },

    onLoad() {
        this.node.on("click", this.onClick, this);
    },

    setLevel(level, num) {
        this.levelText.string = `Level ${num}`;
        this.level = level;
        this.num = num;
    },

    onClick() {
        Emitter.instance.emit(Code.LEVEL.CLICK_LEVEL, this.level, this.num);
        Emitter.instance.emit(Code.GAME.START);
    },
});
