let COORDINATES = {
    playerX: 0,
    playerY: 0
}

let currentWeapon = 2;

function gameLogic() {
    if (COORDINATES.playerX - velocityX < 0 && COORDINATES.playerX - velocityX > -3840 + 640) {
        COORDINATES.playerX -= velocityX;
    }
    if (COORDINATES.playerY - velocityY < 0 && COORDINATES.playerY - velocityY > -2160 + 360) {
        COORDINATES.playerY -= velocityY;
    }


    document.getElementById("world").style.left = COORDINATES.playerX + "px";
    document.getElementById("world").style.bottom = COORDINATES.playerY + "px";


    if (KEY_EVENTS.lmb) {
        shoot(weapons[currentWeapon].speed, weapons[currentWeapon].bpm, weapons[currentWeapon].spread, weapons[currentWeapon].damage, weapons[currentWeapon].penetration)
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

    let fps = 1 / (deltaTime / 1000);
    document.getElementById("fpsCounter").innerHTML = Math.floor(fps) + "FPS";
}