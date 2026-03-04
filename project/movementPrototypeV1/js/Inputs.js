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

    //WASD
    if (e.key === "a") {
        KEY_EVENTS.smove =+ 1;
    }
    if (e.key === "w") {
        KEY_EVENTS.fmove =+ 1;
    }
    if (e.key === "d") {
        KEY_EVENTS.smove =+ -1;
    }
    if (e.key === "s") {
        KEY_EVENTS.fmove =+ -1;
    }


    //Set movement back to 0
    if (e.key !== "a"&&e.key !== "d") {
        KEY_EVENTS.smove = 0;
    }
    if (e.key !== "w"&&e.key !== "s") {
        KEY_EVENTS.fmove = 0;
    }


    //Detect Space button
    if (e.key === " ") {
        KEY_EVENTS.keySpace = true;
    }
}

 function keyListenerUp(e) {
    
 }


//Get mouse position
document.addEventListener('mousemove', (e) => {
    KEY_EVENTS.mouseX = e.clientX;
    KEY_EVENTS.mouseY = e.clientY;
});