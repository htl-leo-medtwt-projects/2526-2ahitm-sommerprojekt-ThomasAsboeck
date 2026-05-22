let player = {
    difficulty: 1,
    playerX: 0,
    playerY: 0,
    originalHP: 100,
    MaxHp: 100,
    hp: 100,
    size: 32,
    coins: 30,
    timeRemaining: 61000,
    isPaused: false,
    currentWeapon: 0
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
            shoot(weapons[player.currentWeapon].speed, weapons[player.currentWeapon].bpm, weapons[player.currentWeapon].spread, weapons[player.currentWeapon].damage, weapons[player.currentWeapon].penetration)
        }

        if (bulletsInWorld > 0 && enemysInWorld > 0) {
            for (let i = 0; i < enemys.length; i++) {
                for (let j = 0; j < bullets.length; j++) {
                    if (bullets[j] != null && enemys[i] != null) {
                        if (bulletCollisionEnemy(enemys[i], bullets[j])) {
                            enemys[i].hp -= bullets[j].damage * multipliers.damage;
                            console.log(" hit Enemy" + i + "   " + enemys[i].hp)
                            killBullet(j);
                        }
                    }
                }
            }
        }

        player.timeRemaining = player.timeRemaining - deltaTime;

        if (player.timeRemaining/1000 < 51) {
            player.isPaused = true;
            createShop();
        }

        
        document.getElementById("timeRemaining").innerHTML = Math.floor(player.timeRemaining / 1000);
    }
    


    document.getElementById("coinCounter").innerHTML = player.coins;
    let fps = 1 / (deltaTime / 1000);
    document.getElementById("fpsCounter").innerHTML = Math.floor(fps) + "FPS";
}
