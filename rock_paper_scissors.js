let human_choice = '';
const rock_button = document.querySelector('#rock');
const paper_button = document.querySelector('#paper');
const scissors_button = document.querySelector('#scissors');
const clear_button = document.querySelector('#clear_choice');
const info_div = document.querySelector('#displayinfo');
const battle_button = document.createElement('button');
const battle_div = document.querySelector('#battle');

const winner_information = document.createElement('p');
winner_information.classList.add('winner_info');

const new_game_btn = document.createElement('button');

let player_score = 0;
let computer_score = 0;
let player_choice_info = document.createElement('p');
player_choice_info.classList.add('player_choice');

//display the scores
const score_div = document.querySelector('#display_score_information');
score_div.classList.add('display_score');
const display_player_score = document.createElement('p');
const display_computer_score = document.createElement('p');

score_div.setAttribute('style', 'display: flex; gap: 1em; justify-content: center; color:white; align-items:center;');

//display the winner of the game e.t.c

const winner_div = document.querySelector('#winner_section');
const display_winner = document.createElement('p');
display_winner.classList.add('display_style');

winner_div.setAttribute('style', 'display: flex; align-items:center; justify-content: center; color:white;')

function updateScore() {
  display_player_score.textContent = 'Player score : ' + player_score;
  display_computer_score.textContent = 'Computer score : ' + computer_score;
  score_div.appendChild(display_computer_score);
  score_div.appendChild(display_player_score);
}

//event listeners for the player_choices

rock_button.addEventListener('click', () => {
    human_choice = 'rock';
    updatePlayerinfo(human_choice);
    return human_choice;
  });
paper_button.addEventListener('click', () => {
    human_choice = 'paper';
    updatePlayerinfo(human_choice);
    return human_choice;
  });
scissors_button.addEventListener('click', () => {
    human_choice = 'scissors';
    updatePlayerinfo(human_choice);
    return human_choice;
  });
clear_button.addEventListener('click', () => {
    human_choice = '';
    winner_information.textContent = '';
    updatePlayerinfo(human_choice);
    player_choice_info.textContent = '';
    return human_choice;
  });

  battle_button.textContent = 'Battle!';
  battle_div.appendChild(battle_button);
  battle_div.classList.add('battlediv')

  battle_button.addEventListener('click', () => {
    playRound(human_choice);
  })

  new_game_btn.textContent= 'New Game';
  info_div.setAttribute('style', 'display:flex; margin-top: 20px; flex-direction: column; justify-content:center; align-items:center;')
  info_div.appendChild(new_game_btn);
  new_game_btn.addEventListener('click', () => {
    computer_score = 0;
    player_score = 0;
    rounds_info = 0;
    display_player_score.textContent = '';
    display_computer_score.textContent = '';
    human_choice = '';
    winner_information.textContent = '';
    updatePlayerinfo(human_choice);
    player_choice_info.textContent = '';
    display_winner.textContent = '';
  })


function updatePlayerinfo(human_choice) {
  player_choice_info.textContent = '';
  player_choice_info.textContent = 'You chose ' + human_choice;
  info_div.appendChild(player_choice_info);
}

function getComputerChoice() {
  let random_integer = 0;
  random_integer = Math.floor(Math.random() * 3);
  choices_list = ['rock', 'paper', 'scissors'];
  let computer_choice = choices_list[random_integer];
  return computer_choice;
}

function check_Winner(player_score, computer_score) {
  if (player_score === computer_score) {
    display_winner.textContent= 'There is no winner! Draw! - Press New Game to play again!';
    winner_div.appendChild(display_winner);
  }
  else if (player_score > computer_score) {
    display_winner.textContent = 'Player wins! - Press New Game to play again!';
    winner_div.appendChild(display_winner);

  } else if (computer_score > player_score) {
    display_winner.textContent = 'Computer wins! - Press New Game to play again!';
    winner_div.appendChild(display_winner);
  }
}




// Winner wins at 5 points! 

function playRound(human_choice) {
  computer_choice = getComputerChoice();
  winner_information.textContent = '';
  if (player_score >=5 || computer_score >=5) {
    check_Winner(player_score, computer_score);
  } else if (computer_choice === "rock" & human_choice === "paper") {
    winner_information.textContent = 'Player Wins! the computer chose ' + computer_choice;
    player_score += 1;
  } else if (computer_choice ==="rock" & human_choice === "scissors") {
    winner_information.textContent = 'Computer Wins, the computer chose ' + computer_choice;
    computer_score += 1;

  } else if (computer_choice ==="paper" & human_choice === "rock") {
    winner_information.textContent = 'Computer Wins, the computer chose ' + computer_choice;
    computer_score += 1;

  }  else if (computer_choice ==="paper" & human_choice === "scissors") {
    winner_information.textContent = 'Player Wins! the computer chose ' + computer_choice;
    player_score += 1;

  }  else if (computer_choice ==="scissors" & human_choice === "rock") {
    winner_information.textContent = 'Player Wins! the computer chose ' + computer_choice;
    player_score += 1;

  }  else if (computer_choice ==="scissors" & human_choice === "paper") {
    winner_information.textContent = 'Computer Wins, the computer chose ' + computer_choice;
    computer_score += 1;

  } else if (computer_choice == human_choice) {
    winner_information.textContent = 'Round Draw!!';
    player_score += 1;
    computer_score += 1;
  }
  battle_div.appendChild(winner_information);
  human_choice = '';
  updateScore();
}