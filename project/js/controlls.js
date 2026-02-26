/// <reference path="test.js"/>
/// <reference path="friction.js"/>

let CONSTS = {
    gameHeight: 100000,
    gameWidth: 100000,
    speedMultiplier: 0.1
}

let VELOCITY = {
    vx: 0.0,
    vy: 0.0
}

let COORDINATES = {
    x: 0,
    y: 0
}

let isJumping = false;

let isAlreadyMovingXPositive = false;
let isAlreadyMovingXNegative = false;
let isAlreadyMovingYPositive = false;
let isAlreadyMovingYNegative = false;
let isAlreadySlowingDownX = false;
let isAlreadySlowingDownY = false;
let didNothingY = false;
let didNothingX = false;

function updateMovement() {
    if (KEY_EVENTS.keyRight) {
        VELOCITY.vx = frictionX(VELOCITY.vx, isAlreadyMovingXPositive, true);
        isAlreadyMovingXPositive = false;
    }
    else {
        isAlreadyMovingXPositive = true;
    }

    if (KEY_EVENTS.keyLeft) {
        VELOCITY.vx = frictionX(VELOCITY.vx, isAlreadyMovingXNegative, false);
        isAlreadyMovingXNegative = false;
    }
    else {
        isAlreadyMovingXNegative = true;
    }

    if (KEY_EVENTS.keyUp) {
        VELOCITY.vy = frictionY(VELOCITY.vy, isAlreadyMovingYPositive, true);
        isAlreadyMovingYPositive = false;
    }
    else {
        isAlreadyMovingYPositive = true;
    }

    if (KEY_EVENTS.keyDown) {
        VELOCITY.vy = frictionY(VELOCITY.vy, isAlreadyMovingYNegative, false);
        isAlreadyMovingYNegative = false;
    }
    else {
        isAlreadyMovingYNegative = true;
    }

    if (KEY_EVENTS.keySpace && !isJumping) {
        isJumping = true;
        document.getElementById("Player").style.transform = `scale(1.5)`;

        setTimeout(goingDown, 1000);
        setTimeout(stopJumping, 2000);
    }

    if(isJumping) {
        if (KEY_EVENTS.keyUp && KEY_EVENTS.keyLeft||KEY_EVENTS.keyUp && KEY_EVENTS.keyRight||KEY_EVENTS.keyDown && KEY_EVENTS.keyLeft||KEY_EVENTS.keyDown && KEY_EVENTS.keyRight) {
            maxSpeed = 200;
        }
        else {
            maxSpeed = 100;
        }
    }


    if (KEY_EVENTS.keyLeft && VELOCITY.vx > 2 || KEY_EVENTS.keyRight && VELOCITY.vx < -2 || !KEY_EVENTS.keyLeft && !KEY_EVENTS.keyRight||!isJumping && VELOCITY.vx > 105||!isJumping && VELOCITY.vx < -105) {
        VELOCITY.vx = resistance(VELOCITY.vx, isAlreadySlowingDownX);
        isAlreadySlowingDownX = false
    }
    else {
        isAlreadySlowingDownX = true;
    }

    if (KEY_EVENTS.keyDown && VELOCITY.vy > 2 || KEY_EVENTS.keyUp && VELOCITY.vy < -2 || !KEY_EVENTS.keyDown && !KEY_EVENTS.keyUp||!isJumping && VELOCITY.vy > 105||!isJumping && VELOCITY.vy < -105) {
        VELOCITY.vy = resistance(VELOCITY.vy, isAlreadySlowingDownY);
        isAlreadySlowingDownY = false
    }
    else {
        isAlreadySlowingDownY = true;
    }



    console.log(VELOCITY.vx + " vx " + VELOCITY.vy + " vy|||");



    if (COORDINATES.x + CONSTS.speedMultiplier * VELOCITY.vx < 0 && COORDINATES.x + CONSTS.speedMultiplier * VELOCITY.vx > -CONSTS.gameWidth) {
        document.getElementById("Map").style.right = (COORDINATES.x + CONSTS.speedMultiplier * VELOCITY.vx) + "px";
        COORDINATES.x = (COORDINATES.x + CONSTS.speedMultiplier * VELOCITY.vx);
    }
    else {
        VELOCITY.vx = 0;
    }
    if (COORDINATES.y + CONSTS.speedMultiplier * VELOCITY.vy < 0 && COORDINATES.y + CONSTS.speedMultiplier * VELOCITY.vy > -CONSTS.gameHeight) {
        document.getElementById("Map").style.top = (COORDINATES.y + CONSTS.speedMultiplier * VELOCITY.vy) + "px";
        COORDINATES.y = (COORDINATES.y + CONSTS.speedMultiplier * VELOCITY.vy);
    }
    else {
        VELOCITY.vy = 0;
    }


    setTimeout(updateMovement, 1000 / 128);
}


function stopJumping() {
    isJumping = false;
    maxSpeed = 100;
}

function goingDown() {
    document.getElementById("Player").style.transform = `scale(1)`;
}