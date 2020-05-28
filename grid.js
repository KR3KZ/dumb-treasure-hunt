class Grid {
  constructor(y, x) {
    this.y = y;
    this.x = x;
    this.numberOfCases = 0;
  }

  getHtml(id) {
    let html = `<table id='${id}'>`;
    for (let y = 0; y < this.y; y++) {
      html += "<tr>";
      for (let x = 0; x < this.x; x++) {
        html += `<td onclick="clickedCase('${this.numberOfCases}')" id="${this.numberOfCases}" class="unclicked"></td>`;
        this.numberOfCases++;
      }
      html += "</tr>";
    }
    html += "</table>";
    return html;
  }

  get2DPosCellById(id) {
    let x = Math.floor(id % this.x);
    let y = Math.floor(id / this.x);
    return [y, x];
  }
}
