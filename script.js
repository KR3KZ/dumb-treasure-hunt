//Johan GAUTHIER
//Chasse au trésor
//JS
//23-03-2020

"use strict"
window.onload = function () { initTab(); }

let game = new Game(14, 21)

//Messages du chat
const chatFailedMessages = [
    "T'es naze",
    "Nul nul nul",
    "Absolument pas !",
    "Eclaté au sol"
]
const chatGoodLineMessage = "T'es sur la bonne ligne !"
const chatGoodColumnMessage = "T'es sur la bonne colonne !"
const chatWinMessage = "GG bg"
const chatBaseMessage = "<b>Coco: </b>"

const getRandomFailedMessage = () => chatFailedMessages[Math.floor(Math.random() * chatFailedMessages.length)]

function initTab() {
    document.getElementById('emplacementTable').innerHTML = game.html.getHtml('fondtable')
    game.setNewTreasurePos();
}

function playSong(song) {
    var audio = new Audio(song);
    audio.play();
}

function clickedCase(id) {
    const element = document.getElementById(id)
    const chatElement = document.getElementById("emplacementCommentaires")
    //Si la case est cliqué ou que le jeu est terminé on return
    if (element.className !== "unclicked") return
    if (game.win) return
    game.tries++
    document.getElementById('compte').innerHTML = game.tries
    const pos = game.html.get2DPosCellById(parseInt(id))
    const y = parseInt(pos[0])
    const x = parseInt(pos[1])
    if (y === game.treasure.y && x === game.treasure.x) {
        element.className = "good"
        chatElement.innerHTML += `<br>${chatBaseMessage}${chatWinMessage}`;
        playSong('http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a')
        game.win = true
    }
    else if (y === game.treasure.y) {
        element.className = "good-line"
        chatElement.innerHTML += `<br>${chatBaseMessage}${chatGoodLineMessage}`;
        playSong('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav')
    }
    else if (x === game.treasure.x) {
        element.className = "good-column"
        chatElement.innerHTML += `<br>${chatBaseMessage}${chatGoodColumnMessage}`;
        playSong('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav')
    }
    else {
        element.className = "bad"
        chatElement.innerHTML += `<br>${chatBaseMessage}${getRandomFailedMessage()}`;
        playSong('https://rpg.hamsterrepublic.com/wiki-images/d/d7/Oddbounce.ogg')
    }
}