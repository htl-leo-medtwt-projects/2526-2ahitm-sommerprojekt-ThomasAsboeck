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

    if (KEY_EVENTS.escape && toggleEscape) {
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
    if (stopTime) {
        music.volume(0.4 * VARIABLES_MENU.masterVolume * VARIABLES_MENU.musicVolume);
        music.play();
        document.getElementById("pauseScreen").remove();
    }
    else {
        music.volume(0.1 * VARIABLES_MENU.masterVolume * VARIABLES_MENU.musicVolume);
        let pauseScreen = document.createElement("div");
        pauseScreen.id = "pauseScreen";
        document.getElementById("screen").appendChild(pauseScreen);
        let html = "";
        html = `
                    <div id="pauseContainer">
                        <p id="pauseTitle">PAUSED</p>
                        <div id="pauseButtonContainer">
                            <div class="pauseButton" id="pauseResume" onclick="pauseGame()">RESUME</div>
                            <div class="pauseButton" id="pauseSettings" onclick="enterSettingsFromGame()">SETTINGS</div>
                            <div class="pauseButton" id="pauseMainMenu" onclick="enterMainMenu()">MAIN MENU</div>
                        </div>
                    </div>`;
        document.getElementById("pauseScreen").innerHTML = html;
    }
    previousTime = -1;
    stopTime = !stopTime;
}