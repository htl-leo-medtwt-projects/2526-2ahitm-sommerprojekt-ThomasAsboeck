let weaponNumber1 = 0;
let weaponNumber2 = 0;
let weaponPrice1;
let weaponPrice2;

function createShop() {
    weaponNumber1 = Math.floor(rng() * 4);
    weaponNumber2 = Math.floor(rng() * 4);
    while (weaponNumber2 == weaponNumber1 || weaponNumber1 == player.currentWeapon || weaponNumber2 == player.currentWeapon) {
        weaponNumber1 = Math.floor(rng() * 4);
        weaponNumber2 = Math.floor(rng() * 4);
    }

    weaponPrice1 = weaponPrice(weaponNumber1);
    weaponPrice2 = weaponPrice(weaponNumber2);

    let html = "";
    html += `
    <div id="shop">
    <div id="shopContainer">
    <div class="shopWeapon" id="shopWeapon1" onclick="switchWeapon(${weaponNumber1}, ${weaponPrice1}, 1, 2)"></div>
    <div class="shopWeapon" id="shopWeapon2" onclick="switchWeapon(${weaponNumber2}, ${weaponPrice2}, 2, 1)"></div>
    </div>
    <div id="shopContinue" onclick="continueShop()">Continue</div>
    </div>`
    document.getElementById("screen").innerHTML += html;
    document.getElementById("world").style.filter = "brightness(0.5)";

    document.getElementById("shopWeapon1").innerHTML = weaponName(weaponNumber1) + "<br>" + weaponPrice1;
    document.getElementById("shopWeapon2").innerHTML = weaponName(weaponNumber2) + "<br>" + weaponPrice2;

}

function switchWeapon(number, price, id, noID) {
    if (player.coins - price >= 0 && number != player.currentWeapon) {
        player.coins = player.coins - price;
        player.currentWeapon = number;
        document.getElementById("shopWeapon" + id).style.opacity = "0.5";
        document.getElementById("shopWeapon" + noID).style.opacity = "1";
    }
}

function continueShop() {
    document.getElementById("shop").remove();
    document.getElementById("world").style.filter = "brightness(1)";
    player.isPaused = false;
    player.timeRemaining = 61000;
}

function weaponName(number) {
    let result = "";
    switch (number) {
        case 0:
            result = "Pistol";
            break;
        case 1:
            result = "SMG";
            break;
        case 2:
            result = "Assault Rifle";
            break;
        case 3:
            result = "Sniper";
            break;
    }
    return result;
}

function weaponPrice(number) {
    let result;
    switch (number) {
        case 0:
            result = Math.ceil(rng() * 5 + 5);
            break;
        case 1:
            result = Math.ceil(rng() * 10 + 10);
            break;
        case 2:
            result = Math.ceil(rng() * 15 + 15);
            break;
        case 3:
            result = Math.ceil(rng() * 20 + 20);
            break;
    }
    return result;
}