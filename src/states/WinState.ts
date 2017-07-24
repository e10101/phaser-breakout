import * as Phaser from 'phaser';
import { centerGameObjects } from '../utils/utils.ts';
import { gameWinUI } from '../config.ts';

export default class OverState extends Phaser.State {
  winText: Phaser.Text;
  winNote: Phaser.Text;

  create() {
    const bar = this.game.add.graphics(0, 0);
    bar.beginFill(gameWinUI.backColorHex, 1);
    bar.drawRect(0, this.world.centerY - 50, this.world.width, 100);

    this.winText = this.add.text(0, 0, gameWinUI.title, gameWinUI.titleStyle);
    this.winText.setTextBounds(0, this.world.centerY - 50, this.world.width, 50);

    this.winNote = this.add.text(0, 0, gameWinUI.subTitle, gameWinUI.subTitleStyle);
    this.winNote.setTextBounds(0, this.world.centerY, this.world.width, 50);

    //the "click to restart" handler
    this.game.input.onTap.addOnce(() => {
      this.game.state.start('Game');
    });
  }
}
