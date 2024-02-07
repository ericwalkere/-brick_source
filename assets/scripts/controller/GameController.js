const { registerEvent } = require("EventHelper");
const Code = require("EventCode");

cc.Class({
    extends: cc.Component,

    properties: {
        ball: require("Ball"),
        bricks: require("Bricks"),
        paddle: require("Paddle"),
        menu: require("MenuController"),
    },

    onLoad() {
        this.initEvent();
        this.init();
    },

    initEvent() {
        registerEvent(Code.GAME.GET_LEVEL, this.getLevel, this);
        registerEvent(Code.GAME.START, this.startGame, this);
    },

    init() {
        this.physicsManager = cc.director.getPhysicsManager();
        this.physicsManager.enabled = true;
    },

    getLevel(level, num) {
        this.level = level;
        this.num = num;
    },

    startGame() {
        this.resumeGame();
        this.paddle.init();
        this.ball.init(this, this.num);
        this.bricks.init(this.level);
        this.menu.closePanel();
    },

    pauseGame() {
        this.physicsManager.enabled = false;
    },

    resumeGame() {
        this.physicsManager.enabled = true;
    },

    contactWithGround() {
        this.menu.openEnd();
        this.pauseGame();
    },

    contactWithBricks(block) {
        block.getComponent("Block").takeDamage(1);
    },
});
