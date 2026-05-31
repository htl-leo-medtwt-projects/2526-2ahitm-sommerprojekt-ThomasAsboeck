let shootSound;
let hitSound;
let attackSound;
let deathSound;
let music;

function updateSound() {
    shootSound = new Howl({
        src: ['./sfx/shoot.wav'],
        volume: 0.25 * VARIABLES_MENU.masterVolume
    });

    hitSound = new Howl({
        src: ['./sfx/hit.wav'],
        volume: 0.5 * VARIABLES_MENU.masterVolume
    });

    attackSound = new Howl({
        src: ['./sfx/attack.wav'],
        volume: 0.5 * VARIABLES_MENU.masterVolume
    });

    deathSound = new Howl({
        src: ['./sfx/death.wav'],
        volume: 0.5 * VARIABLES_MENU.masterVolume
    });

    music = new Howl({
        src: ['./music/music.mp3'],
        volume: 0.4 * VARIABLES_MENU.masterVolume * VARIABLES_MENU.musicVolume,
        loop: true
    });

    shootSound.stop();
    hitSound.stop();
    attackSound.stop();
    deathSound.stop();
    music.stop();

    shootSound.volume(0.25 * VARIABLES_MENU.masterVolume);
    hitSound.volume(0.5 * VARIABLES_MENU.masterVolume);
    attackSound.volume(0.5 * VARIABLES_MENU.masterVolume);
    deathSound.volume(0.5 * VARIABLES_MENU.masterVolume);
    music.volume(0.4 * VARIABLES_MENU.masterVolume * VARIABLES_MENU.musicVolume);
}
updateSound();
