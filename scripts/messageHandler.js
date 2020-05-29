/*
    Classe Static MessageHandler
      Gère les messages
*/

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

  static alert = {
    bad: "secondary",
    good: "success",
    win: "warning",
    bonus: "info",
    malus: "dark",
  };

  static getRandomFailedMessage = () =>
    MessageHandler.chatFailedMessages[
      Math.floor(Math.random() * MessageHandler.chatFailedMessages.length)
    ];

  static postMessage = (msg, div) => {
    const chatElement = document.getElementById("emplacementCommentaires");
    chatElement.innerHTML += `<div class="alert alert-${div}" role="alert"><br>${Coco.cfg.name}${msg}</div>`;
    chatElement.scroll(chatElement.scrollHeight, chatElement.scrollHeight)
  };
}
