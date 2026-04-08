function enterLevelSelectFromMainMenu() {
    isOnSettingsPage = false;
    let html = "";
    html = `<div id="level-select-container">

                <div id="level-1-container" class="level-container">
                    <div id="level-1-preview" class="level-preview-container"></div>
                    <div id="level-1-button" class="level-button-container">Play</div>
                </div>
                
                <div id="level-2-container" class="level-container">
                    <div id="level-2-preview" class="level-preview-container"></div>
                    <div id="level-2-button" class="level-button-container"></div>
                </div>

                <div id="level-3-container" class="level-container">
                    <div id="level-3-preview" class="level-preview-container"></div>
                    <div id="level-3-button" class="level-button-container"></div>
                </div>

            </div>`;
    document.getElementById("screen").innerHTML = html;
}

function enterSettingsFromMainMenu() {
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

                <div id="settings-shaking-container" class="individuial-settings-container">
                    <div id="settings-shaking-title" class="settings-title">Shaking</div>
                    <div id="settings-shaking-toggle" class="settings-toggle"></div>
                </div>

                <div id="settings-sand-container" class="individuial-settings-container">
                    <div id="settings-sand-title" class="settings-title">Toggle of death</div>
                    <div id="settings-sand-toggle" class="settings-toggle"></div>
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
            <div id="play-endless-button-main-menu" class="main-menu-button" onclick="enterEndlessFromMainMenu()">
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
}