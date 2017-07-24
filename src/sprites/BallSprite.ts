import * as Phaser from 'phaser';
import { centerGameObjects } from '../utils/utils.ts';
import { ballInfo } from '../config.ts';

// DO NOT WORK NOW
export default class BallSprite extends Phaser.Sprite {
  constructor(game: Phaser.Game, x: number, y: number) {
    console.log('BallSprite', x, y);
    var bmd = game.add.bitmapData(ballInfo.width, ballInfo.height);

    // // bmd.ctx.beginPath();
    // bmd.ctx.fillStyle = brickInfo.color;
    // bmd.ctx.arc(bmd.width / 2, bmd.height / 2, 50, 0, 2 * Math.PI, true);

    // bmd.ctx.fill();

    // bmd.ctx.fillStyle = '#999999';
    // bmd.ctx.beginPath();
    // bmd.ctx.arc(bmd.width / 2, bmd.height / 2, 50, 0, 2 * Math.PI, true);
    // bmd.ctx.fill();


    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, ballInfo.width, ballInfo.height);
    bmd.ctx.fillStyle = ballInfo.color;
    bmd.ctx.fill();

    // bmd.ctx.fillStyle = '#ff00ff';
    // bmd.ctx.beginPath();
    // bmd.ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
    // bmd.ctx.closePath();
    // bmd.ctx.fill();

    // game.stage.backgroundColor = '#FFFFFF';
    // // Create BitmapData
    // bmd = game.add.bitmapData(800, 600);
    // // Draw circle
    // bmd.ctx.fillStyle = '#999999';
    // bmd.ctx.beginPath();
    // bmd.ctx.arc(300, 200, 100, 0, Math.PI * 2, true);
    // bmd.ctx.closePath();
    // bmd.ctx.fill();
    // // Put BitmapData in a Sprite
    // sprite = game.add.sprite(0, 0, bmd);


    // const circle = bmd.circle(0, 0, 2 * Math.PI, '#ff00ff');

    super(game, x, y, bmd);
  }
}
