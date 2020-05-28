class Game {
  nbrOfBonus;
  nbrOfMalus;
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

  init() {
    document.getElementById("emplacementTable").innerHTML = game.grid.getHtml(
      "fondtable"
    );

    game.generateCellsObjects();
    game.generateTreasure();
    game.generateBonus();
    game.generateMalus();
  }

  generateCellsObjects() {
    for (let i = 0; i < game.grid.numberOfCell; i++) {
      let pos = this.grid.get2DPosCellById(i);
      let cell = new Cell(i, pos[0], pos[1]);
      this.addCellToCells(cell);
    }
  }

  generateBonus() {
    this.nbrOfBonus = Math.floor(
      Math.random() * (this.grid.numberOfCell + 1) * 0.15
    );
    for (let i = 0; i < this.nbrOfBonus; i++) {
      const randomInt = Math.floor(Math.random() * this.grid.numberOfCell);
      const cell = new Bonus(
        randomInt,
        this.cells[randomInt].y,
        this.cells[randomInt].x
      );
      this.cells[randomInt] = cell;
    }
  }

  generateMalus() {
    this.nbrOfMalus = Math.floor(
      Math.random() * (this.grid.numberOfCell + 1) * 0.15
    );
    for (let i = 0; i < this.nbrOfMalus; i++) {
      const randomInt = Math.floor(Math.random() * this.grid.numberOfCell);
      const cell = new Malus(
        randomInt,
        this.cells[randomInt].y,
        this.cells[randomInt].x
      );
      this.cells[randomInt] = cell;
    }
  }

  generateTreasure() {
    const randomInt = Math.floor(Math.random() * (this.grid.numberOfCell + 1));
    const pos = this.grid.get2DPosCellById(randomInt);
    this.treasure.id = randomInt;
    this.treasure.y = pos[0];
    this.treasure.x = pos[1];
    this.cells[randomInt] = this.treasure;
  }

  addCellToCells(cell) {
    this.cells.push(cell);
  }

  addTries() {
    this.tries++;
    document.getElementById("compte").innerHTML = this.tries;
  }
}
