/// <reference path="test.js"/>
/// <reference path="friction.js"/>

let CONSTS = {
    gameHeight: 8388,
    gameWidth: 8145
}

let VELOCITY = {
    vx: 0.0,
    vy: 0.0,
    vz: 0.0
}

let COORDINATES = {
    x: 0,
    y: 0
}

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



    if (KEY_EVENTS.keyLeft && VELOCITY.vx > 2 || KEY_EVENTS.keyRight && VELOCITY.vx < -2 || !KEY_EVENTS.keyLeft && !KEY_EVENTS.keyRight) {
        VELOCITY.vx = resistance(VELOCITY.vx, isAlreadySlowingDownX);
        isAlreadySlowingDownX = false
    }
    else {
        isAlreadySlowingDownX = true;
    }

    if (KEY_EVENTS.keyDown && VELOCITY.vy > 2 || KEY_EVENTS.keyUp && VELOCITY.vy < -2 || !KEY_EVENTS.keyDown && !KEY_EVENTS.keyUp) {
        VELOCITY.vy = resistance(VELOCITY.vy, isAlreadySlowingDownY);
        isAlreadySlowingDownY = false
    }
    else {
        isAlreadySlowingDownY = true;
    }



    console.log(VELOCITY.vx + " vx " + VELOCITY.vy + " vy|||");



    if (COORDINATES.x + VELOCITY.vx < 0 && COORDINATES.x + VELOCITY.vx > -CONSTS.gameWidth) {
        document.getElementById("Map").style.right = (COORDINATES.x + VELOCITY.vx) + "px";
        COORDINATES.x = (COORDINATES.x + VELOCITY.vx);
    }
    else {
        VELOCITY.vx = 0;
    }
    if (COORDINATES.y + VELOCITY.vy < 0 && COORDINATES.y + VELOCITY.vy > -CONSTS.gameHeight) {
        document.getElementById("Map").style.top = (COORDINATES.y + VELOCITY.vy) + "px";
        COORDINATES.y = (COORDINATES.y + VELOCITY.vy);
    }
    else {
        VELOCITY.vy = 0;
    }


    setTimeout(updateMovement, 1000 / 128);
}
