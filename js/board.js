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
  this.board[x][y] = 2;
}

Board.prototype.setRandomTile = function(){
  var has_empty = this.hasEmptyTile();
  while(has_empty){
    var coord = this.getRandomXY()
    x = coord[0];
    y = coord[1];
    if (this.board[x][y] == 0) {
      this.board[x][y] = this.sample();
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
  var values = [2,2,2,4];
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
      $('#'+id).html(this.board[row][col]);
      id++;
    };
  };
};

