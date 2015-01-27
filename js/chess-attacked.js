//
// Start from http://chessboardjs.com/examples#5003
//
// todo:
//   pieceAttacks(piece, square): list the squares that piece attacks
//
//   attackNumber(square): see how many white pieces attack it and how many
//   black pieces attack it, and return nwhite-nblack
//
//   allow all moves, not just legal ones.  after each move, set the game
//   with game.load(board.fen()).  or maybe we don't need a game object?
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

var greySquare = function(square) {
  var squareEl = $('#board .square-' + square);
  
  var background = '#a9a9a9';
  if (squareEl.hasClass('black-3c85d') === true) {
    background = '#696969';
  }

  squareEl.css('background', background);
};

var onDragStart = function(source, piece) {
  // do not pick up pieces if the game is over
  // or if it's not that side's turn
  if (game.game_over() === true ||
      (game.turn() === 'w' && piece.search(/^b/) !== -1) ||
      (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
    return false;
  }
};

var onDrop = function(source, target) {
  removeGreySquares();

  // see if the move is legal
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q' // NOTE: always promote to a queen for example simplicity
  });

  // illegal move
  if (move === null) return 'snapback';
};

// var onMouseoverSquare = function(square, piece) {
//   // get list of possible moves for this square
//   var moves = game.moves({
//     square: square,
//     verbose: true
//   });

//   // exit if there are no moves available for this square
//   if (moves.length === 0) return;

//   // highlight the square they moused over
//   greySquare(square);

//   // highlight the possible squares for this piece
//   for (var i = 0; i < moves.length; i++) {
//     greySquare(moves[i].to);
//   }
// };

// var onMouseoutSquare = function(square, piece) {
//   removeGreySquares();
// };

var onSnapEnd = function() {
  board.position(game.fen());
};

//
// piece is a two letter string
// first letter is either w for white or b for black
// second letter is one of P,R,N,B,Q,K
//
// square is a two letter string
// first char is a-h, the rank (row)
// second char is 1-8, the file (column)
//
var pieceAttacks = function(board, piece, square) {
    var color = piece.substring(0, 1);
    var type = piece.substring(1, 2);
    var rank = square.substring(0, 1);
    var file = square.substring(1, 2);
    if (type == 'P') {
    }
    else if (type == 'R') {
    }
    else if (type == 'N') {
    }
    else if (type == 'B') {
    }
    else if (type == 'Q') {
    }
    else if (type == 'K') {
    }
    else {
	throw("Unknown piece " + piece + " on square " + square);
    }
};

var cfg = {
  draggable: true,
  position: 'start',
  onDragStart: onDragStart,
  onDrop: onDrop,
  //onMouseoutSquare: onMouseoutSquare,
  //onMouseoverSquare: onMouseoverSquare,
  onSnapEnd: onSnapEnd
};

board = new ChessBoard('board', cfg);
})();
