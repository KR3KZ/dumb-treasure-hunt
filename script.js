//Johan GAUTHIER
//Chasse au trésor
//JS
//23-03-2020

"use strict"
window.onload = function () { initTab(); }

//Nombre de coup
let tries = 0
let win = false

//Position trésor
const tresor = { x: Math.floor(Math.random() * 21), y: Math.floor(Math.random() * 14) }

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
    let tableHtml = "<table id='fondtable'>"
    for (let y = 0; y < 14; y++) {
        tableHtml += "<tr>"
        for (let x = 0; x < 21; x++) {
            let idCase = String(x) + "-" + String(y);
            tableHtml += `<td onclick="clickedCase('${idCase}')" id="${idCase}" class="unclicked"></td>`
        }
        tableHtml += "</tr>"
    }
    tableHtml += "</table>"
    document.getElementById('emplacementTable').innerHTML = tableHtml
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
    if (win) return
    tries++
    document.getElementById('compte').innerHTML = tries
    const coords = id.split('-')
    const x = parseInt(coords[0])
    const y = parseInt(coords[1])
    if (x === tresor.x && y === tresor.y) {
        element.className = "good"
        chatElement.innerHTML += `<br>${chatBaseMessage}${chatWinMessage}`;
        playSong('http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a')
        win = true
    }
    else if (x === tresor.x) {
        element.className = "good-column"
        chatElement.innerHTML += `<br>${chatBaseMessage}${chatGoodColumnMessage}`;
        playSong('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav')
    }
    else if (y === tresor.y) {
        element.className = "good-line"
        chatElement.innerHTML += `<br>${chatBaseMessage}${chatGoodLineMessage}`;
        playSong('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav')
    }
    else {
        element.className = "bad"
        chatElement.innerHTML += `<br>${chatBaseMessage}${getRandomFailedMessage()}`;
        playSong('https://rpg.hamsterrepublic.com/wiki-images/d/d7/Oddbounce.ogg')
    }
}