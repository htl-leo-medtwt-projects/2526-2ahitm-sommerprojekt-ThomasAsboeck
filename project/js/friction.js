let counterX;
let counterY
let minCounter;
let resistanceCounter = 2;
let maxSpeed = 100;

function frictionX(speed, requiresNewCounter, changePositive) {
    if (changePositive) {

        if (requiresNewCounter) {
            counterY = 2;
            minCounter = speed + 5;
        }

        if (speed >= maxSpeed && isJumping) {
            speed = maxSpeed;
        }
        else if (speed >= maxSpeed && speed < 105) {
            speed = maxSpeed
        }
        else if (speed < minCounter && speed < maxSpeed) {
            speed++;
        }
        else if (speed < maxSpeed){
            speed += Math.sqrt(counterY, 1.5);
            counterY += Math.sqrt(counterY, 1.5);
        }
    }
    else {

        if (requiresNewCounter) {
            counterY = 2;
            minCounter = speed - 5;
        }
        
        if (speed <= -maxSpeed && isJumping) {
            speed = -maxSpeed;
        }
        else if (speed <= -maxSpeed && speed > -105) {
            speed = -maxSpeed
        }
        else if (speed > minCounter && speed > -maxSpeed) {
            speed--;
        }
        else if (speed > -maxSpeed) {
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

        if (speed >= maxSpeed && isJumping) {
            speed = maxSpeed;
        }
        else if (speed >= maxSpeed && speed < 150) {
            speed = maxSpeed
        }
        else if (speed < minCounter && speed < maxSpeed) {
            speed++;
        }
        else if (speed < maxSpeed){
            speed += Math.sqrt(counterY, 1.5);
            counterY += Math.sqrt(counterY, 1.5);
        }
    }
    else {

        if (requiresNewCounter) {
            counterY = 2;
            minCounter = speed - 5;
        }

        if (speed <= -maxSpeed && isJumping) {
            speed = -maxSpeed;
        }
        else if (speed <= -maxSpeed && speed > -150) {
            speed = -maxSpeed
        }
        else if (speed > minCounter && speed > -maxSpeed) {
            speed--;
        }
        else if (speed > -maxSpeed) {
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
        speed += Math.sqrt(resistanceCounter, 2);
        resistanceCounter += Math.sqrt(resistanceCounter, 2);
    }
    else if (speed > 2) {
        speed -= Math.sqrt(resistanceCounter, 2);
        resistanceCounter += Math.sqrt(resistanceCounter, 2);
    }
    else {
        speed = 0;
    }
    if (resistanceCounter > 10) {
        resistanceCounter = 10;
    }
    //console.log("resistance function called");
    return speed;
}