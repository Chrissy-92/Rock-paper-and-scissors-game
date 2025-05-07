'use strict'

// QUERY SELECTOR
const gameSelect = document.querySelector('.js__gameSelect');
const startGameBtn = document.querySelector('.js_startGameBtn');
const playerScore = document.querySelector('.js_player');
const machineScore = document.querySelector('.js_machine');

// FUNCIONES

const getOptionSelectedByUser = () => {
    const player = gameSelect.value;
    return player;
};

const gameSelectPlayer = () => {
    const player = getOptionSelectedByUser();

    if ( player === 'piedra' ) {
    console.log('el jugador ha elegido piedra');
    } else if ( player === 'papel') {
    console.log('el jugador ha elegido papel');
    } else if ( player === 'tijera') {
    console.log('el jugador ha elegido tijera');
    }
}

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
}

if ( getRandomNumber <= 3) {
    console.log ('piedra');
  } else if ( getRandomNumber >= 7) {
    console.log ('papel');
  } else {
    console.log ('tijera');
}

const gameSelectMachine = getRandomNumber;

// FUNCIONES DE EVENTOS

const handleClickGame = (event) => {
    event.preventDefault();

    gameSelectPlayer();
    gameSelectMachine();
};

// EVENTOS

startGameBtn.addEventListener('click', handleClickGame);
