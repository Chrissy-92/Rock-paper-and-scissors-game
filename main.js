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

// FUNCIONES DE EVENTOS




// EVENTOS