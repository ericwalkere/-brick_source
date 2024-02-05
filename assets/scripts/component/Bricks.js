cc.Class({
    extends: cc.Component,

    properties: {
        block: cc.Prefab,
    },

    init(arr) {
        for (let r = 0; r < arr.length; r++) {
            for (let c = 0; c < arr[r].length; c++) {
                switch (arr[r][c]) {
                    case 0: break;
                    case 1: this.createBlock(r, c, 1, false); break;
                    case 2: this.createBlock(r, c, 2); break;
                    case 3: this.createBlock(r, c, 3); break;
                    case 4: this.createBlock(r, c, 4); break;
                }
            }
        }
    },

    createBlock(r, c, hp, canAttack) {
        const gap = 15;
        const block = cc.instantiate(this.block);
        const blockComponent = block.getComponent("Block");
        blockComponent.setPos(r, c, gap);
        blockComponent.health(hp, canAttack);
        block.parent = this.node;
    },
});
