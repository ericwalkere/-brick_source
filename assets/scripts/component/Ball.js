
cc.Class({
    extends: cc.Component,

    properties: {
        rb: cc.RigidBody,
    },

    init(controller) {
        this.controller = controller;
        this.setSpeed();
    },

    setSpeed() {
        const speed = cc.v2(800, 800);
        this.rb.linearVelocity = speed;
    },

    onBeginContact(contact, self, other) {
        switch (other.tag) {
            case 1:
                this.controller.contactWithGround(); break;
            case 2:
                this.controller.contactWithBricks(other.node); break;
        }
    },
});
