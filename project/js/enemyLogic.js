function EnemyLogic() {
    if (bullets != null && Enemys != null) {

        for (let i = 0; i < Enemys.length; i++) {
            for (let j = 0; j < bullets.length; j++) {
                if (isColliding(Enemys[i], bullets[j])) {
                    Enemys[i].hp -= bullets[j].damage;
                    killBullet(j);
                }
            }
        }
    }
}