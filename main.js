"use strict";

// QUERY SELECTOR
const gameSelect = document.querySelector(".js__gameSelect");
const startGameBtn = document.querySelector(".js_startGameBtn");
const messageBox = document.querySelector('.js_messageBox');
const playerScore = document.querySelector(".js_player");
const machineScore = document.querySelector(".js_machine");

// DATOS
let playerWins = 0;
let computerWins = 0;

// FUNCIONES

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};

const renderResults = (message) => {
    messageBox.innerHTML = message;
};

// FUNCIONES DE EVENTOS

const handleClickPlayGame = (event) => {
  event.preventDefault();

  //1. Comienza el juego  
  
  //1.1 Captura la elección de la jugadora.
  const player = gameSelect.value;
  
  //1.2 Generar la elección del ordenador

  //1.2.1 Genera un número aleatorio
  const randomNumber = getRandomNumber(9);

  //1.2.2 Transformar el número a una jugada

    let computerChoise;

    if (randomNumber <= 3) {
        console.log("la máquina ha elegido piedra");
        computerChoise = 'piedra';
    } else if (randomNumber >= 7) {
        console.log("la máquina ha elegido papel");
        computerChoise = 'papel';
    } else {
        console.log("la máquina ha elegido tijera");
        computerChoise = 'tijera';
    }

    console.log(player, randomNumber, computerChoise);
    
    // 1.3 Comparar elecciones
        
    if( player === "piedra" && computerChoise === "tijera" ||
        player === "papel" && computerChoise === "piedra" ||
        player === "tijera" && computerChoise === "papel"
    ) {
        renderResults('¡Has Ganado 🎉!');
        playerWins++;
        playerScore.innerHTML = `Jugador: ${playerWins} `;
    } else if (
        player === "piedra" && computerChoise === "papel" ||
        player === "papel" && computerChoise === "tijera" ||
        player === "tijera" && computerChoise === "piedra"
    ) {
        renderResults('Has perdido, suerte para la próxima 👋🏻');
        computerWins++;
        machineScore.innerHTML = `Computadora: ${computerWins} `;
    } else if (
        player === computerChoise) {
        renderResults('Empate! 🙌🏻');  
    }

    if ( computerWins === 10 || playerWins === 10 ) {
        gameSelect.disabled = true;
        const resetBtn = document.querySelector('.js_resetBtn');
        resetBtn.classList.remove('hidden');
    }
};

// EVENTOS

startGameBtn.addEventListener('click', handleClickPlayGame);