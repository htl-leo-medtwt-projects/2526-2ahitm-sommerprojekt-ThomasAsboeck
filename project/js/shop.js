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

    weaponPrice1 = Math.ceil(rng() * weapons[weaponNumber1].priceRange + weapons[weaponNumber1].priceRange);
    weaponPrice2 = Math.ceil(rng() * weapons[weaponNumber2].priceRange + weapons[weaponNumber2].priceRange);

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

    document.getElementById("shopWeapon1").innerHTML = `<p>${weapons[weaponNumber1].name}</p><p>${weapons[weaponNumber1].description}</p><p>${weaponPrice1}</p>`;
    document.getElementById("shopWeapon2").innerHTML = `<p>${weapons[weaponNumber2].name}</p><p>${weapons[weaponNumber2].description}</p><p>${weaponPrice2}</p>`;

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