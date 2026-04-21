const acceleration = 0.1;
const maxSpeed = 32 / 5;
const friction = 0.9;
let wishY;
let wishX;
let velocityY = 0;
let velocityX = 0;
let forwardX = 0;
let forwardY = 0;
let forwardLength = 0;
let rightX = 0;
let rightY = 0;
let playerX = 320;
let playerY = 180;


function movementCalculations() {

    forwardX = KEY_EVENTS.mouseX - playerX;
    forwardY = KEY_EVENTS.mouseY - playerY;

    if (forwardX != 0 && forwardY != 0) {
        let forwardLength = Math.sqrt(Math.pow(forwardX, 2) + Math.pow(forwardY, 2));
        forwardX = forwardX / forwardLength;
        forwardY = forwardY / forwardLength;
    }

    rightX = forwardY;
    rightY = -forwardX;

    wishY = 0;
    wishX = 0;

    if (KEY_EVENTS.w && !KEY_EVENTS.s) {
        wishX += forwardX;
        wishY -= forwardY;
    }
    if (!KEY_EVENTS.w && KEY_EVENTS.s) {
        wishX -= forwardX;
        wishY += forwardY;
    }
    if (KEY_EVENTS.a && !KEY_EVENTS.d) {
        wishX -= rightX;
        wishY += rightY;
    }
    if (!KEY_EVENTS.a && KEY_EVENTS.d) {
        wishX += rightX;
        wishY -= rightY;
    }


    let wishLength = Math.sqrt(Math.pow(wishX, 2) + Math.pow(wishY, 2));
    if (wishLength < 0) {
        wishX = wishX / wishLength;
        wishY = wishY / wishLength;
    }


    velocityX += wishX * acceleration * deltaTime;
    velocityY += wishY * acceleration * deltaTime;

    let velocityLength = Math.sqrt(Math.pow(velocityX, 2) + Math.pow(velocityY, 2));

    if (velocityLength > maxSpeed) {
        velocityX = velocityX / velocityLength * maxSpeed;
        velocityY = velocityY / velocityLength * maxSpeed;
    }


    if (wishX == 0 && wishY == 0) {
        velocityX = velocityX * friction;
        velocityY = velocityY * friction;
        if (Math.abs(velocityX) < 1) {
            velocityX = 0;
        }
        if (Math.abs(velocityY) < 1) {
            velocityY = 0;
        }
    }
}