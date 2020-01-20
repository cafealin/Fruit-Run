var Preload = function(game){};

Preload.prototype = {

	preload: function(){ 
		this.game.load.image('tile', 'assets/tile.png');
		this.game.load.image('box', 'assets/box.png');
		game.load.image("logo", "img/logo.png");
		game.load.image("bgMain", "img/rsz_backgroundKitchen-01.png");
		
		this.game.load.spritesheet('player', 'assets/player.png', 67, 67);

		//  Load the Google WebFont Loader script
		game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');

		this.time.advacedTiming = true;
		

	},

	create: function(){
		this.game.state.start("GameTitle");
	}
}
