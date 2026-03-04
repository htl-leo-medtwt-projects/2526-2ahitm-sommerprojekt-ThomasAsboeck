let VARIABLES = {
    velX: 0,
    velY: 0
}

function startGame() {
    requestAnimationFrame(gameLoop);
}

let lastTime = 0;

function gameLoop(currentTime) {
    const dt = (currentTime - lastTime) / 1000;  // ms → seconds
    lastTime = currentTime;

    //const [newVelX, newVelY] = accelSpeed > 0 ? accelerate(VARIABLES.velX, VARIABLES.velY, VectorMath.wishDirX(), VectorMath.wishdirY(), VectorMath.wishspeed(), 10, 0);
    
    // Use dt in accelerate(velX, velY, ..., dt)
    requestAnimationFrame(gameLoop);
}