let enemysInWorld = 0;
let enemys = [];
let enemyCounter = 0;

function addEnemy() {
    let element = document.createElement("div");
    element.className = "enemy";
    element.id = "enemy" + enemyCounter;

    let enemy = {
        hp: 100,
        damage: 10,
        cooldown: 0,
        enemyX: Math.floor(rng() * (3200)) + 304,
        enemyY: Math.floor(rng() * (1800)) + 164,
        enemyOldX: 0,
        enemyOldY: 0,
        speed: 0.32 * (1 + rng() * 0.1),
        size: 32,
        enemyDirectionX: 0,
        enemyDirectionY: 0,
        enemySpeedX: 0,
        enemySpeedY: 0,
        targetLength: 0,
        frameTimer: 0,
        currentFrame: 0,
        maxFrames: 0,
        timePerFrame: 0,
        status: 0,
        angle: 0,
        element: element
    }
    enemys.push(enemy);
    document.getElementById("world")?.appendChild(element);
    document.getElementById("enemy" + enemyCounter).style.width = enemys[enemyCounter].size + "px";
    document.getElementById("enemy" + enemyCounter).style.height = enemys[enemyCounter].size + "px";
    enemyCounter++;
    enemysInWorld++;
}

function enemyLogic() {
    if (!player.isPaused) {
        if (enemysInWorld < 5 * player.difficulty) {
            addEnemy();
        }

        for (let i = 0; i < enemys.length; i++) {
            if (enemys[i] != null && enemys[i].hp <= 0) {
                killEnemy(i);
            }
        }
        for (let i = 0; i < enemys.length; i++) {
            if (enemys[i] != null && enemys[i].status != 3) {
                let blockedX = false;
                let blockedY = false;
                enemys[i].enemyOldX = enemys[i].enemyX;
                enemys[i].enemyOldY = enemys[i].enemyY;
                enemyMovement(enemys[i]);
                enemys[i].enemyX += enemys[i].enemySpeedX;
                for (let j = 0; j < enemys.length; j++) {
                    if (enemys[j] != null && i != j) {
                        if (EnemyCollisionEnemy(enemys[i], enemys[j])) {
                            enemys[i].enemyX = enemys[i].enemyOldX;
                            blockedX = true;
                        }
                    }
                }
                enemys[i].enemyY += enemys[i].enemySpeedY;
                for (let j = 0; j < enemys.length; j++) {
                    if (enemys[j] != null && i != j) {
                        if (EnemyCollisionEnemy(enemys[i], enemys[j])) {
                            enemys[i].enemyY = enemys[i].enemyOldY;
                            blockedY = true;
                        }
                    }
                }
                enemys[i].element.style.left = enemys[i].enemyX + "px";
                enemys[i].element.style.bottom = enemys[i].enemyY + "px";
                enemys[i].element.style.filter = "drop-shadow(0 0 0 #000000)";
                if (enemys[i].cooldown <= 0 && enemys[i].targetLength <= 3) {
                    enemys[i].status = 2;
                    player.hp = player.hp - enemys[i].damage;
                    player.timeSinceDamage = 0;
                    enemys[i].cooldown = 500;
                }

                enemys[i].cooldown = enemys[i].cooldown - deltaTime;

                if (enemys[i].status == 2) {
                    enemys[i].angle = Math.atan2(enemys[i].enemyDirectionY, enemys[i].enemyDirectionX);
                    enemys[i].timePerFrame = 500 / 8;
                    enemys[i].maxFrames = 8;
                }
                else if (enemys[i].enemySpeedX == 0 && enemys[i].enemySpeedY == 0) {
                    enemys[i].angle = Math.atan2(enemys[i].enemyDirectionY, enemys[i].enemyDirectionX);
                    enemys[i].timePerFrame = 150;
                    enemys[i].status = 0;
                    enemys[i].maxFrames = 5;
                }
                else if (enemys[i].enemySpeedX != 0 || enemys[i].enemySpeedY != 0) {
                    enemys[i].angle = Math.atan2(enemys[i].enemyDirectionY, enemys[i].enemyDirectionX);
                    enemys[i].timePerFrame = 150;
                    enemys[i].status = 1;
                    enemys[i].maxFrames = 10;
                }


                if (enemys[i].frameTimer >= enemys[i].timePerFrame) {
                    enemys[i].currentFrame++;
                    if (enemys[i].currentFrame >= enemys[i].maxFrames) {
                        enemys[i].currentFrame = 0;
                    }
                    enemys[i].element.style.backgroundImage = `url(./img/sprites/Zombie/${enemys[i].status}.png)`;
                    enemys[i].element.style.backgroundSize = `${32 * enemys[i].maxFrames}px 128px`;
                    enemys[i].element.style.backgroundPositionX = -(enemys[i].currentFrame * 32) + "px";
                    enemys[i].frameTimer = 0;
                    if (enemys[i].status == 2 && enemys[i].currentFrame >= enemys[i].maxFrames - 1) {
                        enemys[i].status = -1;
                    }
                    if (enemys[i].angle > -Math.PI / 4 && enemys[i].angle <= Math.PI / 4) {
                        enemys[i].element.style.backgroundPositionY = `-64px`;
                    } else if (enemys[i].angle > Math.PI / 4 && enemys[i].angle <= 3 * Math.PI / 4) {
                        enemys[i].element.style.backgroundPositionY = `-32px`;
                    } else if (enemys[i].angle > -3 * Math.PI / 4 && enemys[i].angle <= -Math.PI / 4) {
                        enemys[i].element.style.backgroundPositionY = `0px`;
                    } else {
                        enemys[i].element.style.backgroundPositionY = `-96px`;
                    }
                }
                enemys[i].frameTimer += deltaTime;
            }
            else if (enemys[i] != null) {
                if (enemys[i].frameTimer >= 150) {
                    enemys[i].currentFrame++;
                    if (enemys[i].currentFrame >= 7) {
                        enemys[i] = null;
                        document.getElementById(`enemy${i}`).remove();
                        enemysInWorld--;
                    }
                    else {
                        enemys[i].element.style.backgroundImage = `url(./img/sprites/Zombie/${enemys[i].status}.png)`;
                        enemys[i].element.style.backgroundSize = `${32 * 7}px 128px`;
                        enemys[i].element.style.backgroundPositionX = -(enemys[i].currentFrame * 32) + "px";
                        enemys[i].frameTimer = 0;
                        if (enemys[i].angle > -Math.PI / 4 && enemys[i].angle <= Math.PI / 4) {
                            enemys[i].element.style.backgroundPositionY = `-64px`;
                        } else if (enemys[i].angle > Math.PI / 4 && enemys[i].angle <= 3 * Math.PI / 4) {
                            enemys[i].element.style.backgroundPositionY = `-32px`;
                        } else if (enemys[i].angle > -3 * Math.PI / 4 && enemys[i].angle <= -Math.PI / 4) {
                            enemys[i].element.style.backgroundPositionY = `0px`;
                        } else {
                            enemys[i].element.style.backgroundPositionY = `-96px`;
                        }
                    }

                }
                if (enemys[i] != null) {
                    enemys[i].frameTimer += deltaTime;
                }


            }
        }
        if (closestEnemyID != null && document.getElementById("enemy" + closestEnemyID)) {
            enemys[closestEnemyID].element.style.filter = "drop-shadow(0px 0px 10px #ff0000)";
        }
    }
}


