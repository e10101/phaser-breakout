import * as Phaser from 'phaser';
import * as WebFont from 'webfontloader';

export default class BootState extends Phaser.State {
  stage: Phaser.Stage;
  fontsReady: boolean;

  init () {
    this.stage.backgroundColor = '#4885ed';
    this.fontsReady = false;
    this.fontsLoaded = this.fontsLoaded.bind(this);
  }

  preload () {
    WebFont.load({
      google: {
        families: ['VT323']
      },
      active: this.fontsLoaded
    })

    let text = this.add.text(this.world.centerX, this.world.centerY, 'loading...', { font: '16px Arial', fill: '#dddddd', align: 'center' });
    text.anchor.setTo(0.5, 0.5);

    // this.load.image('loaderBg', 'assets/images/loader-bg.png');
    // this.load.image('loaderBar', 'assets/images/loader-bar.png');

    this.load.image('yishi', 'assets/images/yishi.jpeg');
    this.load.audio('sfx', 'assets/audio/fx_mixdown.ogg');

  }

  render () {
    if (this.fontsReady) {
      this.game.state.start('Splash');
    }
  }

  fontsLoaded () {
    this.fontsReady = true;
  }

}
