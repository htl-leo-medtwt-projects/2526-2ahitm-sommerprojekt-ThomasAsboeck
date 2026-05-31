// ── Shop State ───────────────────────────────────────────────────────────────
 
let weaponNumber1 = 0, weaponNumber2 = 0;
let weaponPrice1, weaponPrice2;
let upgradeNumber1 = 0, upgradeNumber2 = 0, upgradeNumber3 = 0;
let upgradePrice1, upgradePrice2, upgradePrice3;
let upgradesBought = [false, false, false];
let startShopCheck = true;
 
let selectedWeaponSlot = 0;            // 0 = none, 1 or 2
let selectedUpgrades = [false, false, false];
 
// ── Create Shop ──────────────────────────────────────────────────────────────
 
function createShop() {
    if (startShop) {
        startShop = false;
        startShopCheck = true;
    }
 
    for (let i = 0; i < enemys.length; i++) {
        if (enemys[i] != null && document.getElementById(`enemy${i}`)) {
            enemys[i] = null;
            document.getElementById(`enemy${i}`).remove();
            enemysInWorld--;
        }
    }
 
    weaponNumber1 = Math.floor(rng() * weapons.length);
    weaponNumber2 = Math.floor(rng() * weapons.length);
    while (weaponNumber2 === weaponNumber1 || weaponNumber1 === player.currentWeapon || weaponNumber2 === player.currentWeapon) {
        weaponNumber1 = Math.floor(rng() * weapons.length);
        weaponNumber2 = Math.floor(rng() * weapons.length);
    }
 
    upgradeNumber1 = Math.floor(rng() * upgrades.length);
    upgradeNumber2 = Math.floor(rng() * upgrades.length);
    upgradeNumber3 = Math.floor(rng() * upgrades.length);
    while (upgradeNumber1 === upgradeNumber2 || upgradeNumber2 === upgradeNumber3 || upgradeNumber1 === upgradeNumber3) {
        upgradeNumber1 = Math.floor(rng() * upgrades.length);
        upgradeNumber2 = Math.floor(rng() * upgrades.length);
        upgradeNumber3 = Math.floor(rng() * upgrades.length);
    }
 
    weaponPrice1 = Math.ceil(rng() * weapons[weaponNumber1].priceRange + weapons[weaponNumber1].priceRange);
    weaponPrice2 = Math.ceil(rng() * weapons[weaponNumber2].priceRange + weapons[weaponNumber2].priceRange);
    upgradePrice1 = Math.ceil(rng() * 10 + 10);
    upgradePrice2 = Math.ceil(rng() * 10 + 10);
    upgradePrice3 = Math.ceil(rng() * 10 + 10);
 
    upgradesBought    = [false, false, false];
    selectedWeaponSlot = 0;
    selectedUpgrades   = [false, false, false];
 
    const w1 = weapons[weaponNumber1], w2 = weapons[weaponNumber2];
    const u1 = upgrades[upgradeNumber1], u2 = upgrades[upgradeNumber2], u3 = upgrades[upgradeNumber3];
 
    const html = `
    <div id="shop">
        <div id="shopHeader">
            <p id="shopTitle">SHOP</p>
        </div>
        <div id="shopContent">
            <div class="shopSection">
                <p class="shopSectionLabel">WEAPONS</p>
                <div class="shopRow">
                    <div class="shopCard" id="shopWeapon1"
                        onclick="toggleWeapon(1)"
                        onmouseenter="showWeaponTooltip(1)"
                        onmouseleave="hideShopTooltip()">
                        <p class="cardName">${w1.name}</p>
                        <p class="cardDesc">${w1.description}</p>
                        <p class="cardPrice">${weaponPrice1} COINS</p>
                    </div>
                    <div class="shopCard" id="shopWeapon2"
                        onclick="toggleWeapon(2)"
                        onmouseenter="showWeaponTooltip(2)"
                        onmouseleave="hideShopTooltip()">
                        <p class="cardName">${w2.name}</p>
                        <p class="cardDesc">${w2.description}</p>
                        <p class="cardPrice">${weaponPrice2} COINS</p>
                    </div>
                </div>
            </div>
            <div class="shopSection">
                <p class="shopSectionLabel">UPGRADES</p>
                <div class="shopRow">
                    <div class="shopCard" id="shopUpgrade1"
                        onclick="toggleUpgrade(1)"
                        onmouseenter="showUpgradeTooltip(1)"
                        onmouseleave="hideShopTooltip()">
                        <p class="cardName">${u1.name}</p>
                        <p class="cardDesc">${u1.description}</p>
                        <p class="cardPrice">${upgradePrice1} COINS</p>
                    </div>
                    <div class="shopCard" id="shopUpgrade2"
                        onclick="toggleUpgrade(2)"
                        onmouseenter="showUpgradeTooltip(2)"
                        onmouseleave="hideShopTooltip()">
                        <p class="cardName">${u2.name}</p>
                        <p class="cardDesc">${u2.description}</p>
                        <p class="cardPrice">${upgradePrice2} COINS</p>
                    </div>
                    <div class="shopCard" id="shopUpgrade3"
                        onclick="toggleUpgrade(3)"
                        onmouseenter="showUpgradeTooltip(3)"
                        onmouseleave="hideShopTooltip()">
                        <p class="cardName">${u3.name}</p>
                        <p class="cardDesc">${u3.description}</p>
                        <p class="cardPrice">${upgradePrice3} COINS</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="shopFooter">
            <div id="shopSummary">
                <p id="shopTotal">TOTAL: 0</p>
                <p id="shopAfford">SELECT ITEMS TO BUY</p>
            </div>
            <div id="shopSkipBtn" onclick="continueShop()">SKIP</div>
            <div id="shopConfirmBtn" onclick="confirmPurchase()">CONFIRM</div>
        </div>
        <div id="shopTooltip"></div>
    </div>`;
 
    document.getElementById("screen").insertAdjacentHTML("beforeend", html);
    document.getElementById("world").style.filter = "brightness(0.4)";
}
 
