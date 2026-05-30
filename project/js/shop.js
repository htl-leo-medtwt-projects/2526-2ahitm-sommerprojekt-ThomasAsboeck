let weaponNumber1 = 0;
let weaponNumber2 = 0;
let weaponPrice1;
let weaponPrice2;

let upgradeNumber1 = 0;
let upgradeNumber2 = 0;
let upgradeNumber3 = 0;
let upgradePrice1;
let upgradePrice2;
let upgradePrice3;

let upgradesBought = [
    upgrade = false,
    upgrade = false,
    upgrade = false
]

let startShopCheck = true;

function createShop() {
    if(startShop) {
        startShop = false;
        startShopCheck = true;
    }
    for (let i = 0; i < enemys.length; i++) {
        if (enemys[i] != null) {
            if (document.getElementById(`enemy${i}`)) {
                enemys[i] = null;
                document.getElementById(`enemy${i}`).remove();
                enemysInWorld--;
            }
        }
    }

    weaponNumber1 = Math.floor(rng() * weapons.length);
    weaponNumber2 = Math.floor(rng() * weapons.length);
    while (weaponNumber2 == weaponNumber1 || weaponNumber1 == player.currentWeapon || weaponNumber2 == player.currentWeapon) {
        weaponNumber1 = Math.floor(rng() * weapons.length);
        weaponNumber2 = Math.floor(rng() * weapons.length);
    }

    upgradeNumber1 = Math.floor(rng() * upgrades.length);
    upgradeNumber2 = Math.floor(rng() * upgrades.length);
    upgradeNumber3 = Math.floor(rng() * upgrades.length);
    while (upgradeNumber1 == upgradeNumber2 || upgradeNumber2 == upgradeNumber3 || upgradeNumber1 == upgradeNumber3) {
        upgradeNumber1 = Math.floor(rng() * upgrades.length);
        upgradeNumber2 = Math.floor(rng() * upgrades.length);
        upgradeNumber3 = Math.floor(rng() * upgrades.length);
    }

    weaponPrice1 = Math.ceil(rng() * weapons[weaponNumber1].priceRange + weapons[weaponNumber1].priceRange);
    weaponPrice2 = Math.ceil(rng() * weapons[weaponNumber2].priceRange + weapons[weaponNumber2].priceRange);

    upgradePrice1 = Math.ceil(rng() * 10 + 10);
    upgradePrice2 = Math.ceil(rng() * 10 + 10);
    upgradePrice3 = Math.ceil(rng() * 10 + 10);

    upgradesBought = [
        upgrade = false,
        upgrade = false,
        upgrade = false
    ]

    let html = "";
    html += `
    <div id="shop">
    <div id="shopContainer">
    <div id="weaponContainer">
    <div class="shopWeapon" id="shopWeapon1" onclick="switchWeapon(${weaponNumber1}, ${weaponPrice1}, 1, 2)"></div>
    <div class="shopWeapon" id="shopWeapon2" onclick="switchWeapon(${weaponNumber2}, ${weaponPrice2}, 2, 1)"></div>
    </div>
    <div id="upgradeContainer">
    <div class="shopUpgrade" id="shopUpgrade1" onclick="useUpgrade(${upgradePrice1}, ${upgrades[upgradeNumber1].coins}, ${upgrades[upgradeNumber1].speed}, ${upgrades[upgradeNumber1].damage}, ${upgrades[upgradeNumber1].hp}, ${upgrades[upgradeNumber1].regen}, ${upgrades[upgradeNumber1].accuracy}, ${upgrades[upgradeNumber1].bpm}, 1)"></div>
    <div class="shopUpgrade" id="shopUpgrade2" onclick="useUpgrade(${upgradePrice2}, ${upgrades[upgradeNumber2].coins}, ${upgrades[upgradeNumber2].speed}, ${upgrades[upgradeNumber2].damage}, ${upgrades[upgradeNumber2].hp}, ${upgrades[upgradeNumber2].regen}, ${upgrades[upgradeNumber2].accuracy}, ${upgrades[upgradeNumber2].bpm}, 2)"></div>
    <div class="shopUpgrade" id="shopUpgrade3" onclick="useUpgrade(${upgradePrice3}, ${upgrades[upgradeNumber3].coins}, ${upgrades[upgradeNumber3].speed}, ${upgrades[upgradeNumber3].damage}, ${upgrades[upgradeNumber3].hp}, ${upgrades[upgradeNumber3].regen}, ${upgrades[upgradeNumber3].accuracy}, ${upgrades[upgradeNumber3].bpm}, 3)"></div>
    </div>
    </div>
    <div id="shopContinue" onclick="continueShop()">Continue</div>
    </div>`
    document.getElementById("screen").innerHTML += html;
    document.getElementById("world").style.filter = "brightness(0.5)";

    document.getElementById("shopWeapon1").innerHTML = `<p>${weapons[weaponNumber1].name}</p><p>${weapons[weaponNumber1].description}</p><p>${weaponPrice1}</p>`;
    document.getElementById("shopWeapon2").innerHTML = `<p>${weapons[weaponNumber2].name}</p><p>${weapons[weaponNumber2].description}</p><p>${weaponPrice2}</p>`;

    document.getElementById("shopUpgrade1").innerHTML = `<p>${upgrades[upgradeNumber1].name}</p><p>${upgrades[upgradeNumber1].description}</p><p>${upgradePrice1}</p>`;
    document.getElementById("shopUpgrade2").innerHTML = `<p>${upgrades[upgradeNumber2].name}</p><p>${upgrades[upgradeNumber2].description}</p><p>${upgradePrice2}</p>`;
    document.getElementById("shopUpgrade3").innerHTML = `<p>${upgrades[upgradeNumber3].name}</p><p>${upgrades[upgradeNumber3].description}</p><p>${upgradePrice3}</p>`;

}

function switchWeapon(number, price, id, noID) {
    if (player.coins - price >= 0 && number != player.currentWeapon) {
        player.coins = player.coins - price;
        player.currentWeapon = number;
        document.getElementById("shopWeapon" + id).style.opacity = "0.5";
        document.getElementById("shopWeapon" + noID).style.opacity = "1";
    }
}

function useUpgrade(price, coins, speed, damage, hp, regen, accuracy, bpm, id) {
    if (player.coins - price >= 0 && !upgradesBought[id - 1]) {
        player.coins = player.coins - price;
        upgradesBought[id - 1] = true;
        multipliers.coins = multipliers.coins * coins;
        multipliers.speed = multipliers.speed * speed;
        multipliers.damage = multipliers.damage * damage;
        multipliers.hp = multipliers.hp * hp;
        multipliers.regen = multipliers.regen * regen;
        multipliers.accuracy = multipliers.accuracy * accuracy;
        multipliers.bpm = multipliers.bpm * bpm;
        document.getElementById("shopUpgrade" + id).style.opacity = "0.5";
    }

}

function continueShop() {
    document.getElementById("shop").remove();
    document.getElementById("world").style.filter = "brightness(1)";
    player.isPaused = false;
    player.timeRemaining = 61000;
    if (!startShopCheck) {
        player.difficulty = player.difficulty * 1.5;
    }
    else {
        startShopCheck = false;
    }
}