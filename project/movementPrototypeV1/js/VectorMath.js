// VectorMath.js
const VectorMath = {

    // Get angle (radians) from player center to mouse
    yaw() {
        const Coordinates = {
            playerX: 0,
            playerY: 0,
            mouseX: KEY_EVENTS.mouseX,
            mouseY: KEY_EVENTS.mouseY
        }
        const dx = Coordinates.mouseX - Coordinates.playerX;
        const dy = Coordinates.mouseY - Coordinates.playerY;
        return Math.atan2(dy, dx);
    },


    forwardX() {
        return Math.cos(yaw());
    },
    forwardY() {
        return Math.sin(yaw());
    },
    rightX() {
        return Math.sin(yaw());
    },
    rightY() {
        return -Math.cos(yaw());
    },

    wishVelX() {
        return forwardX() * KEY_EVENTS.fmove + rightX() * KEY_EVENTS.smove;
    },
    wishVelY() {
        return forwardY() * KEY_EVENTS.fmove + rightY() * KEY_EVENTS.smove;
    },
    wishVelLength() {
        return Math.sqrt(wishVelX() * wishVelX() + wishVelY() * wishVelY());
    },

    wishDirX() {
        return wishVelX() / wishVelLength() || 0;
    },
    wishDirY() {
        return wishVelY() / wishVelLength() || 0;
    },
    wishSpeed() {
        return Math.min(wishVelLength(), 320)
    },

    // Get normalized direction vector from player to mouse
    getDirToMouse(playerX, playerY, mouseX, mouseY) {
        const dx = mouseX - playerX;
        const dy = mouseY - playerY;
        const len = Math.hypot(dx, dy);

        if (len === 0) return { x: 0, y: 0 };

        return {
            x: dx / len,
            y: dy / len
        };
    },

    // Get perpendicular (strafe) direction (rotate 90° CCW)
    getStrafeDir(dirX, dirY) {
        return { x: -dirY, y: dirX };
    }
};