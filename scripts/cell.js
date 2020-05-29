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
    let msg;
    let sound;
    let div;
    element.className = "good";
    msg = `${MessageHandler.msg.chatWinMessage}`;
    sound = SoundHandler.sounds.winSound;
    div = MessageHandler.alert.win;
    MessageHandler.postMessage(msg, div);
    SoundHandler.playSound(sound);
    game.win = true;
  }
}

class Bonus extends Cell {
  constructor(id, y, x) {
    super(id, y, x);
    this.type = 2;
  }
  execute() {
    const element = document.getElementById(this.id);
    if (element.className !== "unclicked") return;
    let msg;
    let sound;
    let div;
    element.className = "bonus";
    msg = `${MessageHandler.msg.bonusMessage}`;
    sound = SoundHandler.sounds.winSound;
    div = MessageHandler.alert.bonus;
    MessageHandler.postMessage(msg, div);
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
    let msg;
    let sound;
    let div;
    element.className = "malus";
    msg = `${MessageHandler.msg.malusMessage}`;
    sound = SoundHandler.sounds.failSound;
    div = MessageHandler.alert.malus;
    MessageHandler.postMessage(msg, div);
    SoundHandler.playSound(sound);
  }
}
