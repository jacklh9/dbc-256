  function Collapse(board) {
    this.board = board.board;
  }

  Collapse.prototype.left = function() {
    for(var row = 0; row < MAX_ROWS; row++){
      this.board[row] = this.collapseRowLeft(this.board[row]);
    }
  }

  Collapse.prototype.right = function() {
    for(var row = 0; row < MAX_ROWS; row++){
      this.board[row] = this.collapseRowLeft(this.board[row].reverse()).reverse();
    }
  }

  Collapse.prototype.up = function() {
    var tboard = this.transpose(this.board);
    for(var row = 0; row < MAX_ROWS; row++){
      tboard[row] = this.collapseRowLeft(tboard[row]);
    }
    tboard = this.transpose(tboard);
    for(var row = 0; row < MAX_ROWS; row++){
      this.board[row] = tboard[row];
    }
  }

  Collapse.prototype.down = function() {
    var tboard = this.transpose(this.board);
    for(var row = 0; row < MAX_ROWS; row++){
      tboard[row] = this.collapseRowLeft(tboard[row].reverse()).reverse();
    }
    tboard = this.transpose(tboard);
    for(var row = 0; row < MAX_ROWS; row++){
      this.board[row] = tboard[row];
    }
  }

  // SOURCE: https://gist.github.com/femto113/1784503
  Collapse.prototype.transpose = function(a)
  {
    return a[0].map(function (_, c) { return a.map(function (r) { return r[c]; }); });
  }

  Collapse.prototype.collapseRowLeft = function(arr){
    arr = arr.filter(function(x){ return x > 0 });

    var transformed = [];
    for (var i=0; i < arr.length; i++) {
      if (arr[i] == arr[i+1]) {
        transformed.push(arr[i] * 2);
        i++;
      } else {
        transformed.push(arr[i]);
      }
    }

    while(transformed.length < 4){
      transformed.push(0);
    }
    return transformed;
  }
