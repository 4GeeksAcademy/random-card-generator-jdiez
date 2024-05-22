/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const numRandomH1 = document.getElementById("numero");
const botonNuevaCarta = document.getElementById("nueva_carta");
const paloTop = document.getElementById("palo-top");
const paloBottom = document.getElementById("palo-bottom");

let carta = "";
let palo = "";

function numeroRandom() {
  let randomCarts = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  for (let i = 0; i < randomCarts.length; i++) {
    carta = randomCarts[Math.floor(Math.random() * randomCarts.length)];
  }
  numRandomH1.innerText = carta;
}

function randomPalo() {
  let paloRandom = [
    '<i class="bi bi-suit-diamond-fill display-2"></i>',
    '<i class="bi bi-heart-fill display-2"></i>',
    '<i class="bi bi-suit-spade-fill display-2"></i>',
    '<i class="bi bi-suit-club-fill display-2"></i>'
  ];

  for (let i = 0; i < paloRandom.length; i++) {
    palo = paloRandom[Math.floor(Math.random() * paloRandom.length)];
  }
  paloTop.innerHTML = palo;
  paloBottom.innerHTML = palo;
}

botonNuevaCarta.addEventListener("click", numeroRandom);
botonNuevaCarta.addEventListener("click", randomPalo);
