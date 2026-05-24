let previousTime = -1;
let deltaTime;
let stopTime = false;
let myAnimationFrame;
let toggleEscape = true;
let startShop = true;

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

    if (KEY_EVENTS.escape&&toggleEscape) {
        toggleEscape = false;
        pauseGame();
    }
    else if (!KEY_EVENTS.escape) {
        toggleEscape = true;
    }
    if (startShop) {
        player.isPaused = true;
        createShop();
    }
    

    myAnimationFrame = requestAnimationFrame(gameLoop);
}

function pauseGame() {
    previousTime = -1;
    stopTime = !stopTime;
}