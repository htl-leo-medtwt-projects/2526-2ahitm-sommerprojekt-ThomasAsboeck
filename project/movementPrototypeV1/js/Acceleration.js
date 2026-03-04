function accelerate(velX, velY, wishDirX, wishDirY, wishSpeed, accel, dt) {
    let result;

    const currentSpeed = velX * wishDirX + velY * wishDirY;

    const addSpeed = wishSpeed - currentSpeed;
    if (addSpeed <= 0) {
        result = [velX, velY];
    }
    else {
        const accelSpeed = accel * wishSpeed * dt;
        const actualAdd = Math.min(accelSpeed, addSpeed);

        result = [
            velX + actualAdd * wishDirX,
            velY + actualAdd * wishDirY
        ]
    }
    return result;
}