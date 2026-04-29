let COORDINATES = {
    playerX: 0,
    playerY: 0
}

function gameLogic() {
    if (COORDINATES.playerX - velocityX < 0 && COORDINATES.playerX - velocityX > -3840 + 640) {
        COORDINATES.playerX -= velocityX;
    }
    if (COORDINATES.playerY - velocityY < 0 && COORDINATES.playerY - velocityY > -2160 + 360) {
        COORDINATES.playerY -= velocityY;
    }


    document.getElementById("world").style.left = COORDINATES.playerX + "px";
    document.getElementById("world").style.bottom = COORDINATES.playerY + "px";
    if (Enemys.length != null) {
        for (let i = 0; i < Enemys.length; i++) {
            document.getElementsByClassName("enemy")[i].style.left = COORDINATES.playerX + 30 + "px";
            document.getElementsByClassName("enemy")[i].style.bottom = COORDINATES.playerY + 30 + "px";
        }
    }


    if (KEY_EVENTS.lmb) {
        //shoot(2.5, 500, 0.2);
        //shoot(5, 120, 0.05);
        shoot(3, 1200, 0.5)
    }

    let fps = 1 / (deltaTime / 1000);
    document.getElementById("fpsCounter").innerHTML = Math.floor(fps) + "FPS";
}