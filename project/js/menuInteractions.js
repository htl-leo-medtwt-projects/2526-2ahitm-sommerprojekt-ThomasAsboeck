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

            </div>`;
    document.getElementById("screen").innerHTML = html;   
    updateSettings();
}