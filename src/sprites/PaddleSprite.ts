import * as Phaser from 'phaser';
import { centerGameObjects } from '../utils/utils.ts';
import { paddleInfo } from '../config.ts';

// DOES NOT WORK NOW

export default class PaddleSprite extends Phaser.Sprite {
  constructor(game: Phaser.Game, x: number, y: number) {

    var bmd = game.add.bitmapData(paddleInfo.width, paddleInfo.height);

    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, paddleInfo.width, paddleInfo.height);
    bmd.ctx.fillStyle = paddleInfo.color;
    bmd.ctx.fill();

    super(game, x, y, bmd);
  }
}
