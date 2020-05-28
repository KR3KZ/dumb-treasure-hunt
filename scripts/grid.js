class Grid {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.numberOfCell = 0;
  }

  getCellById(id) {
    return game.cells.find((d) => d.id === id);
  }
  
  getHtml(id) {
    let html = `<table id='${id}'>`;
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

  clickedCell(id) {
    if (game.win) return;
    const element = document.getElementById(id);
    //Si la case est cliqué ou que le jeu est terminé on return
    if (element.className !== "unclicked") return;

    let msg;
    let sound;

    game.addTries();

    const pos = game.grid.get2DPosCellById(parseInt(id));
    const y = parseInt(pos[0]);
    const x = parseInt(pos[1]);

    if (y === game.treasure.y && x === game.treasure.x) {
      element.className = "good";
      msg = `${MessageHandler.msg.chatWinMessage}`;
      sound = SoundHandler.sounds.winSound;
      SoundHandler.playSound(SoundHandler.sounds.winSound);
      game.win = true;
    } else if (y === game.treasure.y) {
      element.className = "good-line";
      msg = `${MessageHandler.msg.chatGoodLineMessage}`;
      sound = SoundHandler.sounds.goodSound;
    } else if (x === game.treasure.x) {
      element.className = "good-column";
      msg = `${MessageHandler.msg.chatGoodColumnMessage}`;
      sound = SoundHandler.sounds.goodSound;
    } else {
      element.className = "bad";
      msg = `${MessageHandler.getRandomFailedMessage()}`;
      sound = SoundHandler.sounds.failSound;
    }
    MessageHandler.postMessage(msg);
    SoundHandler.playSound(sound);
  }
}
