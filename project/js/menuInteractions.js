let oldHTML = "";

function enterSettingsFromMainMenu() {
    isOnSettingsPage = true;
    let html = "";
    html = `<div id="settingsScreen">
        <div id="settingsContainer">
            <p id="settingsTitle">SETTINGS</p>
            <div id="settingsContent">

                <div class="settingsRow">
                    <p class="settingsLabel">MASTER VOL</p>
                    <input type="range" class="settingsSlider" id="masterVolume" min="0" max="100" value="${VARIABLES_MENU.masterVolume * 100}">
                    <span class="settingsValue" id="masterVolumeValue">100</span>
                </div>

                <div class="settingsRow">
                    <p class="settingsLabel">MUSIC VOL</p>
                    <input type="range" class="settingsSlider" id="musicVolume" min="0" max="100" value="${VARIABLES_MENU.musicVolume * 100}">
                    <span class="settingsValue" id="musicVolumeValue">100</span>
                </div>

                <div class="settingsRow">
                    <p class="settingsLabel">RESOLUTION</p>
                    <select class="settingsSelect" id="resolutionSelect">
                        <option value="1" id="resolution0">360p</option>
                        <option value="2" id="resolution1">720p</option>
                        <option value="3" id="resolution2">1080p</option>
                        <option value="4" id="resolution3">1440p</option>
                        <option value="6" id="resolution4">4K</option>
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
    for(let i = 0; i < 5; i++) {
        if (document.getElementById("resolution"+i).value == VARIABLES_MENU.scale) {
            let html = "";
            html = `<option value="${VARIABLES_MENU.scale}" id="resolution${i}" selected>${document.getElementById("resolution"+i).innerHTML}</option>`;
            document.getElementById("resolution"+i).outerHTML = html;
        }
    }
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
                    <p class="settingsLabel">MASTER VOL</p>
                    <input type="range" class="settingsSlider" id="masterVolume" min="0" max="100" value="${VARIABLES_MENU.masterVolume * 100}">
                    <span class="settingsValue" id="masterVolumeValue">100</span>
                </div>

                <div class="settingsRow">
                    <p class="settingsLabel">MUSIC VOL</p>
                    <input type="range" class="settingsSlider" id="musicVolume" min="0" max="100" value="${VARIABLES_MENU.musicVolume * 100}">
                    <span class="settingsValue" id="musicVolumeValue">100</span>
                </div>

                <div class="settingsRow">
                    <p class="settingsLabel">RESOLUTION</p>
                    <select class="settingsSelect" id="resolutionSelect">
                        <option value="1" id="resolution0">360p</option>
                        <option value="2" id="resolution1">720p</option>
                        <option value="3" id="resolution2">1080p</option>
                        <option value="4" id="resolution3">1440p</option>
                        <option value="6" id="resolution4">4K</option>
                    </select>
                </div>

            </div>
            <div id="settingsButtonRow">
                <div class="settingsButton" id="settingsBack" onclick="returnToGame()">BACK</div>
                <div class="settingsButton" id="settingsApply" onclick="applySettings()">APPLY</div>
            </div>
        </div>`;
    document.getElementById("settingsScreen").innerHTML = html;
    for(let i = 0; i < 5; i++) {
        if (document.getElementById("resolution"+i).value == VARIABLES_MENU.scale) {
            let html = "";
            html = `<option value="VARIABLES_MENU.scale" id="resolution${i}" selected>${document.getElementById("resolution"+i).innerHTML}</option>`;
            document.getElementById("resolution"+i).outerHTML = html;
        }
    }
    updateSettings();
}

function returnToGame() {
    document.getElementById("settingsScreen").remove();
}

function enterTutorialFromMainMenu() {
    let html = "";
    html = `<div id="tutorialScreen">
                <div id="tutorialContainer">

                    <div id="tutorialHeader">
                        <p id="tutorialTitle">HOW TO PLAY</p>
                        <span id="tutorialPageNum">1 / 3</span>
                    </div>

                    <div class="tutPage" id="tutPage1">
                        <p class="tutSection">MOVEMENT</p>
                        <div id="tutMovementLayout">
                            <div id="wasdGrid">
                                <div></div><span class="key">W</span><div></div>
                                <span class="key">A</span><span class="key">S</span><span class="key">D</span>
                            </div>
                            <div class="tutLines">
                                <p class="tutLine"><span class="tutAcc">W</span> MOVE TOWARD MOUSE</p>
                                <p class="tutLine"><span class="tutAcc">S</span> MOVE AWAY FROM MOUSE</p>
                                <p class="tutLine"><span class="tutAcc">A</span> STRAFE LEFT</p>
                                <p class="tutLine"><span class="tutAcc">D</span> STRAFE RIGHT</p>
                                <p class="tutLine"><span class="tutAcc">SHIFT</span> LOCK MOVE DIRECTION</p>
                            </div>
                        </div>
                    </div>

                    <div class="tutPage" id="tutPage2">
                        <p class="tutSection">COMBAT</p>
                        <div class="tutLines">
                            <p class="tutLine">YOUR GUN ALWAYS AIMS AT</p>
                            <p class="tutLine">THE ENEMY CLOSEST TO</p>
                            <p class="tutLine">YOUR CURSOR</p>
                            <br>
                            <p class="tutLine"><span class="tutAcc">LMB</span> SHOOT</p>
                            <br>
                            <p class="tutLine tutMuted">TIP: POSITION YOUR CURSOR</p>
                            <p class="tutLine tutMuted">TO CONTROL WHICH ENEMY</p>
                            <p class="tutLine tutMuted">YOU TARGET</p>
                        </div>
                    </div>

                    <div class="tutPage" id="tutPage3">
                        <p class="tutSection">WAVES</p>
                        <div class="tutLines">
                            <p class="tutLine">EACH WAVE LASTS <span class="tutAcc">60 SECONDS</span></p>
                            <p class="tutLine">SURVIVE TO EARN COINS</p>
                            <br>
                            <p class="tutLine">AFTER EACH WAVE YOU CAN</p>
                            <p class="tutLine">BUY NEW <span class="tutAcc">WEAPONS</span> AND</p>
                            <p class="tutLine"><span class="tutAcc">UPGRADES</span> IN THE SHOP</p>
                            <br>
                            <p class="tutLine">EACH WAVE SPAWNS MORE</p>
                            <p class="tutLine">AND STRONGER ENEMIES</p>
                        </div>
                    </div>

                    <div id="tutorialNav">
                        <div class="tutorialButton tutDisabled" id="tutPrev" onclick="tutPrevPage()">&#8592; PREV</div>
                        <div class="tutorialButton" id="tutClose" onclick="enterMainMenu()">CLOSE</div>
                        <div class="tutorialButton" id="tutNext" onclick="tutNextPage()">NEXT &#8594;</div>
                    </div>

                </div>
            </div>`;
    document.getElementById("screen").innerHTML = html;
    updateTutorial();
}

function enterMainMenu() {
    music.stop();
    stopTime = false;
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
                <div id="play-endless-button-main-menu" class="main-menu-button" onclick="startGame()">
                    Play Endless
                </div>
                <div id="tutorial-button-main-menu" class="main-menu-button" onclick="enterTutorialFromMainMenu()">
                    Tutorial
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