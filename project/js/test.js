let KEY_EVENTS = {
    keyUp: false,
    keyDown: false,
    keyLeft: false,
    keyRight: false
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
}
