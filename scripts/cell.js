class Cell {
  constructor(id, y, x) {
    this.id = id;
    this.y = y;
    this.x = x;
  }
}

class Treasure extends Cell {
  execute() {}
}

class Bonus extends Cell {
  execute() {}
}

class Malus extends Cell {
  execute() {}
}
