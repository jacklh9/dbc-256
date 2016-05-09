function Game(){
  this.board = new Board();
  this.collapse = new Collapse(this.board);

  this.board.display();
  this.board.print();
};

Game.prototype.onKeyUp = function(key){
  if(key == 37){
    this.collapse.left();
    this.newTurn();
  };

  if(key == 38){
    this.collapse.up();
    this.newTurn();
  };

  if(key == 39){
    this.collapse.right();
    this.newTurn();
  };

  if(key == 40){
    this.collapse.down();
    this.newTurn();
  };
};

Game.prototype.newTurn = function(){
  this.board.setRandomTile();
  this.board.display();
  if (!this.board.hasEmptyTile()) {
    if (!this.nextTurnPossible()){
      alert("You lost!");
    }
  }
};

Game.prototype.nextTurnPossible = function() {
  var test_board = new Board();
  test_board.board = this.board.board.slice();
  var test_collapse = new Collapse(test_board);
  test_collapse.up();
  test_collapse.down();
  test_collapse.left();
  test_collapse.right();
  for (var row = 0; row < MAX_ROWS; row++){
    if (this.board.board[row].join('') != test_board.board[row].join('')) {
      return true;
    }
  }
  return false;
}

