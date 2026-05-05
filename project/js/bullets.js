let bulletCooldown = 0;

let bullets = [];
let counter = 0;
let bulletsInWorld = 0;

function shoot(bulletSpeed, bpm, spread, damage, penetration) {
    if (bulletCooldown < 0) {

        bulletSpeed = bulletSpeed + (rng() - 0.5);

        let element = document.createElement("div");
        element.className = "bullet";
        element.id = "bullet" + counter;

        let angle = Math.atan2(forwardY, forwardX);


        //KI
        let u1 = rng();
        let u2 = rng();
        let normal = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
        angle += normal * (spread / 3);

        let newForwardX = Math.cos(angle);
        let newForwardY = Math.sin(angle);

        let bullet = {
            bulletX: 320 + (player.playerX * -1),
            bulletY: 180 + (player.playerY * -1),
            bulletVelocityX: newForwardX * bulletSpeed,
            bulletVelocityY: newForwardY * bulletSpeed,
            damage: damage,
            penetration: penetration,
            size: 2,
            element: element,
            bulletOldX: 320 + (player.playerX * -1),
            bulletOldY: 180 + (player.playerY * -1),
        }
        bullets.push(bullet);
        document.getElementById("world").appendChild(element);
        bulletsInWorld++;
        counter++;
        bulletCooldown = 60000 / bpm;
    }
}

let wasLastNull = false;
function highQualityBulletMath() {
    bulletCooldown = bulletCooldown - deltaTime;
    for (let i = 0; i < bullets.length; i++) {
        if (bullets[i] != null) {
            bullets[i].bulletOldY = bullets[i].bulletY;
            bullets[i].bulletOldX = bullets[i].bulletX;
            bullets[i].bulletX += bullets[i].bulletVelocityX * deltaTime;
            bullets[i].bulletY -= bullets[i].bulletVelocityY * deltaTime;
            bullets[i].element.style.left = bullets[i].bulletX + "px";
            bullets[i].element.style.bottom = bullets[i].bulletY + "px";
        }
    }

    checkBulletCollisions();
}

function checkBulletCollisions() {
    for (let i = 0; i < bullets.length; i++) {
        if (bullets[i] != null) {
            if (bullets[i].bulletX < 0 || bullets[i].bulletX > 3840 || bullets[i].bulletY < 0 || bullets[i].bulletY > 2160) {
                killBullet(i);
            }
        }

    }
}

function killBullet(i) {
    if (document.getElementById(`bullet${i}`)) {
        bullets[i] = null;
        document.getElementById(`bullet${i}`).remove();
        bulletsInWorld--;
    }
}