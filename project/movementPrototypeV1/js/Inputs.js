let KEY_EVENTS = {
    fmove: 0,
    smove: 0,
    keySpace: 0,
    mouseX: 0,
    mouseY: 0
}

document.onkeydown = keyListenerDown;
document.onkeyup = keyListenerUp;

function keyListenerDown(e) {
    if (e.key === "a") { // Left arrow
        KEY_EVENTS.smove =+ 1;
    }
    if (e.key === "w") { // Up arrow
        KEY_EVENTS.fmove =+ 1;
    }
    if (e.key === "d") { // Right arrow
        KEY_EVENTS.smove =+ -1;
    }
    if (e.key === "s") { // Down arrow
        KEY_EVENTS.fmove =+ -1;
    }

    if (e.key !== "a"&&e.key !== "d") {
        KEY_EVENTS.smove = 0;
    }
    if (e.key !== "w"&&e.key !== "s") {
        KEY_EVENTS.fmove = 0;
    }

    if (e.key === " ") {
        KEY_EVENTS.keySpace = true;
    }
}

document.addEventListener('mousemove', (e) => {
    KEY_EVENTS.mouseX = e.clientX;
    KEY_EVENTS.mouseY = e.clientY;
});