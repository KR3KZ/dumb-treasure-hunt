//Johan GAUTHIER
//Chasse au trésor
//JS
//23-03-2020

"use strict";
window.onload = function () {
  init();
};

let game = new Game(15, 15, true);

function init() {
  game.init();
}

function clickedCell(id) {
  let cell = game.grid.getCellById(parseInt(id));
  if (!cell.clicked) {
    game.addTries();
    cell.execute();
    cell.clicked = true;
    console.log(cell);
  }
}
