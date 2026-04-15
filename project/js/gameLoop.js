let previousTime = -1;
let deltaTime;

function gameLoop(timestamp) {
    let newTime = timestamp;
    if (previousTime === -1) {
        deltaTime = 0;
    }
    else {
        deltaTime = newTime - previousTime;
    }
    previousTime = newTime;
    
    movementCalculations();
    gameLogic();
    highQualityBulletMath();

    requestAnimationFrame(gameLoop);
}