class Game {
  constructor(y, x, useBonusMalus) {
    this.tries = 0;
    this.win = false;
    this.y = y;
    this.x = x;
    this.grid = new Grid(this.y, this.x);
    this.treasure = new Treasure();
    this.cells = [];
    this.useBonusMalus = useBonusMalus;
  }

  generateTreasure() {
    let pos = this.grid.get2DPosCellById(
      Math.floor(Math.random() * (this.grid.numberOfCell + 1))
    );
    this.treasure.y = pos[0];
    this.treasure.x = pos[1];
  }

  generateCellsObjects() {
    for (let i = 0; i < game.grid.numberOfCell; i++) {
      let pos = this.grid.get2DPosCellById(i);
      let cell = new Cell(i, pos[0], pos[1]);
      this.cells.push(cell);
    }
  }

  addTries() {
    this.tries++;
    document.getElementById("compte").innerHTML = this.tries;
  }
}
