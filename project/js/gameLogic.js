let COORDINATES = {
    playerX: 304,
    playerY: 164
}

function gameLogic() {
    COORDINATES.playerX += velocityX;
    COORDINATES.playerY += velocityY;

    document.getElementById("player").style.left = COORDINATES.playerX + "px";
    document.getElementById("player").style.bottom = COORDINATES.playerY + "px";
}