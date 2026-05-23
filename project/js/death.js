function death() {
    isPaused = true;
    player.score = player.score * player.kills * (player.timeSurvived / 1000);
    let scoreboard = JSON.parse(localStorage.getItem("scoreboard")) || [];
    let html = "";
    html = `<div id="deathScreen">
    <div id="deathContainer">
        <h1 id="deathTitle">You Died</h1>
        <div id="deathStats">
            <p>Score: ${Math.floor(player.score)}</p>
            <p>Time Survived: ${Math.floor(player.timeSurvived / 1000)}s</p>
            <p>Kills: ${player.kills}</p>
        </div>
        <div id="restartButton" onclick="startGame()">Play Again</div>
    </div>
    <div id="scoreboardContainer">
        <div id="inputContainer">
            <input type="text" id="ign" name="ign">
            <div id="submitIGN" onclick="saveRun()">Save</div>
        </div>
        <div id="scoreboard">

        </div>
    </div>
    </div>`;
    document.getElementById("screen").innerHTML = html;
    document.getElementById("scoreboard").innerHTML = "";
    for (let i = 0; i < scoreboard.length; i++) {
        const entry = document.createElement("div");
        entry.className = "scoreboardEntry";
        entry.innerHTML = `
            <div class="scoreboardName">${scoreboard[i].name}</div>
            <div class="scoreboardScore">${Math.floor(scoreboard[i].score)}</div>
            <div class="scoreboardKills">${scoreboard[i].kills}</div>
            <div class="scoreboardTimeSurvived">${scoreboard[i].timeSurvived}</div>`;
        document.getElementById("scoreboard").appendChild(entry);
    }
}