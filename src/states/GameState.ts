import * as Phaser from 'phaser';
import { centerGameObjects } from '../utils/utils.ts';
// import { Position } from '../utils/objects.ts';

export default class GameState extends Phaser.State {
    ball: Phaser.Sprite;
    paddle: Phaser.Sprite;

    prevPointerPos: Array<number> = [];

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

        if (this.input.activePointer.isDown) {
            console.log('activePointer is down');
            const ptr = this.input.activePointer;

            if (this.prevPointerPos.length == 0) {
                this.prevPointerPos = [ptr.x, ptr.y];
            }
            const prevX = this.prevPointerPos[0];

            const offsetX = ptr.x - prevX;
            console.log('ofset x', offsetX);

            // const paddleMoveX = offsetX;
            this.paddle.body.velocity.x = offsetX / (this.time.elapsedMS / 1000);
            console.log('velocity.x', this.paddle.body.velocity.x);

            console.log('x', ptr.x, 'y', ptr.y);

            this.prevPointerPos = [ptr.x, ptr.y];
        }

        if (this.input.activePointer.isUp) {
            this.prevPointerPos = [];
            this.paddle.body.velocity.x = 0;
        }
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