function killEnemy(i) {
    if (document.getElementById(`enemy${i}`) && enemys[i].status != 3) {
        player.kills++;
        addedPoints = multipliers.coins * Math.ceil(rng() * 3);
        player.coins += addedPoints;
        player.score += addedPoints;
        enemys[i].currentFrame = -1;
        enemys[i].status = 3;
    }
}

function enemyMovement(enemy) {
    enemy.enemySpeedX = 0;
    enemy.enemySpeedY = 0;

    let playerX = player.playerX * -1 + 304;
    let playerY = player.playerY * -1 + 164;

    enemy.enemyDirectionX = playerX - enemy.enemyX;
    enemy.enemyDirectionY = playerY - enemy.enemyY;

    let length = Math.sqrt(enemy.enemyDirectionX * enemy.enemyDirectionX + enemy.enemyDirectionY * enemy.enemyDirectionY);

    if (length != 0) {
        enemy.enemyDirectionX = enemy.enemyDirectionX / length;
        enemy.enemyDirectionY = enemy.enemyDirectionY / length;
    }

    let targetX = playerX - enemy.enemyDirectionX * 16;
    let targetY = playerY - enemy.enemyDirectionY * 16;

    enemy.enemyDirectionX = targetX - enemy.enemyX;
    enemy.enemyDirectionY = targetY - enemy.enemyY;

    enemy.targetLength = Math.sqrt(enemy.enemyDirectionX * enemy.enemyDirectionX + enemy.enemyDirectionY * enemy.enemyDirectionY);

    if (enemy.targetLength != 0) {
        enemy.enemyDirectionX = enemy.enemyDirectionX / enemy.targetLength;
        enemy.enemyDirectionY = enemy.enemyDirectionY / enemy.targetLength;
    }
    if (enemy.targetLength > 3) {
        enemy.enemySpeedX = enemy.enemyDirectionX * deltaTime * enemy.speed;
        enemy.enemySpeedY = enemy.enemyDirectionY * deltaTime * enemy.speed;
    }
}