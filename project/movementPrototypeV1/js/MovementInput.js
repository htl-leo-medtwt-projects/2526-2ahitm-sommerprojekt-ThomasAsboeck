class MovementInput {
    constructor(canvas) {
        this.canvas = canvas;
    }

    getForward() {
        return KEY_EVENTS.keyUp ? 1 : 0;
    }
    getBackward() {
        return KEY_EVENTS.keyDown ? 1 : 0;
    }
    getStrafeLeft() {
        return KEY_EVENTS.keyLeft ? 1 : 0;
    }
    getStrafeRight() {
        return KEY_EVENTS.keyRight ? 1 : 0;
    }

    getMouseWorldPos(playerPos) {
        // Convert screen mouse to world coords (if your world != screen pixels)
        // For now assume 1:1, adjust later if you have camera/scale
        return { 
            x: MOUSE.x, 
            y: MOUSE.y 
        };
    }
}