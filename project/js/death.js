function death() {
    isPaused = true;
    player.score = player.score * player.kills * (player.timeSurvived / 1000);
    let html = "";
    html = `<div id="deathScreen">
    <div id="deathContainer">
        <h1 id="deathTitle">You Died</h1>
        <div id="deathStats">
            <p>Score: ${Math.floor(player.score)}</p>
            <p>Time Survived: ${Math.floor(player.timeSurvived / 1000)}s</p>
            <p>Kills: ${player.kills}</p>
        </div>
        <div id="restartButton" onclick="startGame()">Play Again</div>
    </div>
    </div>`;
    document.getElementById("screen").innerHTML = html;
    player = {
        difficulty: 1,
        playerX: 0,
        playerY: 0,
        originalHP: 100,
        MaxHp: 100,
        timeSinceDamage: 0,
        hp: 100,
        size: 32,
        coins: 30,
        timeRemaining: 61000,
        isPaused: false,
        score: 0,
        timeSurvived: 0,
        kills: 0,
        currentWeapon: 0
    }
    multipliers = {
        coins: 1,
        speed: 1,
        damage: 1,
        hp: 1,
        regen: 1,
        accuracy: 1,
        bpm: 1
    }

    enemysInWorld = 0;
    enemys = [];
    enemyCounter = 0;

    bulletCooldown = 0;

    bullets = [];
    counter = 0;
    bulletsInWorld = 0;

    closestDistance = 999999999;
    closestEnemy = null;
    closestEnemyID = null;
    aimX = 0;
    aimY = 0;
}