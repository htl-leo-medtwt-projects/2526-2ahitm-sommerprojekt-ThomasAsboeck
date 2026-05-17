let player = {
    playerX: 0,
    playerY: 0,
    hp: 100,
    size: 32,
    coins: 0,
    timeRemaining: 61000,
    isPaused: false,
    currentWeapon: 0
}


function gameLogic() {
    if (!player.isPaused) {
        if (enemysInWorld > 0) {
            for (let i = 0; i < enemys.length; i++) {
                if (enemys[i] != null) {
                    document.getElementById("enemy" + i).style.width = enemys[i].size + "px";
                    document.getElementById("enemy" + i).style.height = enemys[i].size + "px";
                }
            }
        }
        if (bulletsInWorld > 0) {
            for (let i = 0; i < bullets.length; i++) {
                if (bullets[i] != null) {
                    document.getElementById("bullet" + i).style.width = bullets[i].size + "px";
                    document.getElementById("bullet" + i).style.height = bullets[i].size + "px";
                }
            }
        }

        if (player.playerX - velocityX < 0 && player.playerX - velocityX > -3840 + 640) {
            player.playerX -= velocityX;
        }
        if (player.playerY - velocityY < 0 && player.playerY - velocityY > -2160 + 360) {
            player.playerY -= velocityY;
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
                            enemys[i].hp -= bullets[j].damage;
                            console.log(" hit Enemy" + i + "   " + enemys[i].hp)
                            killBullet(j);
                        }
                    }
                }
            }
        }

        player.timeRemaining = player.timeRemaining - deltaTime;

        if (player.timeRemaining/1000 < 1) {
            player.isPaused = true;
            createShop();
        }

        
        document.getElementById("timeRemaining").innerHTML = Math.floor(player.timeRemaining / 1000);
    }
    


    document.getElementById("coinCounter").innerHTML = player.coins;
    let fps = 1 / (deltaTime / 1000);
    document.getElementById("fpsCounter").innerHTML = Math.floor(fps) + "FPS";
}
