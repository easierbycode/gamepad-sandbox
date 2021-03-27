
import Scene1 from './scene1';


export var config: Phaser.Types.Core.GameConfig = {
    width: 1280,
    height: 768,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    input: {
        gamepad: true
    },
    render: {
        pixelArt: true
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: Scene1
}