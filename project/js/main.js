let VARIABLES_MENU = {
    masterVolume: 0,
    musicVolume: 0,
    isShaking: true,
    isSandy: false
}

let isOnSettingsPage = false;

function menuLoop() {

    menuLoop()
}

function updateSettings() {
    if (updateSettings) {
        VARIABLES_MENU.volume = document.getElementById("settings-volume-slider").value;
        VARIABLES_MENU.music = document.getElementById("settings-music-slider").value;

        sfx.volume = 1 * VARIABLES_MENU.volume;
        music.volume = (0.25 * VARIABLES_MENU.music) * VARIABLES_MENU.volume;

        if(KEY_EVENTS.escape) {
            enterMainMenu();
            return;
        }

        setTimeout(updateSettings, 100);
    }
}

function shakeToggle() {

}

function playTestMusic() {
    music.play();
}

function stopTestMusic() {
    music.pause();
}

function playTestSfx() {
    sfx.play();
}

function stopTestSfx() {
    sfx.pause();
}