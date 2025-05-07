'use strict'

// QUERY SELECTOR
const gameSelect = document.querySelector('.js__gameSelect');
const startGameBtn = document.querySelector('.js_startGameBtn');
const playerScore = document.querySelector('.js_player');
const machineScore = document.querySelector('.js_machine');

// FUNCIONES

const getOptionSelectedByUser = () => {
    const option = gameSelect.value;
    return option;
};

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  }

  const gameSelectMachine = getRandomNumber


  if ( getRandomNumber <= 3) {
    console.log ('piedra');
  } else if ( getRandomNumber >= 7) {
    console.log ('papel');
  } else {
    console.log ('tijera');
  }




// FUNCIONES DE EVENTOS

const handleClickGame = (event) => {
    event.preventDefault();

    gameSelect();
    gameSelectMachine();
};

// EVENTOS

startGameBtn.addEventListener('click', handleClickGame);
