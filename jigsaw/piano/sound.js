  	// used to play sounds during the game
	var Sound = {};
	Sound.play = function (sound) {

			var audio = document.getElementById(sound);
			(audio !== null) ? audio.play(): console.log(sound + " not found");
		
	};


