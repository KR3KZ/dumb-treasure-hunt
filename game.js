class Game {
  constructor(y, x) {
    this.tries = 0;
    this.win = false;
    this.y = y;
    this.x = x;
    this.html = new Grid(this.y, this.x);
    this.treasure;
  }

  setNewTreasurePos() {
    let pos = this.html.get2DPosCellById(
      Math.floor(Math.random() * (this.html.numberOfCases + 1))
    );
    this.treasure = { y: pos[0], x: pos[1] };
    return this.treasure;
  }
}
