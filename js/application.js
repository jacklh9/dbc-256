$(document).ready(function() {
  var game = new Game();

  $(document).keyup(function(event){
    game.onKeyUp(event.which);
  });
});

