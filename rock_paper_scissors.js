let human_choice = '';
const rock_button = document.querySelector('#rock');
const paper_button = document.querySelector('#paper');
const scissors_button = document.querySelector('#scissors');
const clear_button = document.querySelector('#clear_choice');
const info_div = document.querySelector('#displayinfo');
let player_choice_info = document.createElement('p');

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
clear_button.addEventListener('click', () => {
    human_choice = '';
    updatePlayerinfo(human_choice);
    player_choice_info.textContent = '';
    return human_choice;
  });

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


function playRound(human_choice) {
  getComputerChoice();
  if (computer_choice === "rock" & human_choice === "paper") {
    console.log("Human wins")
  } else if (computer_choice ==="rock" & human_choice === "scissors") {
    console.log("Computer wins")
  } else if (computer_choice ==="paper" & human_choice === "rock") {
    console.log("Computer wins")
  }  else if (computer_choice ==="paper" & human_choice === "scissors") {
    console.log("Human wins")
  }  else if (computer_choice ==="scissors" & human_choice === "rock") {
    console.log("Human wins")
  }  else if (computer_choice ==="scissors" & human_choice === "paper") {
    console.log("Computer wins")
  } else if (computer_choice == human_choice) {
    console.log("draw")
  }
}




/*functions

getComputerChoice() -> returns rock'paper'scissors evertime it is called.



/*
- Function to generate a computer choice
= Function to display the computer choice to the user
- Score function to get the score
- Function to display the score to the user
- Playround function to play the game.



*/