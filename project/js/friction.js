let counterX;
let counterY
let minCounter;
let resistanceCounter = 2;

function frictionX(speed, requiresNewCounter, changePositive) {
    if (changePositive) {

        if (requiresNewCounter) {
            counterY = 2;
            minCounter = speed + 5;
        }

        if (speed >= 100) {
            speed = 100;
        }
        else if (speed < minCounter) {
            speed++;
        }
        else {
            speed += Math.sqrt(counterY, 1.5);
            counterY += Math.sqrt(counterY, 1.5);
        }
    }
    else {

        if (requiresNewCounter) {
            counterY = 2;
            minCounter = speed - 5;
        }

        if (speed <= -100) {
            speed = -100;
        }
        else if (speed > minCounter) {
            speed--;
        }
        else {
            speed -= Math.sqrt(counterY, 1.5);
            counterY += Math.sqrt(counterY, 1.5);
        }
    }
    if (counterY >= 10) {
        counterY = 10;
    }
    return speed;
}

function frictionY(speed, requiresNewCounter, changePositive) {
    if (changePositive) {

        if (requiresNewCounter) {
            counterY = 2;
            minCounter = speed + 5;
        }

        if (speed >= 100) {
            speed = 100;
        }
        else if (speed < minCounter) {
            speed++;
        }
        else {
            speed += Math.sqrt(counterY, 1.5);
            counterY += Math.sqrt(counterY, 1.5);
        }
    }
    else {

        if (requiresNewCounter) {
            counterY = 2;
            minCounter = speed - 5;
        }

        if (speed <= -100) {
            speed = -100;
        }
        else if (speed > minCounter) {
            speed--;
        }
        else {
            speed -= Math.sqrt(counterY, 1.5);
            counterY += Math.sqrt(counterY, 1.5);
        }
    }
    if (counterY >= 10) {
        counterY = 10;
    }
    return speed;
}

function resistance(speed, requiresNewCounter) {
    if (requiresNewCounter) {
        resistanceCounter = 2;
    }
    if (speed < -2) {
        speed += Math.sqrt(resistanceCounter, 1.5);
        resistanceCounter += Math.sqrt(resistanceCounter, 1.5);
    }
    else if (speed > 2) {
        speed -= Math.sqrt(resistanceCounter, 1.5);
        resistanceCounter += Math.sqrt(resistanceCounter, 1.5);
    }
    else {
        speed = 0;
    }
    if (resistanceCounter > 10) {
        resistanceCounter = 10;
    }
    console.log("resistance function called");
    return speed;
}