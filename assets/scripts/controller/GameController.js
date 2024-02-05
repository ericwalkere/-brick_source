
cc.Class({
    extends: cc.Component,

    properties: {
        ball: require("Ball"),
        bricks: require("Bricks"),
        paddle: require("Paddle"),
    },

    onLoad() {
        this.physicsManager = cc.director.getPhysicsManager();
        this.physicsManager.enabled = true;
        this.init();
    },

    init() {
        const arr = [
            [0, 1, 1, 1, 1, 1, 1, 1, 0],
            [1, 2, 2, 4, 4, 4, 2, 2, 1],
            [2, 3, 3, 3, 3, 3, 3, 3, 2],
            [3, 1, 0, 0, 0, 0, 0, 1, 3],
            [3, 2, 2, 2, 2, 2, 2, 2, 3],
            [2, 4, 4, 4, 4, 4, 4, 4, 2],
            [1, 1, 0, 0, 0, 0, 0, 1, 1],
        ];

        this.ball.init(this);
        this.paddle.init();
        this.bricks.init(arr);
    },

    pauseGame() {
        this.physicsManager.enabled = false;
    },

    resumeGame() {
        this.physicsManager.enabled = true;
    },

    stopGame() {
        this.physicsManager.enabled = false;
    },

    contactWithGround() {
        this.stopGame();
    },

    contactWithBricks(block) {
        block.getComponent("Block").takeDamage(1);
    },
});
