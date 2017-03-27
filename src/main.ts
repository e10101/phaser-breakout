/// <reference path="../node_modules/phaser/typescript/phaser.comments.d.ts" />

class Breakout extends Phaser.Game {
    constructor() {
        super();
        
        document.writeln("Hello, World! from Phaser-" + Phaser.VERSION);
    }
}

new Breakout();