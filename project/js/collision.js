
function bulletCollisionEnemy(enemy, bullet) {
    let enemyX = enemy.enemyX + enemy.size/2;
    let enemyY = enemy.enemyY + enemy.size/2;
    let bulletX = bullet.bulletX + bullet.size/2;
    let bulletY = bullet.bulletY + bullet.size/2;
    let dx = bulletX - bullet.bulletOldX;
    let dy = bulletY - bullet.bulletOldY;

    t = ((enemyX - bullet.bulletOldX) * dx + (enemyY - bullet.bulletOldY) * dy) / (dx*dx + dy*dy);
    t = Math.max(0, Math.min(1, t));

    closestX = bullet.bulletOldX + t * dx
    closestY = bullet.bulletOldY + t * dy

    let distanceBulletToEnemy = Math.sqrt((closestX - enemyX) * (closestX - enemyX) + (closestY - enemyY) * (closestY - enemyY));
    return (distanceBulletToEnemy < enemy.size/2);
};

function playerCollision(player, enemy) {
    let enemyX = enemy.enemyX + enemy.size/2;
    let enemyY = enemy.enemyY + enemy.size/2;
    let distancePlayerToEnemy = Math.sqrt((-1*player.playerX - enemyX) * (-1*player.playerX - enemyX) + (-1*player.playerY - enemyY) * (-1*player.playerY - enemyY));
    return (distancePlayerToEnemy < enemy.size/2);
}