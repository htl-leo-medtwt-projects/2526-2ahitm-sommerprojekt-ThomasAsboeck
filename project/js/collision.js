
function bulletCollisionEnemy(enemy, bullet) {
    let enemyX = enemy.enemyX + 16;
    let enemyY = enemy.enemyY + 16;
    dx = bullet.bulletX - bullet.previousPositionX;
    dy = bullet.bulletY - bullet.previousPositionY;

    t = ((enemyX - bullet.previousPositionX) * dx + (enemyY - bullet.previousPositionY) * dy) / (dx*dx + dy*dy);
    t = Math.max(0, Math.min(1, t));

    closestX = bullet.previousPositionX + t * dx
    closestY = bullet.previousPositionY + t * dy

    let distance = Math.sqrt((closestX - enemyX) * (closestX - enemyX) + (closestY - enemyY) * (closestY - enemyY));

    return (distance < enemy.radius);
};