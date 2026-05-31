let VARIABLES_MENU = {
    masterVolume: 1,
    musicVolume: 1,
    scale: 4
}

if (localStorage.getItem("master") != null) {
    VARIABLES_MENU.masterVolume = localStorage.getItem("master");
}
if (localStorage.getItem("music") != null) {
    VARIABLES_MENU.musicVolume = localStorage.getItem("music");
}
if (localStorage.getItem("scale") != null) {
    VARIABLES_MENU.scale = localStorage.getItem("scale");
}

document.getElementById("screen").style.transform = `scale(${VARIABLES_MENU.scale})`;

let isOnSettingsPage = false;

function menuLoop() {
    menuLoop()
}

function updateSettings() {
    if (updateSettings) {
        document.getElementById("masterVolumeValue").textContent = document.getElementById("masterVolume").value;

        document.getElementById("musicVolumeValue").textContent = document.getElementById("musicVolume").value;

        VARIABLES_MENU.scale = document.getElementById("resolutionSelect").value;

        if (KEY_EVENTS.escape) {
            enterMainMenu();
            return;
        }
        else if (!isOnSettingsPage) {
            return;
        }
        setTimeout(updateSettings, 100);
    }
}

function applySettings() {
    VARIABLES_MENU.masterVolume = document.getElementById("masterVolume").value / 100;
    VARIABLES_MENU.musicVolume = document.getElementById("musicVolume").value / 100;
    document.getElementById("screen").style.transform = `scale(${VARIABLES_MENU.scale})`;
    localStorage.setItem("master", VARIABLES_MENU.masterVolume);
    localStorage.setItem("music", VARIABLES_MENU.musicVolume);
    localStorage.setItem("scale", VARIABLES_MENU.scale);
    updateSound();
}

let tutPage = 1;
const TUT_PAGES = 3;

function updateTutorial() {
    for (let i = 1; i <= TUT_PAGES; i++) {
        document.getElementById("tutPage" + i).classList.toggle("active", i === tutPage);
    }
    document.getElementById("tutorialPageNum").textContent = tutPage + " / " + TUT_PAGES;
    document.getElementById("tutPrev").classList.toggle("tutDisabled", tutPage === 1);
    document.getElementById("tutNext").classList.toggle("tutDisabled", tutPage === TUT_PAGES);
}

function tutNextPage() {
    tutPage++;
    updateTutorial();
}

function tutPrevPage() {
    tutPage--;
    updateTutorial();
}