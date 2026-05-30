let oldHTML = "";

function enterSettingsFromMainMenu() {
    isOnSettingsPage = true;
    let html = "";
    html = `<div id="settingsScreen">
        <div id="settingsContainer">
            <p id="settingsTitle">SETTINGS</p>
            <div id="settingsContent">

                <div class="settingsRow">
                    <label class="settingsLabel">MASTER VOL</label>
                    <input type="range" class="settingsSlider" id="masterVolume" min="0" max="100" value="${VARIABLES_MENU.masterVolume * 100}">
                    <span class="settingsValue" id="masterVolumeValue">100</span>
                </div>

                <div class="settingsRow">
                    <label class="settingsLabel">MUSIC VOL</label>
                    <input type="range" class="settingsSlider" id="musicVolume" min="0" max="100" value="${VARIABLES_MENU.musicVolume * 100}">
                    <span class="settingsValue" id="musicVolumeValue">100</span>
                </div>

                <div class="settingsRow">
                    <label class="settingsLabel">RESOLUTION</label>
                    <select class="settingsSelect" id="resolutionSelect">
                        <option value="1">360p</option>
                        <option value="2">720p</option>
                        <option value="3">1080p</option>
                        <option value="4" selected>1440p</option>
                        <option value="6">4K</option>
                    </select>
                </div>

            </div>
            <div id="settingsButtonRow">
                <div class="settingsButton" id="settingsBack" onclick="enterMainMenu()">BACK</div>
                <div class="settingsButton" id="settingsApply" onclick="applySettings()">APPLY</div>
            </div>
        </div>
    </div>`;
    document.getElementById("screen").innerHTML = html;
    updateSettings();
}

function enterSettingsFromGame() {
    music.stop();
    oldHTML = document.getElementById("screen").innerHTML;
    isOnSettingsPage = true;
    let settingsScreen = document.createElement("div");
    settingsScreen.id = "settingsScreen";
    document.getElementById("screen").appendChild(settingsScreen);
    let html = "";
    html = `<div id="settingsContainer">
            <p id="settingsTitle">SETTINGS</p>
            <div id="settingsContent">

                <div class="settingsRow">
                    <label class="settingsLabel">MASTER VOL</label>
                    <input type="range" class="settingsSlider" id="masterVolume" min="0" max="100" value="${VARIABLES_MENU.masterVolume * 100}">
                    <span class="settingsValue" id="masterVolumeValue">100</span>
                </div>

                <div class="settingsRow">
                    <label class="settingsLabel">MUSIC VOL</label>
                    <input type="range" class="settingsSlider" id="musicVolume" min="0" max="100" value="${VARIABLES_MENU.musicVolume * 100}">
                    <span class="settingsValue" id="musicVolumeValue">100</span>
                </div>

                <div class="settingsRow">
                    <label class="settingsLabel">RESOLUTION</label>
                    <select class="settingsSelect" id="resolutionSelect">
                        <option value="1">360p</option>
                        <option value="2">720p</option>
                        <option value="3">1080p</option>
                        <option value="4" selected>1440p</option>
                        <option value="6">4K</option>
                    </select>
                </div>

            </div>
            <div id="settingsButtonRow">
                <div class="settingsButton" id="settingsBack" onclick="returnToGame()">BACK</div>
                <div class="settingsButton" id="settingsApply" onclick="applySettings()">APPLY</div>
            </div>
        </div>`;
    document.getElementById("settingsScreen").innerHTML = html;
    updateSettings();
}

function returnToGame() {
    document.getElementById("settingsScreen").remove();
}

function enterMainMenu() {
    music.stop();
    document.getElementById("coinCounter")?.remove();
    document.getElementById("timeRemaining")?.remove();
    document.getElementById("fpsCounter")?.remove();
    document.getElementById("hpCounter")?.remove();
    isOnSettingsPage = false;
    let html = "";
    html = `<div id="main-menu-container">
            <div id="title-main-menu">
                Gears of Blood
            </div>
            <div id="main-menu-button-container">
                <div id="play-story-button-main-menu" class="main-menu-button" onclick="enterStoryFromMainMenu()">
                    Not working!
                </div>
                <div id="select-level-button-main-menu" class="main-menu-button"
                    onclick="enterLevelSelectFromMainMenu()">
                    Not working!
                </div>
                <div id="play-endless-button-main-menu" class="main-menu-button" onclick="startGame()">
                    Play Endless
                </div>
                <div id="tutorial-button-main-menu" class="main-menu-button" onclick="enterTutorialFromMainMenu()">
                    Not working!
                </div>
                <div id="settings-button-main-menu" class="main-menu-button" onclick="enterSettingsFromMainMenu()">
                    Settings
                </div>
            </div>
        </div>`
    document.getElementById("screen").innerHTML = html;
}

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
    document.getElementById("hpCounter")?.remove();
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

    let hpCounter = document.createElement("div");
    hpCounter.id = "hpCounter";
    document.body.appendChild(hpCounter);

    player = {
        difficulty: 1,
        playerX: rng() * 57600 * -1,
        playerY: rng() * 57600 * -1,
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