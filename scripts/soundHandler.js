class SoundHandler {
  static sounds = {
    winSound:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a",
    goodSound:
      "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav",
    failSound: "https://rpg.hamsterrepublic.com/wiki-images/d/d7/Oddbounce.ogg",
  };

  static playSound = (sound) => {
    var audio = new Audio(sound);
    audio.play();
  };
}
