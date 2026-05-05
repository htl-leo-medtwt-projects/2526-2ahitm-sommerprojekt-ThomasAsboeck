let enemysInWorld = 0;
let enemys = [];
let enemyCounter = 0;

function addEnemy() {
    let element = document.createElement("div");
    element.className = "enemy";
    element.id = "enemy" + enemyCounter;

    let enemy = {
        hp: 100,
        enemyX: Math.floor(rng()* (3200)) + 304,
        enemyY: Math.floor(rng()* (1800)) + 164,
        enemyVelocityX: 0,
        enemyVelocityY: 0,
        enemyOldX: 0,
        enemyOldY: 0,
        size: 32,
        element: element
    }

    enemys.push(enemy);
    document.getElementById("world").appendChild(element);
    enemyCounter++;
    enemysInWorld++;
}

function enemyLogic() {

    if(enemysInWorld < 5) {
        addEnemy();
    }

    for (let i = 0; i < enemys.length; i++) {
        if (enemys[i] != null && enemys[i].hp <= 0) {
            killEnemy(i);
        }
    }
    for (let i = 0; i < enemys.length; i++) {
        if (enemys[i] != null) {
            enemys[i].element.style.left = enemys[i].enemyX + "px";
            enemys[i].element.style.bottom = enemys[i].enemyY + "px";
        }
    }

}

function killEnemy(i) {
    if (document.getElementById(`enemy${i}`)) {
        enemys[i] = null;
        document.getElementById(`enemy${i}`).remove();
        enemysInWorld--;
    }
    
}