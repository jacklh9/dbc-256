function toggleZoomScreen() {
	document.body.style.zoom="65%";
}


$(function() {
  toggleZoomScreen();
  var game = new Game();

  $(document).keyup(function(event){
    game.onKeyUp(event.which);
  });
});

