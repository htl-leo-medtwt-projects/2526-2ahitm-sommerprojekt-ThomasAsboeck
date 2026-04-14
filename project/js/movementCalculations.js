const acceleration = 5;
const maxSpeed = 320;
let wishY;
let wishX;
let velocityY = 0;
let velocityX = 0;

function movementCalculations() {
    if(KEY_EVENTS.w && !KEY_EVENTS.s) {
        wishY = -1;
    }
    if(!KEY_EVENTS.w && KEY_EVENTS.s) {
        wishY = 1;
    }
    if(!KEY_EVENTS.w && !KEY_EVENTS.s || KEY_EVENTS.w && KEY_EVENTS.s) {
        wishY = 0;
    }
    if(KEY_EVENTS.a && !KEY_EVENTS.d) {
        wishX = -1;
    }
    if(!KEY_EVENTS.a && KEY_EVENTS.d) {
        wishX = 1;
    }
    if(!KEY_EVENTS.a && !KEY_EVENTS.d || KEY_EVENTS.a && KEY_EVENTS.d) {
        wishX = 0;
    }

    if(wishX != 0 && wishY != 0) {
        let wishLength = Math.sqrt(Math.pow(wishX, 2) + Math.pow(wishY, 2));
        wishX = wishX / wishLength;
        wishY = wishY / wishLength;
    }


    velocityX += wishX * acceleration * deltaTime;
    velocityY += wishY * acceleration * deltaTime;

    let velocityLength = Math.sqrt(Math.pow(velocityX, 2) + Math.pow(velocityY, 2));

    if(velocityLength > maxSpeed) {
        velocityX = velocityX / velocityLength * maxSpeed;
        velocityY = velocityY / velocityLength * maxSpeed;
    }

    console.log(velocityX + "   " + velocityY);
}