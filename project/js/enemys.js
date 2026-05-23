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
            if (enemys[i] != null) {
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
                    player.hp = player.hp - enemys[i].damage;
                    player.timeSinceDamage = 0;
                    enemys[i].cooldown = 500;
                }

                enemys[i].cooldown = enemys[i].cooldown - deltaTime;
            }
        }
        if (closestEnemyID != null && document.getElementById("enemy" + closestEnemyID)) {
            enemys[closestEnemyID].element.style.filter = "drop-shadow(0px 0px 10px #ff0000)";
        }
    }
}


function killEnemy(i) {
    if (document.getElementById(`enemy${i}`)) {
        enemys[i] = null;
        document.getElementById(`enemy${i}`).remove();
        enemysInWorld--;
        player.kills++;
        addedPoints = multipliers.coins * Math.ceil(rng() * 3);
        player.coins += addedPoints;
        player.score += addedPoints;
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

    let targetX = playerX - enemy.enemyDirectionX * 32;
    let targetY = playerY - enemy.enemyDirectionY * 32;

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