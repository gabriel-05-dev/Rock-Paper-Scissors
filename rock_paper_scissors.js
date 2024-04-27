let score = 0;
let Score_human = 0;
let Score_comp = 0;


function getComputerChoice() {
  let integerRandom = 0;
  const choices = ["rock", "paper", "scissors"];
  integerRandom = (Math.floor(Math.random() * 3));
  choiceComputer = choices[integerRandom]
  return choiceComputer
}

function getHumanChoice() { //maybe add error check to see ensure human mistakes are accounted for e.g incorrect spelling
    choiceHuman = prompt("Rock, Paper or Scissors?");
    choiceHuman = choiceHuman.toLowerCase();
    return choiceHuman
}

function playround(choiceComputer, choiceHuman) {
  if (choiceComputer === "rock" & choiceHuman === "paper") {
    Score_human++
    console.log("Human wins")
  } else if (choiceComputer ==="rock" & choiceHuman === "scissors") {
    Score_comp++
    console.log("Computer wins")
  } else if (choiceComputer ==="paper" & choiceHuman === "rock") {
    Score_comp++
    console.log("Computer wins")
  }  else if (choiceComputer ==="paper" & choiceHuman === "scissors") {
    Score_human++
    console.log("Human wins")
  }  else if (choiceComputer ==="scissors" & choiceHuman === "rock") {
    Score_human++
    console.log("Human wins")
  }  else if (choiceComputer ==="scissors" & choiceHuman === "paper") {
    Score_comp++
    console.log("Computer wins")
  } else if (choiceComputer == choiceHuman) {
    console.log("draw")
  }
}

function VerifyWinner(Score_human, Score_comp) {
  if (Score_human < Score_comp) {
    alert("Computer Wins the game")
  } else if (Score_human > Score_comp) {
    alert("Human Wins the game")
  
  } else if (Score_human === Score_comp) {
    alert("Draw -> Nobody wins :(")
  }
}

getHumanChoice();
getComputerChoice();
playround(choiceComputer, choiceHuman);
playround(getHumanChoice(), getComputerChoice());
playround(getHumanChoice(), getComputerChoice());
playround(getHumanChoice(), getComputerChoice());
playround(getHumanChoice(), getComputerChoice());
VerifyWinner(Score_human, Score_comp);

// To improve maybe i should add a function to call these functions? e.g main?


/*

Pseudo

create score and set it to 0
create a function called getComputerChoice returns a str value 
rock/paper/scisccors(math.random)
create the same function called get human choice with prompt

create two variables, human score and computer score in the global scope
intialize those variables with the value of 0 


create a function called playround, which takes in humanChoice and computerChoice.

humanSelection case should be insensitive, .toLowerCase():


playround should log a string value e.g ("Youlose/Youwin ") after the round
is played and the human score/computer score should be based on the round winner

5 Rounds should be played
*/