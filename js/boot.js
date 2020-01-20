var Boot = function (game) {

};

Boot.prototype = {

	preload: function () {

	},

	create: function () {
		game.scale.scaleMode = Phaser.ScaleManager.aspectRatio;
		game.scale.pageAlignVertically = true;
		game.scale.pageAlignHorizontally = true;
		game.scale.setShowAll();
		game.scale.refresh();
		this.game.state.start("Preload");
	}
}