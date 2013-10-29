Window.onDomReady( function() {
	if($("buttonPlayVideo")) {
		$("buttonPlayVideo").addEvent("mouseup",function(){
			$("buttonPlayVideo").blur();
			var movie = document.tvAd;
			if (movie) movie.Play();
		});
	}
});