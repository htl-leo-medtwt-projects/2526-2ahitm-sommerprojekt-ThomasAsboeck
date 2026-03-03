let KEY_EVENTS = {
    keyUp: false,
    keyDown: false,
    keyLeft: false,
    keyRight: false,
    keySpace: false,
    mouseX: 0,
    mouseY: 0
}

document.onkeydown = keyListenerDown;
document.onkeyup = keyListenerUp;

function keyListenerDown(e) {
    if (e.key === "a") { // Left arrow
        KEY_EVENTS.keyLeft = true;
    }
    if (e.key === "w") { // Up arrow
        KEY_EVENTS.keyUp = true;
    }
    if (e.key === "d") { // Right arrow
        KEY_EVENTS.keyRight = true;
    }
    if (e.key === "s") { // Down arrow
        KEY_EVENTS.keyDown = true;
    }
    if (e.key === " ") {
        KEY_EVENTS.keySpace = true;
    }
}
function keyListenerUp(e) {
    if (e.key === "a") { // Left arrow
        KEY_EVENTS.keyLeft = false;
    }
    if (e.key === "w") { // Up arrow
        KEY_EVENTS.keyUp = false;
    }
    if (e.key === "d") { // Right arrow
        KEY_EVENTS.keyRight = false;
    }
    if (e.key === "s") { // Down arrow
        KEY_EVENTS.keyDown = false;
    }
    if (e.key === " ") {
        KEY_EVENTS.keySpace = false;
    }
}

document.addEventListener('mousemove', (e) => {
    KEY_EVENTS.mouseX = e.clientX;
    KEY_EVENTS.mouseY = e.clientY;
});

const Input = {
    // forward/back relative to mouse
    getForward() {
        return KEY_EVENTS.keyUp ? 1 : 0;
    },
    getBackward() {
        return KEY_EVENTS.keyDown ? 1 : 0;
    },
    getStrafeLeft() {
        return KEY_EVENTS.keyLeft ? 1 : 0;
    },
    getStrafeRight() {
        return KEY_EVENTS.keyRight ? 1 : 0;
    },
    isSpaceDown() {
        return KEY_EVENTS.keySpace;
    },
    getMousePos() {
        return { x: KEY_EVENTS.mouseX, y: KEY_EVENTS.mouseY};
    }
};