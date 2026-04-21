const bulletSpeed = 2.5;
let bulletCooldown = 250;
let lastBulletShot = -1;

let bullets = [];
let counter = 0;

function shoot() {


    let element = document.createElement("div");
    element.className = "bullet"
    element.id = "bullet" + counter
    let bullet = {
        bulletX: 320 + (COORDINATES.playerX * -1),
        bulletY: 180 + (COORDINATES.playerY * -1),
        velocityX: forwardX * bulletSpeed,
        velocityY: forwardY * bulletSpeed,
        damage: 25,
        penetration: 1,
        size: 1,
        element: element
    }
    bullets.push(bullet);
    document.getElementById("world").appendChild(element);
    console.log("shot");
    counter++;
}

let wasLastNull = false;
function highQualityBulletMath() {
    for (let i = 0; i < bullets.length; i++) {
        if (bullets[i] != null) {
            bullets[i].bulletX += bullets[i].velocityX * deltaTime;
            bullets[i].bulletY -= bullets[i].velocityY * deltaTime;
            bullets[i].element.style.left = bullets[i].bulletX + "px";
            bullets[i].element.style.bottom = bullets[i].bulletY + "px";
            bullets[i].lifetime--;
            if (bullets[i].lifetime <= 0) {
                bullets[i] = null;
            }
        }
    }
    checkBulletCollisions();
}

function checkBulletCollisions() {
    for (let i = 0; i < bullets.length; i++) {
        if (bullets[i] == null || bullets[i].bulletX < 0 || bullets[i].bulletX > 2160 - 180 || bullets[i].bulletY < 0 || bullets[i].bulletY > 3840 - 320) {
            if (document.getElementById(`bullet${i}`)) {
                document.getElementById(`bullet${i}`).remove();
            }
            bullets[i] = null;
        }
    }
}