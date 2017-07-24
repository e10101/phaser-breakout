import * as Phaser from 'phaser';
import { centerGameObjects } from '../utils/utils.ts';

export default class BrickSprite extends Phaser.Sprite {
  game: Phaser.Game;
  nextFrame: Phaser.Sprite;

  constructor(game: Phaser.Game, x: number, y: number) {
    super(game, x, y, "brick", 0);

    // Physics settings
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;
    this.body.immovable = true;

    centerGameObjects([this]);
  }
}
