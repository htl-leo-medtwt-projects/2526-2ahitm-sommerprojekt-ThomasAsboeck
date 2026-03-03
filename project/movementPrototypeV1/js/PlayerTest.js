let playerX = 400;
let playerY = 300;
let speed = 200;

function updatePlayer(dt) {
    // Get mouse direction (forward)
    const forwardDir = VectorMath.getDirToMouse(playerX, playerY, KEY_EVENTS.mouseX, KEY_EVENTS.mouseY);
    
    // Strafe direction (perpendicular to forward)
    const strafeDir = VectorMath.getStrafeDir(forwardDir.x, forwardDir.y);
    
    // Input amounts (simple 0 or 1 for now)
    const forwardAmount  = KEY_EVENTS.keyUp    ? 1 : 0;
    const backwardAmount = KEY_EVENTS.keyDown  ? 1 : 0;
    const strafeRight    = KEY_EVENTS.keyRight ? 1 : 0;
    const strafeLeft     = KEY_EVENTS.keyLeft  ? 1 : 0;
    
    // Combine into total movement direction
    const moveX = forwardDir.x * (forwardAmount - backwardAmount) + strafeDir.x * (strafeRight - strafeLeft);
    const moveY = forwardDir.y * (forwardAmount - backwardAmount) + strafeDir.y * (strafeRight - strafeLeft);
    
    // Move!
    const moveLen = Math.hypot(moveX, moveY);
    if (moveLen > 0) {
        playerX += (moveX / moveLen) * speed * dt;
        playerY += (moveY / moveLen) * speed * dt;
    }
    
    // Update position
    document.getElementById('player').style.left = (playerX - 25) + 'px';
    document.getElementById('player').style.top  = (playerY - 25) + 'px';
}