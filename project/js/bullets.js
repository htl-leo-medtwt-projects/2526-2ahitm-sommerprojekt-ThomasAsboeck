const bulletSpeed = 0.5;

let bullets = [];
let counter = 0;

function shoot() {
    let element = document.createElement("div");
    element.className = "bullet"
    element.id = "bullet" + counter
    let bullet = {
        bulletX: 320 + (COORDINATES.playerX*-1),
        bulletY: 180 + (COORDINATES.playerY*-1),
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

function highQualityBulletMath() {
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].bulletX += bullets[i].velocityX * deltaTime;
        bullets[i].bulletY -= bullets[i].velocityY * deltaTime;
        bullets[i].element.style.left = bullets[i].bulletX + "px";
        bullets[i].element.style.bottom = bullets[i].bulletY + "px";
    }
}