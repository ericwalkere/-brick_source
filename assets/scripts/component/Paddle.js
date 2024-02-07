cc.Class({
    extends: cc.Component,

    properties: {
        limitSize: 350,
    },

    onLoad() {
        this.node.parent.on("touchmove", (event) => {
            const delta = event.getDelta();
            const newPosition = cc.v2(this.node.x + delta.x, this.node.y);
            if (newPosition.x < -this.limitSize || newPosition.x > this.limitSize) return;
            this.node.position = newPosition;
        });
    },

    init() {
        this.node.x = 0;
    },
});
