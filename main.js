"use strict";

// QUERY SELECTOR
const gameSelect = document.querySelector(".js__gameSelect");
const startGameBtn = document.querySelector(".js_startGameBtn");
const markerBtn = document.querySelector('.js_markerBtn');
const playerScore = document.querySelector(".js_player");
const machineScore = document.querySelector(".js_machine");

// FUNCIONES

const getOptionSelectedByUser = () => {
  const player = gameSelect.value;
  return player;
};

const gameSelectPlayer = () => {
  const player = getOptionSelectedByUser();

  if (player === "piedra") {
    console.log("el jugador ha elegido piedra");
  } else if (player === "papel") {
    console.log("el jugador ha elegido papel");
  } else if (player === "tijera") {
    console.log("el jugador ha elegido tijera");
  }
};

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const gameSelectMachine = () => {
  const machine = getRandomNumber;

  if (getRandomNumber <= 3) {
    console.log("la máquina ha elegido piedra");
  } else if (getRandomNumber >= 7) {
    console.log("la máquina ha elegido papel");
  } else {
    console.log("la máquina ha elegido tijera");
  }
};

const marker = markerBtn;

const finalScore = () => {
  if (
    gameSelectPlayer === "piedra" && gameSelectMachine === "tijera",
    gameSelectPlayer === "papel" && gameSelectMachine === "piedra",
    gameSelectPlayer === "tijera" && gameSelectMachine === "papel") {
    marker.innerHTML = ('¡Has Ganado 🎉!');
    playerScore.innerHTML = "Jugador: ";
  } else if (
    gameSelectPlayer === "piedra" && gameSelectMachine === "papel",
    gameSelectPlayer === "papel" && gameSelectMachine === "tijera",
    gameSelectPlayer === "tijera" && gameSelectMachine === "piedra") {
    marker.innerHTML = ('Has perdido, suerte para la próxima 👋🏻');
    machineScore.innerHTML = 'Computadora: ';
  } else if (
    gameSelectPlayer === "piedra" && gameSelectMachine === "piedra",
    gameSelectPlayer === "papel" && gameSelectMachine === "papel",
    gameSelectPlayer === "tijera" && gameSelectMachine === "tijera") {
    marker.innerHTML = ('Empate! 🙌🏻');  
}};

// FUNCIONES DE EVENTOS

const handleClickGame = (event) => {
  event.preventDefault();

  gameSelectPlayer();
  gameSelectMachine();
  finalScore();
};

// EVENTOS

startGameBtn.addEventListener("click", handleClickGame);