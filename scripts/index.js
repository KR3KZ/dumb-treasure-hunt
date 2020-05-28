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
  document.getElementById("emplacementTable").innerHTML = game.grid.getHtml(
    "fondtable"
  );
  game.generateTreasure();
  game.generateCellsObjects();
}

function clickedCell(id) {
  game.grid.clickedCell(id);
  console.log(game.grid.getCellById(parseInt(id)));
}
