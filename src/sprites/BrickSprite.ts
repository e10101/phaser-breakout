import * as Phaser from 'phaser';
import { centerGameObjects } from '../utils/utils.ts';
import { brickInfo } from '../config.ts';

export default class BrickSprite extends Phaser.Sprite {
  constructor(game: Phaser.Game, x: number, y: number) {

    var bmd = game.add.bitmapData(brickInfo.width, brickInfo.height);

    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, brickInfo.width, brickInfo.height);
    bmd.ctx.fillStyle = brickInfo.color;
    bmd.ctx.fill();

    super(game, x, y, bmd);
  }
}
