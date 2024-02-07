cc.Class({
    extends: cc.Component,

    properties: {
        startPanel: cc.Node,
        levelPanel: cc.Node,
        endPanel: cc.Node,
    },

    openStart() {
        this.startPanel.active = true;
    },

    openLevel() {
        this.levelPanel.active = true;
    },
    
    openEnd() {
        this.endPanel.active = true;
    },

    closePanel() {
        this.startPanel.active = false;
        this.levelPanel.active = false;
        this.endPanel.active = false;
    },
});
