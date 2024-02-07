cc.Class({
    extends: cc.Component,

    properties: {
        rb: cc.RigidBody,
    },

    init(controller, num) {
        this.controller = controller;
        this.node.position = cc.v2(0, -350);
        this.setSpeed(num);
    },

    setSpeed(num) {
        const speed = 800 + (800 * num / 100);
        cc.log(speed);
        this.rb.linearVelocity = cc.v2(speed, speed);
    },

    onBeginContact(contact, self, other) {
        switch (other.tag) {
            case 1:
                this.controller.contactWithGround();
                break;
            case 2:
                this.controller.contactWithBricks(other.node);
                break;
        }
    },
});
