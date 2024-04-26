let score = 0;
let choiceComputer = null;
let choiceUser = null;

function getComputerChoice() {
    choiceList = ["rock", "paper", "scissors"]
    choice = array.Select[Math.random(0,3)];
    return choiceComputer;
}


function getHumanChoice() {
    choice = prompt("Rock, Paper or scissors?");
    return choiceHuman;
}




/*

Pseudo

create score and set it to 0

create a function caleld getComputerChoice returns a str value 
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