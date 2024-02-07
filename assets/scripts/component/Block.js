const mathf = require("Mathf");

cc.Class({
    extends: cc.Component,

    properties: {
        _canAttack: true,
        _currentHP: 0,

        color1: cc.Color,
        color2: cc.Color,
        color3: cc.Color,
        color4: cc.Color,
    },

    setPos(r, c, gap) {
        this.node.x = (this.node.width + gap) * c;
        this.node.y = -(this.node.height + gap / 2) * r;
    },

    health(maxHP, canAttack = true) {
        this._canAttack = canAttack;
        this.maxHP = maxHP;
        this._currentHP = maxHP;
        this.setColor(maxHP);
    },

    takeDamage(damage) {
        if (!this._canAttack) return;
        this._currentHP = mathf.clamp(this._currentHP - damage, 1, this.maxHP);

        if (this._currentHP > 1) {
            this.setColor(this._currentHP);
        } else {
            this.node.destroy();
        }
    },

    setColor(num) {
        switch (num) {
            case 1:
                this.node.color = this.color1;
                break;
            case 2:
                this.node.color = this.color2;
                break;
            case 3:
                this.node.color = this.color3;
                break;
            case 4:
                this.node.color = this.color4;
                break;
        }
    },
});
