/*
    Classe Grid, l'objet grille de jeu
    Attributs:
        height,                   > Taille verticale de la grille de jeu
        width,                    > Taille horizontale de la grille de jeu
        numberOfCell,             > Nombre de cases dans la grille de jeu
    Fonctions:
        getCellById()             > Permet de get l'objet d'une case grâce à son id
        getCellByY()              > Permet de get un array de cases grâce à son attribut y
        getCellByX()              > Permet de get un array de cases grâce à son attribut x
        getCellByType()           > Permet de get un array de cases grâce à son attribut type
        getUnclickedCellByType()  > Permet de get un array de cases non cliquées grâce à son attribut type
        getUnclickedCell()        > Permet de get un array de cases non cliquées
        getHtml()                 > Permet de génerer le code html de la grille de jeu
        get2DPosCellById()        > Permet de retrouver la position 2D d'une case grâce à son ID
*/

class Grid {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.numberOfCell = 0;
  }

  getCellById(id) {
    return game.cells.find((d) => d.id === id);
  }

  getCellByY(y) {
    return game.cells.filter((d) => d.y === y);
  }

  getCellByX(x) {
    return game.cells.filter((d) => d.x === x);
  }

  getCellByType(type) {
    return game.cells.filter((d) => d.type === type);
  }

  getUnclickedCellByType(type) {
    return game.cells.filter((d) => d.type === type && d.clicked == false);
  }

  getUnclickedCell() {
    return game.cells.filter((d) => d.clicked == false);
  }

  getHtml(id) {
    let html = `<table class="table" id='${id}'>`;
    for (let y = 0; y < this.height; y++) {
      html += "<tr>";
      for (let x = 0; x < this.width; x++) {
        html += `<td onclick="clickedCell('${this.numberOfCell}')" id="${this.numberOfCell}" class="unclicked"></td>`;
        this.numberOfCell++;
      }
      html += "</tr>";
    }
    html += "</table>";
    return html;
  }

  get2DPosCellById(id) {
    let x = Math.floor(id % this.width);
    let y = Math.floor(id / this.width);
    return [y, x];
  }
}
