import * as Phaser from 'phaser';
import { centerGameObjects } from '../utils/utils.ts';

export default class GameState extends Phaser.State {
    ball: Phaser.Sprite;

    preload() {
        console.log('GameState repload');
        this.load.image('ball', 'assets/images/ball.png');
        this.load.image('paddle', 'assets/images/paddle.png');
        this.load.image('brick', 'assets/images/brick.png');
    }

    create() {
        this.stage.backgroundColor = '#eee';

        this.physics.startSystem(Phaser.Physics.ARCADE);

        // this.physics.arcade.checkCollision.down = false;

        // Create the ball
        this.ball = this.add.sprite(this.world.width * 0.5, this.world.height - 50, 'ball');
        this.physics.enable(this.ball, Phaser.Physics.ARCADE);
        this.ball.body.velocity.set(150, -150);
        this.ball.body.collideWorldBounds = true;
        this.ball.body.bounce.set(1);
        centerGameObjects([this.ball]);
        this.ball.checkWorldBounds = true;

        this.ball.events.onOutOfBounds.add(this.gameOver, this);
    }

    render() {

    }

    update() {
        // this.physics.arcade.collide(this.ball)
    }

    gameOver() {
        this.showMenu();
    }

    showMenu() {

    }
}
