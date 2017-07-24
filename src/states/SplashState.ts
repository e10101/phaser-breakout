import * as Phaser from 'phaser';
import {centerGameObjects} from '../utils/utils.ts';
import { splashUI } from '../config.ts';

export default class SplashState extends Phaser.State {
  portrait: Phaser.Sprite;

  create() {
    this.portrait = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'yishi');

    // Scale the image
    const maxLength = this.world.height < this.world.width ? this.world.height : this.world.width;
    const scale = maxLength / 2 - this.portrait.height > 0 ? 1 : maxLength / 2 / this.portrait.height;
    this.portrait.scale = new Phaser.Point(scale, scale);
    console.log('scale', scale);

    centerGameObjects([this.portrait]);

    this.portrait.y -= this.game.world.centerY * 0.1;

    // Bar and texts
    const bar = this.game.add.graphics(0, 0);
    bar.beginFill(splashUI.backColorHex, 0.2);
    bar.drawRect(0, this.world.height - 100, this.world.width, 100);

    const title = this.add.text(0, 0, splashUI.title, splashUI.titleStyle);
    title.setTextBounds(0, this.world.height - 100, this.world.width, 50);

    const subTitle = this.add.text(0, 0, splashUI.subTitle, splashUI.subTitleStyle);
    subTitle.setTextBounds(0, this.world.height - 50, this.world.width, 50);

    //the "click to restart" handler
    this.game.input.onTap.addOnce(() => {
      this.playGame();
    });
  }

  playGame () {
    this.game.state.start('Game');
  }
}
