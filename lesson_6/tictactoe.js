let prompt = str => console.log(`=> ${str}.`);
const READLINE = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

let joinOr = (arr, delimiter = ', ', joiner = 'or') => {
  let arrLength = arr.length;
  if (arrLength === 0) {
    return "";
  } else if (arrLength === 1) {
    return `${arr[0]}`;
  } else if (arrLength === 2) {
    return `${arr[0]} ${joiner} ${arr[1]}`;
  } else {
    let squareStr = arr.join(delimiter);
    return `${squareStr.slice(0, squareStr.length - 2)} ${joiner} ${arr[arrLength - 1]}`;
  }
};

let playerChoosesSquare = board => {
  let square;

  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares(board), ', ', 'and')}`);
    square = READLINE.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt(`Sorry, that's not a valid choice.`);
  }
  board[square] = HUMAN_MARKER;
};

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

let boardFull = board => {
  return emptySquares(board).length === 0;
};

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];

  for (let line = 0; line < winningLines.length; line += 1) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) return 'Player';
    else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) return 'Computer';
  }

  return null;
}


let someoneWon = board => {
  return !!detectWinner(board);
};

while (true) {

  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (boardFull(board) || someoneWon(board)) break;

    computerChoosesSquare(board);
    if (boardFull(board) || someoneWon(board)) break;

    console.clear();
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt(`It's a tie!`);
  }

  let playAgain;

  while (true) {
    console.log(`Please answer in y/n. Play again?`);
    playAgain = READLINE.question();

    if (playAgain[0].toLowerCase() === 'y' || playAgain[0].toLowerCase() === 'n') break;
  }
  if (playAgain.toLowerCase() === 'n') break;
}

prompt('Thanks for playing Tic Tac Toe!');