let KEY_EVENTS = {
    escape: false,
    w: false,
    a: false,
    s: false,
    d: false,
    r: false,
    shift: false,
    space: false,
    lmb: false,
    rmb: false
}
document.onkeydown = keyListenerDown;
document.onkeyup = keyListenerUp;
document.onmousedown = mouseListenerDown;
document.onmouseup = mouseListenerUp;


function keyListenerDown(e) {
    if (e.key === "Escape") {
        KEY_EVENTS.escape = true;
    }
    if (e.key === "Shift") {
        KEY_EVENTS.shift = true;
    }
    if (e.key === " ") {
        KEY_EVENTS.space = true;
    }
    if (e.key.toLowerCase() === "w") {
        KEY_EVENTS.w = true;
    }
    if (e.key.toLowerCase() === "a") {
        KEY_EVENTS.a = true;
    }
    if (e.key.toLowerCase() === "s") {
        KEY_EVENTS.s = true;
    }
    if (e.key.toLowerCase() === "d") {
        KEY_EVENTS.d = true;
    }
    if (e.key.toLowerCase() === "r") {
        KEY_EVENTS.r = true;
    }
}

function mouseListenerDown(e) {
    if (e.button == 0) {
        KEY_EVENTS.lmb = true;
    }
    if (e.button == 2) {
        KEY_EVENTS.rmb = true;
    }
}

function keyListenerUp(e) {
    if (e.key === "Escape") {
        KEY_EVENTS.escape = false;
    }
    if (e.key === "Shift") {
        KEY_EVENTS.shift = false;
    }
    if (e.key === " ") {
        KEY_EVENTS.space = false;
    }
    if (e.key.toLowerCase() === "w") {
        KEY_EVENTS.w = false;
    }
    if (e.key.toLowerCase() === "a") {
        KEY_EVENTS.a = false;
    }
    if (e.key.toLowerCase() === "s") {
        KEY_EVENTS.s = false;
    }
    if (e.key.toLowerCase() === "d") {
        KEY_EVENTS.d = false;
    }
    if (e.key.toLowerCase() === "r") {
        KEY_EVENTS.r = false;
    }
}

function mouseListenerUp(e) {
    if (e.button == 0) {
        KEY_EVENTS.lmb = false;
    }
    if (e.button == 2) {
        KEY_EVENTS.rmb = false;
    }
}