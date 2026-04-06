function enterLevelSelectFromMainMenu() {
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
    let html = "";
    html = `<div id="settings-container">
                
                <div id="settings-volume-container" class="individuial-settings-container">
                    <div id="settings-volume-title" class="settings-title"></div>
                    <input type="range" min="0" max="100" step="1"value="100">
                </div>

                <div id="settings-music-container" class="individuial-settings-container">
                </div>

                <div id="settings-shaking-container" class="individuial-settings-container">
                </div>

            </div>`;
    document.getElementById("screen").innerHTML = html;   
}