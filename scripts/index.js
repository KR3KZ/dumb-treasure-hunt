/*
    Index.js
      Permet de démarrer la partie
*/

"use strict";
window.onload = function () {
  init();
};

//On crée la partie avec une grille de 15 par 15 et les bonus/malus sont activés
let game = new Game(15, 15, true);

function init() {
  game.init();
}

//La fonction étant appelé lorsque l'utilisateur clique sur une case de la grille
function clickedCell(id) {
  //On récupère l'objet de la case grâce à son ID
  let cell = game.grid.getCellById(parseInt(id));
  if (!cell.clicked && !game.win) {
    //Si l'utilisateur n'a pas déjà cliqué sur le case, on effectue une suite de tâches
    game.addTries();
    cell.clicked = true;
    cell.execute();
    console.log(cell);
  }
}