// ── Toggle Selection ─────────────────────────────────────────────────────────
 
function toggleWeapon(slot) {
    if (selectedWeaponSlot === slot) {
        // Deselect
        selectedWeaponSlot = 0;
        document.getElementById("shopWeapon" + slot).classList.remove("cardSelected");
    } else {
        // Deselect the other weapon if one was selected
        if (selectedWeaponSlot !== 0) {
            document.getElementById("shopWeapon" + selectedWeaponSlot).classList.remove("cardSelected");
        }
        selectedWeaponSlot = slot;
        document.getElementById("shopWeapon" + slot).classList.add("cardSelected");
    }
    updateShopSummary();
}
 
function toggleUpgrade(slot) {
    selectedUpgrades[slot - 1] = !selectedUpgrades[slot - 1];
    document.getElementById("shopUpgrade" + slot).classList.toggle("cardSelected", selectedUpgrades[slot - 1]);
    updateShopSummary();
}
 
// ── Summary ──────────────────────────────────────────────────────────────────
 
function updateShopSummary() {
    let total = 0;
    if (selectedWeaponSlot === 1) total += weaponPrice1;
    if (selectedWeaponSlot === 2) total += weaponPrice2;
    if (selectedUpgrades[0]) total += upgradePrice1;
    if (selectedUpgrades[1]) total += upgradePrice2;
    if (selectedUpgrades[2]) total += upgradePrice3;
 
    const hasSelection = total > 0;
    const canAfford    = player.coins >= total;
 
    document.getElementById("shopTotal").textContent = "TOTAL: " + total + " COINS";
 
    const affordEl = document.getElementById("shopAfford");
    if (!hasSelection) {
        affordEl.textContent = "SELECT ITEMS TO BUY";
        affordEl.style.color = "#58584a";
    } else if (canAfford) {
        affordEl.textContent = (player.coins - total) + " COINS LEFT AFTER";
        affordEl.style.color = "#7a9050";
    } else {
        affordEl.textContent = "NOT ENOUGH COINS";
        affordEl.style.color = "#8a4545";
    }
 
    document.getElementById("shopConfirmBtn").classList.toggle("btnDisabled", !hasSelection || !canAfford);
}
 
// ── Confirm Purchase ─────────────────────────────────────────────────────────
 
function confirmPurchase() {
    let total = 0;
    if (selectedWeaponSlot === 1) total += weaponPrice1;
    if (selectedWeaponSlot === 2) total += weaponPrice2;
    if (selectedUpgrades[0]) total += upgradePrice1;
    if (selectedUpgrades[1]) total += upgradePrice2;
    if (selectedUpgrades[2]) total += upgradePrice3;
 
    if (total === 0 || player.coins < total) return;
 
    player.coins -= total;
 
    // Apply weapon
    if (selectedWeaponSlot === 1) player.currentWeapon = weaponNumber1;
    if (selectedWeaponSlot === 2) player.currentWeapon = weaponNumber2;
 
    // Apply upgrades
    function applyUpgrade(idx, upgradeNum) {
        if (!selectedUpgrades[idx]) return;
        upgradesBought[idx] = true;
        const u = upgrades[upgradeNum];
        multipliers.coins    *= u.coins;
        multipliers.speed    *= u.speed;
        multipliers.damage   *= u.damage;
        multipliers.hp       *= u.hp;
        multipliers.regen    *= u.regen;
        multipliers.accuracy *= u.accuracy;
        multipliers.bpm      *= u.bpm;
    }
    applyUpgrade(0, upgradeNumber1);
    applyUpgrade(1, upgradeNumber2);
    applyUpgrade(2, upgradeNumber3);
 
    continueShop();
}
 
