//
// Start from http://chessboardjs.com/examples#5003
//
// in chess.js, add:
//   count_attacked(color, square) in chess.js which is a modified function
//   which counts the number of pieces of a given color attacking a given
//   square.
//
// then make these changes:
//   attackNumber(square): see how many white pieces attack it and how many
//   black pieces attack it, and return nwhite-nblack
//
//   allow all moves, not just legal ones.  after each move, set the game
//   with game.load(board.fen()).
//
//   change greySquare to colorSquare.  allow it to take an intensity
//   positive means more and more red.  negative is more and more blue
//
//   updateAttacked(): runs over all squares, computes
//   attacked number, and colors accordingly.  call this in onDrop.
//

;(function() {
'use strict';

var game = new Chess();
var board;

var removeGreySquares = function() {
  $('#board .square-55d63').css('background', '');
};

var colorSquare = function(square, num) {
  var squareEl = $('#board .square-' + square);
  
  if (num == 0) {
    return;
  }
  if (num === undefined) {
    return;
  }

  //console.log("Coloring " + square + " with " + num);

  var black = false;
  if (num < 0) {
    num = -num;
    black = true;
  }
  var background;

  var color = ((15-(num*2))).toString(16);
  color += color;
  if (black) {
    background = '#' + color + 'ffff';
  } else {
    background = '#ff' + color + 'ff';
  }

  squareEl.css('background', background);
}

var onSnapEnd = function() {
  game.load(board.fen() + ' w KQkq - 0 1');
  removeGreySquares();
  updateAttacked();
};

var attackNumber = function(square) {
  return game.count_attacked('w', square) -
	game.count_attacked('b', square);
};

var updateAttacked = function() {
  for (var ii = 0; ii < game.SQUARES.length; ii++) {
    var square = game.SQUARES[ii]
    colorSquare(square, attackNumber(square));
  }
};

var cfg = {
  draggable: true,
  position: 'start',
  onSnapEnd: onSnapEnd,
  dropOffBoard: 'trash',
  sparePieces: true,
};

board = new ChessBoard('board', cfg);
updateAttacked();
})();
