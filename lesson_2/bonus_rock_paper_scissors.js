const readline = require('readline-sync');
const VALID_CHOICES = {
  r: 'rock',
  p: 'paper',
  s: 'scissors',
  l: 'lizard',
  sp: 'spock'
};
const CHOICES_ARRAY = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

let computerChoice;
let choice;
let userScore = 0;
let compScore = 0;

const userWins = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors'],
};

function prompt(message) {
  console.log(`=> ${message}`);
}

let incrementUserScore = _ => {
  userScore += 1;
};

let incrementCompScore = _ => {
  compScore += 1;
};

let displayScores = _ => {
  prompt(`Your score:: ${userScore} |||| Computer score:: ${compScore}.`);
};

let resetScores = _ => {
  userScore = 0;
  compScore = 0;
};

let displayGrandWinner = _ => {
  if (userScore === 3) {
    prompt(`Hooray!! You are the Grand Winner!!`);
    resetScores();
  }
  else if (compScore === 3) {
    prompt(`Computer wins the match :(`);
    resetScores();
  }
};

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (userWins[choice].includes(computerChoice)) {
    prompt(`You win!`);
    incrementUserScore();
  } else if (choice === computerChoice) {
    prompt(`It's a tie`);
  } else {
    prompt(`Computer wins!`);
    incrementCompScore();
  }
}

while (true) {
  prompt(`==================================== <=`);
  prompt(`Choose one: ${CHOICES_ARRAY.join(', ')}`);
  choice = readline.question();

  while (!Object.keys(VALID_CHOICES).includes(choice)) {
    prompt(`That's not a valid choice`);
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * CHOICES_ARRAY.length);
  computerChoice = CHOICES_ARRAY[randomIndex];

  displayWinner(VALID_CHOICES[choice], computerChoice);

  displayScores();

  displayGrandWinner();

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase;
  }

  if (answer[0] !== 'y') break;
  console.clear();
}

// //(choice === 'rock' && computerChoice === 'paper') ||
// (choice === 'paper' && computerChoice === 'scissors') ||
// (choice === 'scissors' && computerChoice === 'rock') ||
// (choice === 'spock' && computerChoice === 'lizard') ||
// (choice === 'lizard' && computerChoice === 'rock') ||
// (choice === 'paper' && computerChoice === 'lizard') ||
// (choice === 'lizard' && computerChoice === 'scissors') ||
// (choice === 'rock' && computerChoice === 'spock') ||
// (choice === 'spock' && computerChoice === 'paper') ||
// (choice === 'scissors' && computerChoice === 'spock')

// const DECISION_OBJECT = {
//   playerWins: (choice === 'rock' && computerChoice === 'scissors') ||
//   (choice === 'paper' && computerChoice === 'rock') ||
//   (choice === 'scissors' && computerChoice === 'paper') ||
//   (choice === 'lizard' && computerChoice === 'spock') ||
//   (choice === 'rock' && computerChoice === 'lizard') ||
//   (choice === 'lizard' && computerChoice === 'paper') ||
//   (choice === 'scissors' && computerChoice === 'lizard') ||
//   (choice === 'spock' && computerChoice === 'rock') ||
//   (choice === 'paper' && computerChoice === 'spock') ||
//   (choice === 'spock' && computerChoice === 'scissors')
// };