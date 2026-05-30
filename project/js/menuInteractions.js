/*function enterSettingsFromMainMenu() {
    isOnSettingsPage = true;
    let html = "";
    html = `<div id="settings-container">
                
                <div id="settings-volume-container" class="individuial-settings-container">
                    <div id="settings-volume-title" class="settings-title">Volume</div>
                    <input type="range" min="0" max="1" step="0.01" value="1" class="settings-slider" id="settings-volume-slider">
                </div>

                <div id="settings-music-container" class="individuial-settings-container">
                    <div id="settings-music-title" class="settings-title">Music</div>
                    <input type="range" min="0" max="1" step="0.01" value="1" class="settings-slider" id="settings-music-slider">
                </div>

                <div id="settings-resolution-container" class="individual-settings-container">
                    <div id="settings-resolution-title" class="settings-title">Resolution</div>
                </div>
            </div>`;
    document.getElementById("screen").innerHTML = html;
    updateSettings();
}

function enterMainMenu() {
    isOnSettingsPage = false;
    let html = "";
    html = `<div id="main-menu-container">
            <div id="title-main-menu">
                Gears of Blood
            </div>
            <div id="play-story-button-main-menu" class="main-menu-button" onclick="enterStoryFromMainMenu()">
                Play Story
            </div>
            <div id="select-level-button-main-menu" class="main-menu-button" onclick="enterLevelSelectFromMainMenu()">
                Select Level
            </div>
            <div id="play-endless-button-main-menu" class="main-menu-button" onclick="startGame()">
                Play Endless
            </div>
            <div id="tutorial-button-main-menu" class="main-menu-button" onclick="enterTutorialFromMainMenu()">
                Tutorial
            </div>
            <div id="settings-button-main-menu" class="main-menu-button" onclick="enterSettingsFromMainMenu()">
                Settings
            </div>
        </div>`
    document.getElementById("screen").innerHTML = html;
}*/

function startGame() {
    music.stop()
    cancelAnimationFrame(myAnimationFrame);
    let html = "";
    html = `
            <div id="world">
                <div id="background"></div>
            </div>
            <div id="player"></div>`;

    document.getElementById("coinCounter")?.remove();
    document.getElementById("timeRemaining")?.remove();
    document.getElementById("fpsCounter")?.remove();
    document.getElementById("screen").innerHTML = html;
    let coinCounter = document.createElement("div");
    coinCounter.id = "coinCounter";
    document.body.appendChild(coinCounter);

    let timeRemaining = document.createElement("div");
    timeRemaining.id = "timeRemaining";
    document.body.appendChild(timeRemaining);

    let fpsCounter = document.createElement("div");
    fpsCounter.id = "fpsCounter";
    document.body.appendChild(fpsCounter);
    player = {
        difficulty: 1,
        playerX: rng()*57600*-1,
        playerY: rng()*57600*-1,
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

    previousTime = -1;

    isDying = false;

    startShop = true;

    isPaused = false;

    music.play();
    gameLoop(-1);
}