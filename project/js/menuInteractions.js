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