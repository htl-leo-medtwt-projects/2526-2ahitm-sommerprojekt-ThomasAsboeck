let weapon1;
let weapon2;

function createShop() {
    let html = "";
    html += `
    <div id="shopContainer">
    <div class="shopWeapon" id="shopWeapon1"></div>
    <div class="shopWeapon" id="shopWeapon2"></div>
    </div>`
    document.getElementById("screen").innerHTML += html;
    document.getElementById("world").style.filter = "brightness(0.5)";

    weapon1 = Math.floor(rng()*4);
    weapon2 = Math.floor(rng()*4);
    while (weapon2 == weapon1) {
        weapon2 = Math.floor(rng()*4);
    }

    document.getElementById("shopWeapon1").innerHTML = weapon1;
    document.getElementById("shopWeapon2").innerHTML = weapon2;
}

function shopLogic() {
    
}