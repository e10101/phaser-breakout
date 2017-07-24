import * as Phaser from 'phaser';
import { centerGameObjects } from '../utils/utils.ts';
import { gameOverTextStyle } from '../config.ts';

export default class OverState extends Phaser.State {
  gameOverText: Phaser.Text;
  create() {

    const bar = this.game.add.graphics(0, 0);
    bar.beginFill(0x000000, 0.2);
    bar.drawRect(0, this.world.centerY, this.world.width, 100);

    this.gameOverText = this.add.text(0, 0, "GAME OVER", gameOverTextStyle);
    this.gameOverText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    // centerGameObjects([this.gameOverText]);
    this.gameOverText.setTextBounds(0, this.world.centerY, this.world.width, 100);
  }
}
