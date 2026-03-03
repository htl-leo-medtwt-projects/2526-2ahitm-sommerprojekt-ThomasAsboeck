// VectorMath.js
const VectorMath = {
    
    // Get angle (radians) from player center to mouse
    getAngleToMouse(playerX, playerY, mouseX, mouseY) {
        const dx = mouseX - playerX;
        const dy = mouseY - playerY;
        return Math.atan2(dy, dx) * (180 / Math.PI);
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