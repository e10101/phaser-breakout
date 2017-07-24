# Breakout Cerebralfix

## TODO
 - [x] Add friction to paddle
 - [x] Add bricks
 - [x] Add brick kill function
 - [ ] Add bricks auto scale function
 - [x] Add out box check
 - [x] Add GameOver state
 - [x] Refactor the image to code based sprite
 - [x] Check win
 - [ ] Add sound effect
 - [x] Implement splash state
 - [ ] Mobile friendly
 - [ ] Add animation
 - [ ] Faster on mobile or large screen.

## RESEARCH HISTORY

### Doc
 - https://phaser.io/docs/2.6.2/index

### How Phase work and get start
 - [Creating a complete HTML5 game from scratch using Phaser and TypeScript Part One](https://www.youtube.com/watch?v=T8a8-SO6vP0&t=397s)

### Breakout game in Phaser
 - [Youtube: Breakout Game in Phaser Tutorial Part 1](https://www.youtube.com/watch?v=D_J6AOLSmo0&t=5s)
 - [Youtube: Breakout Game in Phaser Tutorial Part 2](https://www.youtube.com/watch?v=kmgqHwwmw18)

### Phaser with TypeScript
 - http://www.tonylunt.com/typescript/setting-up-phaser-with-typescript-in-visual-studio-2015/

### Phaser starterkit
 - https://github.com/rroylance/phaser-npm-webpack-typescript-starter-project
 - https://github.com/heathkit/phaser-typescript-webpack-starter
 - [code examples](https://github.com/serapth/PhaserTypescript)

### States and lifecycle
 - http://www.emanueleferonato.com/2014/08/28/phaser-tutorial-understanding-phaser-states/
 - http://www.html5gamedevs.com/topic/1372-phaser-function-order-reserved-names-and-special-uses/

### Draw box
 - https://phaser.io/examples/v2/display/graphics

### Create MENU
 - https://phaser.io/examples/v2/misc/pause-menu
 - https://github.com/MattMcFarland/phaser-menu-system

### Physics
 - https://phaser.io/examples/v2/category/arcade-physics

### Webpack add custom css
 - https://webpack.github.io/docs/stylesheets.html
 - https://www.npmjs.com/package/html-webpack-plugin

### Touch / mouse input

#### Learned:
 `mousePointer`: The most recently active Pointer object. When you've limited max pointers to 1 this will accurately be either the first finger touched or mouse.

`activePointer`: The mouse has its own unique Phaser.Pointer object which you can use if making a desktop specific game.

`pointer1`: does not work when mouse click.

 - https://phaser.io/docs/2.4.3/Phaser.Pointer.html
 - https://phaser.io/examples/v2/input/follow-mouse
 - https://phaser.io/examples/v2/input/snap-on-drag
 - https://phaser.io/examples/v2/input/drag-update-multiple
 - https://phaser.io/examples/v2/input/drag-update
 - https://phaser.io/examples/v2/input/drag-event-parameters
 - https://stackoverflow.com/questions/28104605/how-to-find-the-mouse-position-x-y-using-phaser

### Typescript export class / static class
 - https://github.com/Microsoft/TypeScript/issues/10058
 - https://stackoverflow.com/questions/13212521/typescript-static-classes

### Move to
 - https://phaser.io/examples/v2/arcade-physics/move-towards-object
 - https://phaser.io/examples/v2/arcade-physics/move-over-distance
 - https://phaser.io/docs/2.4.3/Phaser.Physics.Arcade.Body.html#velocity

### update delta
 - https://phaser.io/docs/2.6.2/Phaser.Time.html

### Drag
 - http://www.html5gamedevs.com/topic/24887-sprite-moving-using-input-coordinates/

### Friction
 - https://phaser.io/examples/v2/box2d/varying-friction
 - https://phaser.io/docs/2.6.2/Phaser.Physics.Arcade.Body.html#friction
 - http://www.html5gamedevs.com/topic/28840-arcade-physics-friction/
 - http://phaser.io/docs/2.6.2/Phaser.Physics.Arcade.Body.html

### Box2D

Need buy, pass.

 - http://www.html5gamedevs.com/topic/25279-uncaught-typeerror-cphysicsbox2d-is-not-a-constructor/

### By usning collide callback function simulate friction
 - http://phaser.io/docs/2.6.2/Phaser.Physics.Arcade.html#collide
 - https://phaser.io/examples/v2/arcade-physics/bounce-accelerator

### Add Bricks
 - http://www.html5gamedevs.com/topic/21685-extending-sprite-error-typescript/
 - http://www.html5gamedevs.com/topic/14496-inheritance-in-typescript/

### Typescript export config
 - https://stackoverflow.com/questions/41762570/how-to-export-object-in-typescript

### Destroy sprite
 - https://phaser.io/examples/v2/sprites/destroy
 - http://www.html5gamedevs.com/topic/4774-destroy-a-sprite/

### Group scale
 - https://phaser.io/docs/2.6.2/Phaser.Group.html
 - https://phaser.io/examples/v2/groups/group-scale
 - https://www.joshmorony.com/how-to-scale-a-game-for-all-device-sizes-in-phaser/
 - http://www.html5gamedevs.com/topic/5949-solution-scaling-for-multiple-devicesresolution-and-screens/

### Centering canvas
 - http://www.html5gamedevs.com/topic/1609-centering-canvas/

### Debug game
 - https://phaser.io/examples/v2/arcade-physics/offset-bounding-box
 - http://www.html5gamedevs.com/topic/8022-gamedebugbody-issues/
 - http://phaser.io/docs/2.4.4/Phaser.Utils.Debug.html
 - https://gamedevacademy.org/how-to-debug-phaser-games/

### Group position

Use the pivot of group, not the anchor. becouse anchor is used for sprite.

 - http://www.html5gamedevs.com/topic/4277-group-anchorpivot/

### Out of bounds check
 - https://phaser.io/examples/v2/sprites/out-of-bounds

### Add text
 - https://phaser.io/examples/v2/category/text
 - https://phaser.io/examples/v2/text/center-text
 - https://phaser.io/examples/v2/text/center-text-on-sprite

### Game over
 - http://www.html5gamedevs.com/topic/26379-game-over-screen-destroy-complete-state/
 - http://www.html5gamedevs.com/topic/3893-how-to-restart-a-game/

### Draw box / circle sprite
 - http://www.html5gamedevs.com/topic/7620-draw-solid-rectangle/
 - http://www.html5gamedevs.com/topic/13555-drawing-a-circle-with-bitmapdata/
 - http://examples.phaser.io/_site/view_full.html?d=display&f=graphics.js&t=graphics
 - https://stackoverflow.com/questions/29382710/drawing-a-circle-with-bitmapdata

### Google colors
 - https://designpieces.com/palette/google-new-logo-2015-color-palette-hex-and-rgb/

### Group all killed count
 - https://stackoverflow.com/questions/36439565/killing-all-elements-in-a-groupphaser

### Collide callback
 - http://www.html5gamedevs.com/topic/8629-passing-arguments-to-collide-callback-function/
 - http://www.html5gamedevs.com/topic/4663-collision-callback/

### Mobile friendly
 - http://www.emanueleferonato.com/2015/02/26/the-basics-of-responsive-html5-games/
 - https://hacks.mozilla.org/2015/12/from-game-jam-to-mobile-and-firefox-os/

### Tween
 - https://phaser.io/examples/v2/tweens/fading-in-a-sprite
 - http://phaser.io/docs/2.4.4/Phaser.Tween.html
