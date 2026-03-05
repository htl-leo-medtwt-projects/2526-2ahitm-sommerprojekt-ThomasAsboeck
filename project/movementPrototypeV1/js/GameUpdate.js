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

    let [tempVelX, tempVelY] = accelerate(VARIABLES.velX, VARIABLES.velY, VectorMath.wishDirX(), VectorMath.wishDirY(), VectorMath.wishSpeed(), 3.0, dt);

    VARIABLES.velX = tempVelX;
    VARIABLES.velY = tempVelY;

    VARIABLES.coordinatesX += VARIABLES.velX;
    VARIABLES.coordinatesY += VARIABLES.velY;

    document.getElementById("player").style.bottom = VARIABLES.coordinatesX + "px";
    document.getElementById("player").style.right = VARIABLES.coordinatesY + "px";

    console.log("=== DEBUG ===");
    console.log("Mouse position:", KEY_EVENTS.mouseX, KEY_EVENTS.mouseY);
    console.log("Player position:", VARIABLES.coordinatesX, VARIABLES.coordinatesY);
    console.log("yaw degrees:", VectorMath.yaw() * 180 / Math.PI);
    console.log("forward:", VectorMath.forwardX(), VectorMath.forwardY());
    console.log("right:", VectorMath.rightX(), VectorMath.rightY());
    console.log("fmove:", KEY_EVENTS.fmove, "smove:", KEY_EVENTS.smove);
    console.log("wishVel:", VectorMath.wishVelX(), VectorMath.wishVelY());
    console.log("wishDir:", VectorMath.wishDirX(), VectorMath.wishDirY());
    console.log("=================");

    console.log(VARIABLES.velX + "   " + VARIABLES.velY + "   " + VectorMath.yaw());

    requestAnimationFrame(gameLoop);
}