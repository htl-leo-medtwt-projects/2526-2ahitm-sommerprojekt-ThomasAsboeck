let lastTime = performance.now();

function startGame() {
    gameLoop();
}

function gameLoop() {
    const now = performance.now();
    const dt = Math.min((now - lastTime) / 1000, 0.05);  // cap dt
    lastTime = now;
    
    updatePlayer(dt);  // ← add this
    
    // Your existing render code here...
    
    requestAnimationFrame(gameLoop);
}