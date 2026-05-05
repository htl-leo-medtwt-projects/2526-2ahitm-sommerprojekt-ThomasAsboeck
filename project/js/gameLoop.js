let previousTime = -1;
let deltaTime;
let stopTime = false;

function gameLoop(timestamp) {
    if (!stopTime) {
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
        enemyLogic();
        highQualityBulletMath();
    }


    requestAnimationFrame(gameLoop);
}

function pauseGame() {
    stopTime = !stopTime;
}