let human_choice = '';
const rock_button = document.querySelector('#rock');
const paper_button = document.querySelector('#paper');
const scissors_button = document.querySelector('#scissors');
const info_div = document.querySelector('#displayinfo');
let player_choice_info = document.createElement('p');
let computer_choice_info = document.createElement('p');

rock_button.addEventListener('click', () => {
    human_choice = 'rock'
    updatePlayerinfo(human_choice);
    return human_choice;
  });
paper_button.addEventListener('click', () => {
    human_choice = 'paper'
    updatePlayerinfo(human_choice);
    return human_choice;
  });
scissors_button.addEventListener('click', () => {
    human_choice = 'scissors';
    updatePlayerinfo(human_choice);
    return human_choice;
  });

function updatePlayerinfo(human_choice) {
  player_choice_info.textContent = '';
  player_choice_info.textContent = 'You chose ' + human_choice;
  info_div.appendChild(player_choice_info);
}

//todo

/*
- Function to generate a computer choice
= Function to display the computer choice to the user
- Score function to get the score
- Function to display the score to the user
- Playround function to play the game.



*/