// ── Tooltips ─────────────────────────────────────────────────────────────────
 
function positionTooltip(card) {
    const tooltip    = document.getElementById("shopTooltip");
    const shopHeight = document.getElementById("shop").offsetHeight;
    const cardMidY   = card.offsetTop + card.offsetHeight / 2;

    tooltip.style.left = card.offsetLeft + "px";

    if (cardMidY > shopHeight / 2) {
        tooltip.style.bottom = (shopHeight - card.offsetTop + 6) + "px";
        tooltip.style.top    = "auto";
    } else {
        tooltip.style.top    = (card.offsetTop + card.offsetHeight + 6) + "px";
        tooltip.style.bottom = "auto";
    }

    tooltip.style.display = "flex"; // was "block" — needs flex for column direction
}
 
function showWeaponTooltip(slot) {
    const newWeapon = weapons[slot === 1 ? weaponNumber1 : weaponNumber2];
    const curWeapon = weapons[player.currentWeapon];

    const stats = [
        { label: "DAMAGE",   cur: curWeapon.damage              || 0, val: newWeapon.damage              || 0 },
        { label: "RATE",     cur: curWeapon.bpm                 || 0, val: newWeapon.bpm                 || 0 },
        { label: "ACCURACY", cur: 1 / (curWeapon.spread         || 1), val: 1 / (newWeapon.spread        || 1) },
        { label: "SPEED",    cur: curWeapon.speed         || 0, val: newWeapon.speed         || 0 },
        { label: "BULLETS",  cur: curWeapon.bulletCount         || 1, val: newWeapon.bulletCount         || 1 },
    ];

    let html = `<p class="ttTitle">OLD VS NEW</p>`;
    for (const s of stats) {
        const total = s.cur + s.val || 1;

        let curColor, newColor;
        if (s.cur > s.val)      { curColor = "#7a9050"; newColor = "#8a4545"; }
        else if (s.cur < s.val) { curColor = "#8a4545"; newColor = "#7a9050"; }
        else                    { curColor = newColor = "#aab09a"; }

        html += `
        <div class="ttRow">
            <span class="ttLabel">${s.label}</span>
            <div class="ttBars">
                <div class="ttBar" style="flex:${s.cur / total};background:${curColor}"></div>
                <div class="ttBar" style="flex:${s.val / total};background:${newColor}"></div>
            </div>
        </div>`;
    }

    const tooltip = document.getElementById("shopTooltip");
    tooltip.innerHTML = html;
    positionTooltip(document.getElementById("shopWeapon" + slot));
}
 
function showUpgradeTooltip(slot) {
    const u = upgrades[[upgradeNumber1, upgradeNumber2, upgradeNumber3][slot - 1]];
 
    const stats = [
        { label: "COINS",     val: u.coins    },
        { label: "SPEED",     val: u.speed    },
        { label: "DAMAGE",    val: u.damage   },
        { label: "MAX HP",    val: u.hp       },
        { label: "REGEN",     val: u.regen    },
        { label: "ACCURACY",  val: u.accuracy },
        { label: "FIRE RATE", val: u.bpm      },
    ];
 
    let html = `<p class="ttTitle">BONUSES</p>`;
    for (const s of stats) {
        if (s.val === 1) continue;   // multiplier of 1 = no effect, skip
        const pct   = Math.round((s.val - 1) * 100);
        const sign  = pct >= 0 ? "+" : "";
        const color = pct >= 0 ? "#7a9050" : "#8a4545";
        html += `
        <div class="ttUpgradeRow">
            <span class="ttLabel">${s.label}</span>
            <span class="ttValue" style="color:${color}">${sign}${pct}%</span>
        </div>`;
    }
 
    const tooltip = document.getElementById("shopTooltip");
    tooltip.innerHTML = html;
    positionTooltip(document.getElementById("shopUpgrade" + slot));
}
 
function hideShopTooltip() {
    const tooltip = document.getElementById("shopTooltip");
    if (tooltip) tooltip.style.display = "none";
}
 
// ── Continue (UNCHANGED from original) ───────────────────────────────────────
 
function continueShop() {
    document.getElementById("shop").remove();
    document.getElementById("world").style.filter = "brightness(1)";
    player.isPaused = false;
    player.timeRemaining = 61000;
    player.hp += 20*multipliers.regen;
    if (!startShopCheck) {
        player.difficulty = player.difficulty * 1.5;
    } else {
        startShopCheck = false;
    }
}