import * as Phaser from 'phaser';
import { centerGameObjects } from '../utils/utils.ts';

export default class GameState extends Phaser.State {
    ball: Phaser.Sprite;
    paddle: Phaser.Sprite;

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
        this.createBall();

        // Create paddle
        this.createPaddle();
    }

    render() {

    }

    update() {
        this.physics.arcade.collide(this.ball, this.paddle);
    }

    createBall() {
        // Create the ball
        this.ball = this.add.sprite(this.world.width * 0.5, this.world.height * 0.8, 'ball');

        // Physics settings
        this.physics.enable(this.ball, Phaser.Physics.ARCADE);
        this.ball.body.velocity.set(150, -150);
        this.ball.body.collideWorldBounds = true;
        this.ball.body.bounce.set(1);
        this.ball.checkWorldBounds = true;

        centerGameObjects([this.ball]);

        // Add outbound event
        this.ball.events.onOutOfBounds.add(this.gameOver, this);
    }

    createPaddle() {
        this.paddle = this.add.sprite(this.world.width * 0.5, this.world.height * 0.9, 'paddle');

        // Physics settings
        this.physics.enable(this.paddle, Phaser.Physics.ARCADE);
        this.paddle.body.collideWorldBounds = true;
        this.paddle.body.immovable = true;

        centerGameObjects([this.paddle]);
    }

    gameOver() {
        this.showMenu();
    }

    showMenu() {

    }
}
