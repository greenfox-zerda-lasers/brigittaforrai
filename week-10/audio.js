var Audio = (function () {
	var audioNode = document.createElement('audio');
	var timeCallback = function(){};
	var endCallback = function(){};

	audioNode.addEventListener('timeupdate', function(){
		var percent = audioNode.currentTime / audioNode.duration * 100;
		timeCallback( percent, audioNode.currentTime );
	});

	audioNode.addEventListener('ended', function(){
		endCallback();
	});

	function setUpdateEvent( cb ) {
		timeCallback = cb;
	}

	function setCompleteEvent( cb ) {
		endCallback = cb;
	}

	function load( url ) {
		audioNode.src = url;
	}

	function play(){
		audioNode.play();
	}

	function pause(){
		audioNode.pause();
	}

	// expects between 0-100 value
	function seek( percent ){
		audioNode.currentTime = audioNode.duration * percent / 100;
	}

	function isPaused() {
		return audioNode.paused;
	}

	return {
		load: load,
		play: play,
		pause: pause,
		seek: seek,
		onUpdate: setUpdateEvent,
		onComplete: setCompleteEvent,
		paused: isPaused
	}
})();
