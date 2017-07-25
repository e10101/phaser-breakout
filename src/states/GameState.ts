import * as Phaser from 'phaser';
import { centerGameObjects } from '../utils/utils.ts';
// import { Position } from '../utils/objects.ts';
import BrickSprite from '../sprites/BrickSprite.ts';
import BallSprite from '../sprites/BallSprite.ts';
import PaddleSprite from '../sprites/PaddleSprite.ts';
import { brickInfo, ballInfo, paddleInfo } from '../config.ts';

export default class GameState extends Phaser.State {
  ball: Phaser.Sprite;
  paddle: PaddleSprite;
  bricks: Phaser.Group;

  prevPointerPos: Array<number> = [];

  debugMode: boolean = false;

  preload() {
    console.log('GameState repload');
    this.load.image('ball', 'assets/images/ball.png');
    this.load.image('paddle', 'assets/images/paddle.png');
    this.load.image('brick', 'assets/images/brick.png');
  }

  create() {
    this.stage.backgroundColor = '#eee';

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.physics.arcade.checkCollision.down = false;

    // Create the ball
    this.createBall();

    // Create paddle
    this.createPaddle();

    // Create bricks
    this.createBricks();
  }

  render() {
    if (this.debugMode) {
      this.displayDebugInfo();
    }
  }

  update() {
    this.physics.arcade.collide(this.ball, this.paddle, this.ballAndPaddleCollided);
    this.physics.arcade.collide(this.ball, this.bricks, this.killBrick, null, this);

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
    // const circle = new BallSprite(this.game, 100, 100);
    // this.ball = new BallSprite(this.game, this.world.width * 0.5, this.world.height * 0.5);
    // this.ball = this.add.sprite(this.world.width * 0.5, this.world.height * 0.8, 'ball');

    // Create BitmapData
    const bmd = this.game.add.bitmapData(ballInfo.width, ballInfo.height);
    // Draw circle
    bmd.ctx.fillStyle = ballInfo.color;
    bmd.ctx.beginPath();
    bmd.ctx.arc(ballInfo.width / 2, ballInfo.height / 2, ballInfo.radius, 0, Math.PI * 2, true);
    bmd.ctx.closePath();
    bmd.ctx.fill();
    // Put BitmapData in a Sprite
    this.ball = this.game.add.sprite(this.world.width * 0.5, this.world.height * 0.8, bmd);

    // Physics settings
    this.physics.enable(this.ball, Phaser.Physics.ARCADE);
    this.ball.body.velocity.set(ballInfo.initSpeed.x, ballInfo.initSpeed.y);
    this.ball.body.collideWorldBounds = true;
    this.ball.body.bounce.set(1);
    this.ball.checkWorldBounds = true;

    // centerGameObjects([this.ball]);

    // Add outbound event
    this.ball.events.onOutOfBounds.add(this.gameOver, this);
  }

  createPaddle() {
    // this.paddle = this.add.sprite(this.world.width * 0.5, this.world.height * 0.9, 'paddle');
    // this.paddle = new PaddleSprite(this.game, this.world.width * 0.5, this.world.height * 0.9);

    const bmd = this.game.add.bitmapData(paddleInfo.width, paddleInfo.height);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, paddleInfo.width, paddleInfo.height);
    bmd.ctx.fillStyle = paddleInfo.color;
    bmd.ctx.fill();

    this.paddle = this.game.add.sprite(this.world.width * 0.5, this.world.height * 0.9, bmd);

    // Physics settings
    this.physics.enable(this.paddle, Phaser.Physics.ARCADE);
    this.paddle.body.collideWorldBounds = true;
    this.paddle.body.immovable = true;

    centerGameObjects([this.paddle]);
  }

  createBricks() {
    this.bricks = this.add.group();
    const bi = brickInfo;

    let brickX: number, brickY: number;

    for (let c = 0; c < bi.count.col; c++) {
      for (let r = 0; r < bi.count.row; r++) {
        brickX = (r * (bi.width + bi.padding)) + bi.offset.left;
        brickY = (c * (bi.height + bi.padding)) + bi.offset.top;

        const brick = new BrickSprite(this.game, brickX, brickY);
        // const brick = this.add.sprite(brickX, brickY, 'brick');
        this.physics.enable(brick, Phaser.Physics.ARCADE);
        brick.body.immovable = true;
        // centerGameObjects([brick]);

        this.bricks.add(brick);
      }
    }

    // Center the group
    // centerGameObjects([this.bricks]);
    this.bricks.x = this.world.centerX;
    this.bricks.y = 100;
    this.bricks.pivot = new Phaser.Point(this.bricks.width / 2, this.bricks.height / 2);
  }

  // Simulate friction
  ballAndPaddleCollided(ball, paddle) {
    // ball.body.drag = new Phaser.Point(1000, 0);
    // TODO friction
  }

  killBrick(ball, brick) {
    brick.kill();

    this.checkWin();
  }

  gameOver() {
    this.game.state.start('Over');
  }

  checkWin() {
    const livingCount = this.bricks.countLiving();
    if (livingCount <= this.bricks.children.length - 3) {
      this.game.state.start("Win");
    }
  }

  displayDebugInfo() {
    this.game.debug.start(32, 32);
    this.game.debug.line(`Bricks:`);
    this.game.debug.line(`X: ${this.bricks.x}, Y: ${this.bricks.y}`);
    this.game.debug.line(`Width: ${this.bricks.width}, Height: ${this.bricks.height}`);

    this.game.debug.body(this.ball);

    this.bricks.children.map((brick: Phaser.Sprite) => {
      this.game.debug.body(brick);
    })
    this.game.debug.pixel(this.bricks.x, this.bricks.y, 'red', 4);

    this.game.debug.line(`Paddle:`);
    this.game.debug.line(`X: ${this.paddle.x}, Y: ${this.paddle.y}`);
    this.game.debug.line(`Width: ${this.paddle.width}, Height: ${this.paddle.height}`);
    this.game.debug.pixel(this.paddle.x, this.paddle.y, 'black', 4);
  }
}
