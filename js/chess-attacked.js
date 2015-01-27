;(function() {
'use strict';

var cfg = {
  draggable: true,
  dropOffBoard: 'snapback', // this is the default
  position: 'start'
};

var board = new ChessBoard('board', cfg);
var game = new Chess();
})();
