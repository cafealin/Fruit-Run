var GameOver = function (game) {};

GameOver.prototype = {

	create: function () {

		var GoBG = game.add.sprite(0, 0,"bgMain");
		GoBG.height = game.height;
		GoBG.smoothed = false;
		GoBG.width = game.width;

		this.quit = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
		this.resume = this.game.input.touch;
		this.showScore();
	},

	update: function () {

		game.scale.setShowAll();
		game.scale.refresh();

		if (this.resume.isDown) {
			this.restartGame();
		}
		if (this.quit.isDown) {
			// this.quitGame();
		}

	},

	showScore: function () {

		var scoreFont = "60px Carter One";

		this.scoreLabel = this.game.add.text(this.game.world.centerX, this.game.world.centerY / 2, "0", {
			font: scoreFont,
			fill: "#000"
		});
		this.scoreLabel.anchor.setTo(0.5, 0.5);
		this.scoreLabel.align = 'center';
		this.game.world.bringToTop(this.scoreLabel);
		this.scoreLabel.text = "Your score is " + (score);

		this.highScore = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "0", {
			font: scoreFont,
			fill: "#000"
		});
		this.highScore.anchor.setTo(0.5, 0.5);
		this.highScore.align = 'center';
		this.game.world.bringToTop(this.highScore);

		this.hs = window.localStorage.getItem('HighScore');

		if (this.hs == null) {
			this.highScore.setText("High score: " + score);
			window.localStorage.setItem('HighScore', score)
		} else if (parseInt(this.hs) < score) {
			this.highScore.setText("High score: " + (score));
			window.localStorage.setItem('HighScore', score)

		} else {
			this.highScore.setText("High score: " + this.hs);
		}

		this.restart = this.game.add.text(this.game.world.centerX, this.game.world.centerY * 1.5, "Tap the screen to continue ", {
			font: scoreFont,
			fill: "#000"
		});
		this.restart.anchor.setTo(0.5, 0.5);
		this.restart.align = 'center';
		this.game.world.bringToTop(this.restart);
		// this.scoreLabel.bringToTop()

	},

	restartGame: function () {
		this.game.state.start("Main");
	}

}
