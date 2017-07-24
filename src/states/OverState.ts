import * as Phaser from 'phaser';
import { centerGameObjects } from '../utils/utils.ts';
import { gameOverTextStyle, gameOverNoteStyle } from '../config.ts';

export default class OverState extends Phaser.State {
  gameOverText: Phaser.Text;
  gameOverNote: Phaser.Text;

  create() {

    const bar = this.game.add.graphics(0, 0);
    bar.beginFill(0x4885ed, 1);
    bar.drawRect(0, this.world.centerY - 50, this.world.width, 100);

    this.gameOverText = this.add.text(0, 0, "GAME OVER", gameOverTextStyle);
    this.gameOverText.setTextBounds(0, this.world.centerY - 50, this.world.width, 50);

    this.gameOverNote = this.add.text(0, 0, "Click to restart", gameOverNoteStyle);
    this.gameOverNote.setTextBounds(0, this.world.centerY, this.world.width, 50);


    //the "click to restart" handler
    this.game.input.onTap.addOnce(() => {
      this.game.state.start('Game');
    });
  }
}
