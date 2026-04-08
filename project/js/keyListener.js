let KEY_EVENTS = {
    escape: false
}
document.onkeydown = keyListenerDown;
document.onkeyup = keyListenerUp;

function keyListenerDown(e) {
    if (e.key === "Escape") { // Left arrow
        KEY_EVENTS.escape = true;
    }
}
function keyListenerUp(e) {
    if (e.key === "Escape") { // Left arrow
        KEY_EVENTS.escape = false;
    }
}

