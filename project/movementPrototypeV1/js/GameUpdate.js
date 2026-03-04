let VARIABLES = {
    velX: 0,
    velY: 0,
    coordinatesX: 0,
    coordinatesY: 0
}

function startGame() {
    requestAnimationFrame(gameLoop);
}

let lastTime = 0;

function gameLoop(currentTime) {
    const dt = (currentTime - lastTime) / 1000;  // ms → seconds
    lastTime = currentTime;

    let [tempVelX, tempVelY] = accelerate(VARIABLES.velX, VARIABLES.velY, VectorMath.wishDirX(), VectorMath.wishDirY(), VectorMath.wishSpeed(), 10.0, dt);

    VARIABLES.velX = tempVelX;
    VARIABLES.velY = tempVelY;

    VARIABLES.coordinatesX += VARIABLES.velX;
    VARIABLES.coordinatesY += VARIABLES.velY

    document.getElementById("player").style.top = VARIABLES.coordinatesX + "px";
    document.getElementById("player").style.left = VARIABLES.coordinatesY + "px";

    console.log(VARIABLES.velX + "   " + VARIABLES.coordinatesX);

    requestAnimationFrame(gameLoop);
}