
function bulletCollisionEnemy(enemy, bullet) {
    let enemyX = enemy.enemyX + enemy.size / 2;
    let enemyY = enemy.enemyY + enemy.size / 2;
    let bulletX = bullet.bulletX + bullet.size / 2;
    let bulletY = bullet.bulletY + bullet.size / 2;
    let dx = bulletX - bullet.bulletOldX;
    let dy = bulletY - bullet.bulletOldY;

    t = ((enemyX - bullet.bulletOldX) * dx + (enemyY - bullet.bulletOldY) * dy) / (dx * dx + dy * dy);
    t = Math.max(0, Math.min(1, t));

    closestX = bullet.bulletOldX + t * dx
    closestY = bullet.bulletOldY + t * dy

    let distanceBulletToEnemy = Math.sqrt((closestX - enemyX) * (closestX - enemyX) + (closestY - enemyY) * (closestY - enemyY));
    return (distanceBulletToEnemy < enemy.size / 2);
};

function EnemyCollisionEnemy(enemy1, enemy2) {
    let enemy1X = enemy1.enemyX + enemy1.size / 2;
    let enemy1Y = enemy1.enemyY + enemy1.size / 2;

    let enemy2X = enemy2.enemyX + enemy2.size / 2;
    let enemy2Y = enemy2.enemyY + enemy2.size / 2;

    let distance = Math.sqrt((enemy1X - enemy2X) * (enemy1X - enemy2X) + (enemy1Y - enemy2Y) * (enemy1Y - enemy2Y));

    let overlap = (enemy1.size / 4 + enemy2.size / 4) - distance;

    return (overlap > 0);
}