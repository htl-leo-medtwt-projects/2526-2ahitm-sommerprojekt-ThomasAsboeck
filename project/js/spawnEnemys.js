let Enemys = [];
let enemyCounter = 0;

function addEnemy() {
    let element = document.createElement("div");
    element.className = "enemy";
    element.id = "enemy" + counter;

    let enemy = {
        hp: 100
    }

    Enemys.push(enemy);
    document.getElementById("world").appendChild(element);
}
