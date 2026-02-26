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
let didNothingY = false;
let didNothingX = false;

function updateMovement() {
    if (KEY_EVENTS.keyRight) {
        VELOCITY.vx = friction(VELOCITY.vx, isAlreadyMovingXPositive);
        isAlreadyMovingXPositive = true;
    }
    else {
        isAlreadyMovingXPositive = false;
    }
    if (KEY_EVENTS.keyLeft) {
        VELOCITY.vx = friction(VELOCITY.vx, isAlreadyMovingXNegative);
        isAlreadyMovingXNegative = true;
    }
    else {
        isAlreadyMovingXNegative = false;
    }
    if (KEY_EVENTS.keyUp) {
        VELOCITY.vy = friction(VELOCITY.vy, isAlreadyMovingYPositive);
        isAlreadyMovingYPositive = true;
    }
    else {
        isAlreadyMovingYPositive = false;
    }
    if (KEY_EVENTS.keyDown) {
        VELOCITY.vy = friction(VELOCITY.vy, isAlreadyMovingYNegative);
        isAlreadyMovingYNegative = true;
    }
    else {
        isAlreadyMovingYNegative = false;
    }

    console.log(VELOCITY.vx + " vx " + VELOCITY.vy + " vy|||" + didNothingX + " did Nothing X, " + didNothingY + " did Nothing y");



    if (COORDINATES.x + VELOCITY.vx < 0 && COORDINATES.x + VELOCITY.vx > -8145) {
        document.getElementById("Map").style.right = (COORDINATES.x + VELOCITY.vx) + "px";
        COORDINATES.x = (COORDINATES.x + VELOCITY.vx);
    }
    if (COORDINATES.y + VELOCITY.vy < 0 && COORDINATES.y + VELOCITY.vy > -8388) {
        document.getElementById("Map").style.top = (COORDINATES.y + VELOCITY.vy) + "px";
        COORDINATES.y = (COORDINATES.y + VELOCITY.vy);
    }


    setTimeout(updateMovement, 1000 / 128);
}

let friction_minSpeed = 5;
let friction_maxSpeed = 100;
let friction_upperThreshHold = 80;
let friction_lowerThreshHold = 20;

let slowDown_minSpeed = 0;
let slowDown_maxSpeed = 0;
let slowDown_lowerThreshHold = 10;
let slowDown_Counter = 0;


function slowDown(speed, didNothing) {
    if (speed < -1) {
        if (!didNothing) {
            slowDown_minSpeed = speed + 5;
            slowDown_lowerThreshHold = speed + 10;
            slowDown_Counter = 0;
        }
        if (speed < slowDown_minSpeed) {
            speed++;
            slowDown_Counter++;
        }
        else if (speed < slowDown_lowerThreshHold) {
            speed += Math.sqrt(slowDown_Counter, 1.5);
            slowDown_Counter += Math.sqrt(slowDown_Counter, 1.5);
        }
        else if (speed > slowDown_lowerThreshHold && speed < slowDown_maxSpeed) {
            speed += Math.sqrt(10, 0.9);
        }
    }
    else if (speed > 1) {
        if (!didNothing) {
            slowDown_minSpeed = speed - 5;
            slowDown_lowerThreshHold = speed - 10;
            slowDown_Counter = 0;
        }
        if (speed > slowDown_minSpeed) {
            speed--;
            slowDown_Counter++;
        }
        else if (speed > slowDown_lowerThreshHold) {
            speed -= Math.sqrt(slowDown_Counter, 1.5);
            slowDown_Counter += Math.sqrt(slowDown_Counter, 1.5);
        }
        else if (speed < slowDown_lowerThreshHold && speed > slowDown_maxSpeed) {
            speed -= Math.sqrt(10, 0.9);
        }
    }
    else {
        speed = 0;
    }
    if(!didNothing) {
        console.log(didNothing);
    }
    return speed;
}