let previousTime = -1;
let deltaTime;
let stopTime = false;
let myAnimationFrame;

function gameLoop(timestamp) {
    if (!stopTime) {
        let newTime = timestamp;
        if (previousTime === -1) {
            deltaTime = 0;
            myAnimationFrame = null;
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

    console.log(deltaTime);
    myAnimationFrame = requestAnimationFrame(gameLoop);
}

function pauseGame() {
    stopTime = !stopTime;
}