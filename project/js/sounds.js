const shootSound = new Howl({
    src: ['./sfx/shoot.wav'],
    volume: 0.25
});

const hitSound = new Howl({
    src: ['./sfx/hit.wav'],
    volume: 0.5
});

const attackSound = new Howl({
    src: ['./sfx/attack.wav'],
    volume: 0.5
});

const deathSound = new Howl({
    src: ['./sfx/death.wav'],
    volume: 0.5
});

const zombieIdleSound = new Howl({
    src: ['./sfx/zombieIdle/zombie1.wav', './sfx/zombieIdle/zombie2.wav', './sfx/zombieIdle/zombie3.wav', './sfx/zombieIdle/zombie4.wav', './sfx/zombieIdle/zombie5.wav', './sfx/zombieIdle/zombie6.wav', './sfx/zombieIdle/zombie7.wav', './sfx/zombieIdle/zombie8.wav', './sfx/zombieIdle/zombie9.wav', './sfx/zombieIdle/zombie10.wav', './sfx/zombieIdle/zombie11.wav', './sfx/zombieIdle/zombie12.wav', './sfx/zombieIdle/zombie13.wav', './sfx/zombieIdle/zombie14.wav', './sfx/zombieIdle/zombie15.wav', './sfx/zombieIdle/zombie16.wav', './sfx/zombieIdle/zombie17.wav', './sfx/zombieIdle/zombie18.wav', './sfx/zombieIdle/zombie19.wav', './sfx/zombieIdle/zombie20.wav', ],
    volume: 0.5
});

const music = new Howl({
    src: ['./music/music.mp3'],
    volume: 0.4,
    loop: true
})