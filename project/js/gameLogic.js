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
    alreadyShot: false,
    status: 0
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

let currentFrame = 0;
let frameTimer = 0;
let maxFrames = 4;
let isShooting = false;
let isDying = false;
let timePerFrame = 150;
let angle;

function gameLogic() {
    if (!player.isPaused) {
        if (!isDying) {
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
            for (let i = 0; i < enemys.length; i++) {
                if (enemys[i] != null && enemys[i].status != 3) {
                    let enemyScreenX = enemys[i].enemyX + player.playerX + enemys[i].size / 2;
                    let enemyScreenY = 360 - (enemys[i].enemyY + player.playerY) - enemys[i].size / 2
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
                else if (i == closestEnemyID) {
                    closestDistance = 999999999;
                }
            }
            if (closestEnemy != null) {
                aimX = closestEnemy.enemyX + closestEnemy.size / 2;
                aimY = closestEnemy.enemyY + closestEnemy.size / 2;
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

            if (player.hp <= 0) {
                currentFrame = -1;
                isDying = true;
            }

            player.timeSinceDamage += deltaTime;
            player.timeSurvived += deltaTime;

        }


        if (bulletsInWorld > 0 && enemysInWorld > 0) {
            for (let i = 0; i < enemys.length; i++) {
                for (let j = 0; j < bullets.length; j++) {
                    if (bullets[j] != null && enemys[i] != null) {
                        if (bulletCollisionEnemy(enemys[i], bullets[j])) {
                            enemys[i].hp -= bullets[j].damage * multipliers.damage;
                            hitSound.rate(0.8 + rng() * 0.4);
                            hitSound.play();
                            killBullet(j);
                        }
                    }
                }
            }
        }

        if (player.hp <= 0 && !isDying) {
            currentFrame = -1;
            isDying = true;
        }

        player.timeSinceDamage += deltaTime;
        player.timeSurvived += deltaTime;

        if (isDying) {
            timePerFrame = 500;
            player.status = 3;
            maxFrames = 4;
        }
        else if (isShooting) {
            angle = Math.atan2(bulletForwardY, bulletForwardX);
            timePerFrame = 50;
            player.status = 2;
            maxFrames = 4;
        }
        else if (velocityX == 0 && velocityY == 0) {
            angle = Math.atan2(forwardY, forwardX);
            timePerFrame = 150;
            player.status = 0;
            maxFrames = 2;
        }
        else if (velocityX != 0 || velocityY != 0) {
            angle = Math.atan2(forwardY, forwardX);
            timePerFrame = 150;
            player.status = 1;
            maxFrames = 4;
        }


        if (frameTimer >= timePerFrame) {
            currentFrame++;
            if (currentFrame >= maxFrames && !isDying) {
                currentFrame = 0;
            }
            document.getElementById("player").style.backgroundImage = `url(./img/sprites/Player/${player.status}.png)`;
            document.getElementById("player").style.backgroundSize = `${32 * maxFrames}px 128px`;
            document.getElementById("player").style.backgroundPositionX = -(currentFrame * 32) + "px";
            frameTimer = 0;
            if (isDying && currentFrame >= maxFrames) {
                player.isPaused = true;
                death();
            }
            if (isShooting && currentFrame >= maxFrames - 1) {
                isShooting = false;
            }
            if (angle > -Math.PI / 4 && angle <= Math.PI / 4) {
                document.getElementById("player").style.backgroundPositionY = `-64px`;
            } else if (angle > Math.PI / 4 && angle <= 3 * Math.PI / 4) {
                document.getElementById("player").style.backgroundPositionY = `0px`;
            } else if (angle > -3 * Math.PI / 4 && angle <= -Math.PI / 4) {
                document.getElementById("player").style.backgroundPositionY = `-32px`;
            } else {
                document.getElementById("player").style.backgroundPositionY = `-96px`;
            }
        }
        frameTimer += deltaTime;
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