let player = {
    difficulty: 1,
    playerX: 0,
    playerY: 0,
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
    currentWeapon: 0,
    alreadyShot: false
}

let multipliers = {
    coins: 1,
    speed: 1,
    damage: 1,
    hp: 1,
    regen: 1,
    accuracy: 1,
    bpm: 1
}


function gameLogic() {
    if (!player.isPaused) {
        player.MaxHp = player.originalHP * multipliers.hp;

        if (player.playerX - velocityX * multipliers.speed < 0 && player.playerX - velocityX * multipliers.speed > -3840 + 640) {
            player.playerX -= velocityX * multipliers.speed;
        }
        if (player.playerY - velocityY * multipliers.speed < 0 && player.playerY - velocityY * multipliers.speed > -2160 + 360) {
            player.playerY -= velocityY * multipliers.speed;
        }


        document.getElementById("world").style.left = player.playerX + "px";
        document.getElementById("world").style.bottom = player.playerY + "px";


        if (KEY_EVENTS.lmb) {
            shoot(weapons[player.currentWeapon].speed, weapons[player.currentWeapon].bpm, weapons[player.currentWeapon].spread, weapons[player.currentWeapon].damage, weapons[player.currentWeapon].penetration, weapons[player.currentWeapon].isAuto)
        }
        else {
            player.alreadyShot = false;
        }

        if (bulletsInWorld > 0 && enemysInWorld > 0) {
            for (let i = 0; i < enemys.length; i++) {
                for (let j = 0; j < bullets.length; j++) {
                    if (bullets[j] != null && enemys[i] != null) {
                        if (bulletCollisionEnemy(enemys[i], bullets[j])) {
                            enemys[i].hp -= bullets[j].damage * multipliers.damage;
                            killBullet(j);
                        }
                    }
                }
            }
        }
        for (let i = 0; i < enemys.length; i++) {
            if (enemys[i] != null) {
                let enemyScreenX = enemys[i].enemyX + player.playerX + enemys[i].size/2;
                let enemyScreenY = 360 - (enemys[i].enemyY + player.playerY) - enemys[i].size/2
                let dist = Math.sqrt((enemyScreenX - KEY_EVENTS.mouseX) * (enemyScreenX - KEY_EVENTS.mouseX) + (enemyScreenY - KEY_EVENTS.mouseY) * (enemyScreenY - KEY_EVENTS.mouseY));
                if (enemys[i] == closestEnemy) {
                    closestDistance = dist;
                }
                if (dist < closestDistance) {
                    closestDistance = dist;
                    closestEnemy = enemys[i];
                    closestEnemyID = i;
                }
            }
            else if(i == closestEnemyID) {
                closestDistance = 999999999;
            }
        }
        if (closestEnemy != null) {
            aimX = closestEnemy.enemyX + closestEnemy.size/2;
            aimY = closestEnemy.enemyY + closestEnemy.size/2;
        }
        else {
            aimX = KEY_EVENTS.mouseX
            aimY = KEY_EVENTS.mouseY
        }
        

        player.timeRemaining = player.timeRemaining - deltaTime;

        if (player.timeRemaining / 1000 < 1) {
            player.isPaused = true;
            createShop();
        }

        player.timeSinceDamage += deltaTime;
        player.timeSurvived += deltaTime;

        if (player.hp <= 0) {
            player.isPaused = true;
            death();
        }

        document.getElementById("timeRemaining").innerHTML = Math.floor(player.timeRemaining / 1000);
    }



    document.getElementById("coinCounter").innerHTML = player.coins;
    let fps = 1 / (deltaTime / 1000);
    document.getElementById("fpsCounter").innerHTML = Math.floor(fps) + "FPS";
}

function saveRun() {
    let name = document.getElementById("ign").value;
    let scoreboard = JSON.parse(localStorage.getItem("scoreboard")) || [];
    
    let entry = {
        name: name,
        score: player.score,
        kills: player.kills,
        timeSurvived: Math.floor(player.timeSurvived / 1000)
    }
    
    scoreboard.push(entry);
    scoreboard.sort((a, b) => b.score - a.score);
    localStorage.setItem("scoreboard", JSON.stringify(scoreboard));

    document.getElementById("ign").remove();
    document.getElementById("submitIGN").remove();

    document.getElementById("scoreboard").innerHTML = "";
    for (let i = 0; i < scoreboard.length; i++) {
        const entry = document.createElement("div");
        entry.className = "scoreboardEntry";
        entry.innerHTML = `
            <div class="scoreboardName">${scoreboard[i].name}</div>
            <div class="scoreboardScore">Score: ${Math.floor(scoreboard[i].score)}</div>
            <div class="scoreboardKills">Kills: ${scoreboard[i].kills}</div>
            <div class="scoreboardTimeSurvived">Survived for: ${scoreboard[i].timeSurvived}s</div>`;
        document.getElementById("scoreboard").appendChild(entry);
    }
}

function clearScoreboard() {
    let scoreboard = JSON.parse(localStorage.getItem("scoreboard")) || [];
    scoreboard = [];
    localStorage.setItem("scoreboard", JSON.stringify(scoreboard));
}