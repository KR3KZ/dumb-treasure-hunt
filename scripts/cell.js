/*
    Classe Cell, représente chaque case de la grille
    Attributs:
        id,         > ID de la case
        y,          > Position verticale de la case sur la grille
        x,          > Position horizontale de la case sur la grille
        type,       > Type de la case (case normale, trésor, bonus, malus ?)
        clicked     > true si la case a déjà été cliquée
    Fonctions:
        execute()   > Changement de couleur, affichage du message, lecture du son en fonction de la classe
*/

class Cell {
  constructor(id, y, x) {
    this.id = id;
    this.y = y;
    this.x = x;
    this.type = 0;
    this.clicked = false;
  }
  execute() {
    const element = document.getElementById(this.id);
    if (element.className !== "unclicked") return;
    let msg;
    let sound;
    let div;
    if (this.y === game.treasure.y) {
      element.className = "good-line";
      msg = `${MessageHandler.msg.chatGoodLineMessage}`;
      div = MessageHandler.alert.good;
      sound = SoundHandler.sounds.goodSound;
    } else if (this.x === game.treasure.x) {
      element.className = "good-column";
      msg = `${MessageHandler.msg.chatGoodColumnMessage}`;
      div = MessageHandler.alert.good;
      sound = SoundHandler.sounds.goodSound;
    } else {
      element.className = "bad";
      msg = `${MessageHandler.getRandomFailedMessage()}`;
      div = MessageHandler.alert.bad;
      sound = SoundHandler.sounds.failSound;
    }
    MessageHandler.postMessage(msg, div);
    SoundHandler.playSound(sound);
  }
}

class Treasure extends Cell {
  constructor(id, y, x) {
    super(id, y, x);
    this.type = 1;
  }
  execute() {
    const element = document.getElementById(this.id);
    if (element.className !== "unclicked") return;
    element.className = "good";
    const msg = `${MessageHandler.msg.chatWinMessage}`;
    const sound = SoundHandler.sounds.winSound;
    const div = MessageHandler.alert.win;
    MessageHandler.postMessage(msg, div);
    SoundHandler.playSound(sound);
    game.win = true;
  }
}

class Bonus extends Cell {
  constructor(id, y, x) {
    super(id, y, x);
    this.type = 2;
    this.effect =
      Event.bonus[Math.floor(Math.random() * Object.keys(Event.bonus).length)];
  }
  execute() {
    const element = document.getElementById(this.id);
    if (element.className !== "unclicked") return;
    element.className = "bonus";
    const msg = `${MessageHandler.msg.bonusMessage}`;
    const sound = SoundHandler.sounds.winSound;
    const div = MessageHandler.alert.bonus;
    const bonus = this.effect.description
    this.effect.execute()
    MessageHandler.postMessageWithBonus(msg, div, bonus);
    SoundHandler.playSound(sound);
  }
}

class Malus extends Cell {
  constructor(id, y, x) {
    super(id, y, x);
    this.type = 3;
  }
  execute() {
    const element = document.getElementById(this.id);
    if (element.className !== "unclicked") return;
    element.className = "malus";
    const msg = `${MessageHandler.msg.malusMessage}`;
    const sound = SoundHandler.sounds.failSound;
    const div = MessageHandler.alert.malus;
    MessageHandler.postMessage(msg, div);
    SoundHandler.playSound(sound);
  }
}

class Event {
  static bonus = {
    0: {
      name: "Chanceux !",
      description: "Vous avez trouvé 10 cases inutiles.",
      execute() {
        const res = game.grid.getUnclickedCellByType(0);
        if (res.length > 0) {
          for (let i = 0; i < 10; i++) {
            var cell = res[Math.floor(Math.random() * res.length)];
            cell.clicked = true;
            cell.execute();
          }
        }
      },
    },
    1: {
      name: "Tricheur !",
      description: "Vous avez retiré 5 tentatives au compteur.",
      execute() {
        if (game.tries >= 5) {
          game.setTries(game.tries - 5);
        }
      },
    },
    2: {
      name: "So smart !",
      description: "Vous avez retiré 2 malus de la grille.",
      execute() {
        const res = game.grid.getCellByType(2);
        for (let i = 0; i < 2; i++) {
          const cell = res[Math.floor(Math.random() * res.length)];
          const id = cell.id;
          const y = cell.y;
          const x = cell.x;
          const newCell = new Cell(id, y, x);
          game.cells[id] = newCell;
          game.nbrOfMalus--;
        }
      },
    },
  };

  static malus = {};
}
