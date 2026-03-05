

//const for calculating things
const VectorMath = {

    //get the direction of movement, depending on where the mouse is located
    forwardX() {
        return Math.cos(this.yaw());
    },
    forwardY() {
        return Math.sin(this.yaw());
    },
    rightX() {
        return -Math.sin(this.yaw());
    },
    rightY() {
        return Math.cos(this.yaw());
    },

    //Calculate the Wish velocity (target velocity)
    wishVelX() {
        return this.forwardX() * KEY_EVENTS.fmove + this.rightX() * KEY_EVENTS.smove;
    },
    wishVelY() {
        return this.forwardY() * KEY_EVENTS.fmove + this.rightY() * KEY_EVENTS.smove;
    },
    wishVelLength() {
        return Math.sqrt(this.wishVelX() * this.wishVelX() + this.wishVelY() * this.wishVelY());
    },

    //Calculate the direction of the velocity (where it is applied)
    wishDirX() {
        return this.wishVelX() / this.wishVelLength() || 0;
    },
    wishDirY() {
        return this.wishVelY() / this.wishVelLength() || 0;
    },

    //Check to not go above max speed (320 units)... We will get to this later...
    wishSpeed() {
        return Math.min(this.wishVelLength(), 320);
    },

    //Calculate Angle of the 
    yaw() {
        const dx = KEY_EVENTS.mouseX - VARIABLES.coordinatesX;
        const dy = VARIABLES.coordinatesY - KEY_EVENTS.mouseY;
        return Math.atan2(dy, dx);  // <- FIXED: no -dx
    }
};