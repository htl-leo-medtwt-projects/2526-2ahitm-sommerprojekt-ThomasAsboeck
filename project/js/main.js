VARIABLES_MENU = {
    volume: 0,
    music: 0
}

const music = new Audio('./music/music.mp3');
const sfx = new Audio('./sfx/sfx.mp3');

let isOnSettingsPage = false;

function menuLoop() {

    menuLoop()   
}

function updateSettings() {
        VARIABLES_MENU.volume = document.getElementById("settings-volume-slider").value;
        VARIABLES_MENU.music = document.getElementById("settings-music-slider").value;

        sfx.volume = 1*VARIABLES_MENU.volume;
        music.volume = (0.25*VARIABLES_MENU.music)*VARIABLES_MENU.volume;
        setTimeout(updateSettings, 100);
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