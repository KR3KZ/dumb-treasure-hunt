class MessageHandler {
  //Messages du chat
  static chatFailedMessages = [
    "T'es naze",
    "Nul nul nul",
    "Absolument pas !",
    "Eclaté au sol",
  ];
  static msg = {
    chatGoodLineMessage: "T'es sur la bonne ligne !",
    chatGoodColumnMessage: "T'es sur la bonne colonne !",
    chatWinMessage: "GG bg",
    bonusMessage: "Tu as trouvé un bonus !",
    malusMessage: "Aie, malus !",
  };

  static getRandomFailedMessage = () =>
    MessageHandler.chatFailedMessages[
      Math.floor(Math.random() * MessageHandler.chatFailedMessages.length)
    ];

  static postMessage = (msg) => {
    const chatElement = document.getElementById("emplacementCommentaires");
    chatElement.innerHTML += `<br>${Coco.cfg.name}${msg}`;
  };
}
