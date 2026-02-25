/// <reference path="test.js"/>

let VELOCITY = {
    vx: 0.0,
    vy: 0.0,
    vz: 0.0
}

let COORDINATES = {
    x: 0,
    y: 0
}

let wasPositive;
let isPositive;
let didNothingY = false;
let didNothingX = false;

function updateMovement() {
    if (KEY_EVENTS.keyRight) {
        isPositive = true;
        VELOCITY.vx = friction(VELOCITY.vx);
        wasPositive = true;
    }
    if (KEY_EVENTS.keyLeft) {
        isPositive = false;
        VELOCITY.vx = -1 * friction(VELOCITY.vx * -1);
        wasPositive = false;
    }
    if (KEY_EVENTS.keyUp) {
        isPositive = true;
        VELOCITY.vy = friction(VELOCITY.vy);
        wasPositive = true;
    }
    if (KEY_EVENTS.keyDown) {
        isPositive = false;
        VELOCITY.vy = -1 * friction(VELOCITY.vy * -1);
        wasPositive = false;
    }



    if (!KEY_EVENTS.keyRight && !KEY_EVENTS.keyLeft) {
        VELOCITY.vx = slowDown(VELOCITY.vx, didNothingX);
        didNothingX = true;
    }
    else {
        didNothingX = false;
    }

    if (!KEY_EVENTS.keyUp && !KEY_EVENTS.keyDown) {
        VELOCITY.vy = slowDown(VELOCITY.vy, didNothingY);
        didNothingY = true;
    }
    else {
        didNothingY = false;
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



function friction(speed) {
    let positiveSpeed = speed;
    if (wasPositive != isPositive) {
        friction_minSpeed = speed + 5;
        friction_lowerThreshHold = speed + 20;
    }
    if (speed < 0) {
        positiveSpeed = speed + 100;
    }
    if (speed >= friction_maxSpeed) {
        speed = 100;
    }
    else if (speed < friction_minSpeed) {
        speed++;
    }
    else if (speed < friction_lowerThreshHold) {
        speed += Math.sqrt(positiveSpeed, 1.1);
    }
    else if (speed < friction_upperThreshHold) {
        speed += Math.sqrt(20, 1.1);
    }
    else if (speed > friction_upperThreshHold && speed < friction_maxSpeed) {
        speed += Math.sqrt(20, 0.8);
    }
    return speed;
}
