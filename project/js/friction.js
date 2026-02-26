let maxSpeed = 100;
let counter = 2;

function friction(speed, requiresNewCounter) {
    let tempSpeed = speed;
    let isNegative = false;

    if(requiresNewCounter) {
        counter = 2;
    }

    if(speed < 0) {
        tempSpeed = speed * -1;
        isNegative = true;
    }

    if(tempSpeed >= 100) {
        tempSpeed = 100;
    }
    else {
        tempSpeed = Math.sqrt(counter, 1.5);
        counter = Math.sqrt(counter, 1.5);
        if(counter >= 10) {
            counter = 10;
        }
    }
    speed = tempSpeed;
    if(isNegative) {
        speed = tempSpeed * -1;
    }
    return speed;
}