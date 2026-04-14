let previousTime = -1;

function gameLoop(timestamp) {
    let deltaTime;
    let newTime = timestamp;
    if (previousTime === -1) {
        deltaTime = 0;
    }
    else {
        deltaTime = newTime - previousTime;
    }
    previousTime = newTime;

    console.log(KEY_EVENTS);
    

    

    requestAnimationFrame(gameLoop);
}