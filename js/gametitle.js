var GameTitle = function (game) {};
var titleScreen;
var logo;

GameTitle.prototype = {

		create: function () {
			game.scale.setShowAll();
			game.scale.refresh();

			//titleScreen = game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, "bgMain");
			titleScreen = game.add.sprite(0, 0,"bgMain");
			logo = game.add.sprite(game.world.centerX - 240,game.world.centerY - 350,"logo");

			var mainFont = "60px Carter One";
			this.game.add.text(this.game.world.centerX - 310, this.game.world.centerY + 250, "Tap anywhere to start", {
				font: mainFont,
				fill: "#000"
			});
			
			/* titleScreen.scale.x(game.width/2846); 
			titleScreen.scale.y(game.height/1600); */
			//titleScreen.autoScroll(-100, 0);
			titleScreen.height = game.height;
			titleScreen.width = game.width;
			titleScreen.smoothed = false;

			logo = game.add.sprite(game.world)

			this.quit = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
			this.resume = this.game.Pointer.LEFT_BUTTON;



			},

			update: function () {

				game.scale.setShowAll();
				game.scale.refresh();
		
				if (this.resume.isDown) {
					this.startGame();
				}
				if (this.quit.isDown) {
					// this.quitGame();
				}
		
			},

			startGame: function () {
				this.game.state.start("Main");
			}

		}
