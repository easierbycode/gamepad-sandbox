
export default class Scene1 extends Phaser.Scene {
    constructor() {
        super('Scene1');
    }

    create() {
        this.input.gamepad.on('down', (gamepad, btn, idx) => {
            vibrate(gamepad);
        });
    }
}


const vibrate = (gamepad, duration = 1000) => {
    if (!("vibration" in gamepad)) {
        return;
    }
    gamepad.vibration.playEffect("dual-rumble", {
        startDelay: 0,
        duration: duration,
        weakMagnitude: .2,
        strongMagnitude: .5,
    });
};