# README #

## Instructions ##

### Breakout ###
We are going old school and want to test your skills at creating a Breakout game.  There are a number of breakout style games available on the internet for you to test out.

### Functional Requirements ###
1. The ball should rebound off the sides, top of the game board and off the paddle. 
2. If the ball falls off the bottom of the board the game is over or a life is lost.
3. The game should be re-playable without refreshing the page.
4. Needs to be playable on a mobile browser, and scale to fit the screen size.

### What we're looking for ###
* The process you used to complete this test
* Prudent use of Object Orientated design
* Code reusability
* Extensibility and maintainability of the software
* Your creativity in making the game fun

### Deliverables ###
* Instructions on how to run your application
* Code should be committed to a git repository hosted on [bitbucket.org](https://bitbucket.org)

### Extra Credit ###
* Can be played in both orientations; landscape and portrait
* Can be installed as an app
* Any extra features you want to include in the game

## Technology ##
You can use any web-based technologies you are most comfortable with. In this repository we have set up a basic project using the following:

* **Nodejs** with **npm** for running the build commands and managing dependencies
* **Typescript** as the development language
* **Phaser** as the game engine

Feel free to use this as is, or modify it to fit your needs. Make sure to include build and run instructions if they differ from what we have provided.

## How do I get set up? ##

* [Fork](../../fork) this repository to your bitbucket account, then clone it to your local machine
* Install [nodejs](https://nodejs.org/en/download/)

Open a shell/command prompt in the repository root and run the following:

* Install dependencies
```
npm install
```
* Build project
```
npm run build
```
* Start hosting local webserver
```
npm start
```

Visit [localhost:8080](http://localhost:8080) in your browser to view the output.

Leave the webserver running while you develop so you can test your changes. Rerun the build command to build, then hard-refresh the browser window.

## Next Steps ##
After you have finished your submission, make sure the reviewers have read access to your repository. Our developers will review your submission and then invite you in for a discussion.