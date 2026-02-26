/// <reference path="test.js"/>
/// <reference path="friction.js"/>

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



    if (!isAlreadyMovingXNegative && VELOCITY.vx > 2 || !isAlreadyMovingXPositive && VELOCITY.vx < -2 || isAlreadyMovingXNegative && isAlreadyMovingXPositive) {
        VELOCITY.vx = resistance(VELOCITY.vx, isAlreadySlowingDownX);
        isAlreadySlowingDownX = false
    }
    else {
        isAlreadySlowingDownX = true;
    }

    if (!isAlreadyMovingYNegative && VELOCITY.vy > 2 || !isAlreadyMovingXPositive && VELOCITY.vy < -2 || isAlreadyMovingYNegative && isAlreadyMovingYPositive) {
        VELOCITY.vy = resistance(VELOCITY.vy, isAlreadySlowingDownY);
        isAlreadySlowingDownY = false
    }
    else {
        isAlreadySlowingDownY = true;
    }



    console.log(VELOCITY.vx + " vx " + VELOCITY.vy + " vy|||");



    if (COORDINATES.x + VELOCITY.vx < 0 && COORDINATES.x + VELOCITY.vx > -8145) {
        document.getElementById("Map").style.right = (COORDINATES.x + VELOCITY.vx) + "px";
        COORDINATES.x = (COORDINATES.x + VELOCITY.vx);
    }
    else {
        VELOCITY.vx = 0;
    }
    if (COORDINATES.y + VELOCITY.vy < 0 && COORDINATES.y + VELOCITY.vy > -8388) {
        document.getElementById("Map").style.top = (COORDINATES.y + VELOCITY.vy) + "px";
        COORDINATES.y = (COORDINATES.y + VELOCITY.vy);
    }
    else {
        VELOCITY.vy = 0;
    }


    setTimeout(updateMovement, 1000 / 128);
}
