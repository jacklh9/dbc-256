MAX_ROWS = 4;
MAX_COLS = 4;

function Board() {
  this.board =
 [[0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]];

  this.initialSetup();
};

Board.prototype.getRandomXY = function(){
  var x = Math.floor(Math.random() * MAX_ROWS);
  var y = Math.floor(Math.random() * MAX_ROWS);
  return [x,y];
}

Board.prototype.initialSetup = function(){
  this.setFirstTile();
  this.setRandomTile();
}

Board.prototype.setFirstTile = function(){
  var coord = this.getRandomXY()
  x = coord[0];
  y = coord[1];
  this.board[x][y] = -2;
}

Board.prototype.setRandomTile = function(){
  var has_empty = this.hasEmptyTile();
  while(has_empty){
    var coord = this.getRandomXY()
    x = coord[0];
    y = coord[1];
    if (this.board[x][y] == 0) {
      this.board[x][y] = this.sample() * -1;
      break;
    }
  }
}

Board.prototype.hasEmptyTile = function(){
  for (var row = 0; row < MAX_ROWS; row++) {
    for (var col = 0; col < MAX_COLS; col++) {
      if (this.board[row][col] == 0) {
        return true;
      }
    }
  }
  return false;
}

Board.prototype.sample= function() {
  var values = [2,2,2,4];  // 75% of the time you get a '2' and 25% a '4'
  var index = Math.floor(Math.random() * MAX_ROWS);
  return values[index];
}

Board.prototype.print = function(){
  for (var row = 0; row < MAX_ROWS; row++) {
    console.log(this.board[row]);
  }
}

Board.prototype.display = function(){
  var id = 0;
  for(var row = 0; row < MAX_ROWS; row++){
    for(var col = 0; col < MAX_COLS; col++){
      var value = this.board[row][col];
      var color = ((value * 10) % 255);
      if (value > 0) {
        $('#'+id).html('<span class="number">' + value + '</span>');
        $('#'+id).css('background-color', 'rgb(100,100,' + color + ')'); 
        $('#'+id).removeClass('empty');
        $('#'+id).removeClass('new');
      } else if (value < 0) {
        this.board[row][col] *= -1;
        value = this.board[row][col];        
        $('#'+id).removeClass('empty');
        $('#'+id).addClass('new');
        $('#'+id).html('<span class="number">' + value + '</span>');
        $('#'+id).css('background-color', 'rgb(100,100,' + color + ')'); 
      } else {
        $('#'+id).html('');
        $('#'+id).addClass('empty');
        $('#'+id).removeClass('new');
        $('#'+id).css('background-color', '');
      }
      id++;
    };
  };
};

