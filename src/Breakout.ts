import * as Phaser from 'phaser';

import BootState from './states/BootState.ts';
import SplashState from './states/SplashState.ts';
import GameState from './states/GameState.ts';
import OverState from './states/OverState.ts';

export class Breakout extends Phaser.Game {
  constructor () {
    let width = document.documentElement.clientWidth > 768 ? 768 : document.documentElement.clientWidth
    let height = document.documentElement.clientHeight > 1024 ? 1024 : document.documentElement.clientHeight

    super(width, height, Phaser.AUTO, 'content', null);

    this.state.add('Boot', BootState, false);
    this.state.add('Splash', SplashState, false);
    this.state.add('Game', GameState, false);
    this.state.add('Over', OverState, false);

    this.state.start('Boot')
  }
}
