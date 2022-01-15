const SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const READLINE = require('readline-sync');
let playerWins = 0;
let dealerWins = 0;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

// shuffle cards
function shuffle(cards) {
  for (let first = cards.length - 1; first > 0; first -= 1) {
    let second = Math.floor(Math.random() * (first + 1));
    [cards[first], cards[second]] = [cards[second], cards[first]];
  }
  // console.log(cards);
  return cards;
}

// create deck
function initializeDeck() {
  let deck = [];
  for (let idx = 0; idx < SUITS.length; idx += 1) {
    for (let ind = 0; ind < VALUES.length; ind += 1) {
      deck.push([SUITS[idx], VALUES[ind]]);
    }
  }
  return shuffle(deck);
}

function popTwoFromDeck(deck) {
  return [deck[0], deck[1]];
}

function total(cards) {
  let values = cards.map(card => card[1]);
  console.log(values);
  let sum = 0;
  values.forEach(value => {
    if (value === 'Ace') {
      sum += 11;
    } else if (['King', 'Queen', 'Jack'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });
  values.filter(value => value === 'Ace').forEach(_ => {
    if (sum > 21) sum -= 10;
  });
  // console.log(sum);
  return sum;
}

function hand(cards) {
  // console.log(cards);
  return cards.map(card => card[0] + card[1]).join(' ');
}

function busted(playerTotal) {
  return playerTotal > 21;
}

function detectResult(dealerTotal, playerTotal) {
  // let playerTotal = total(playerCards);
  // let dealerTotal = total(dealerCards);

  if (playerTotal > 21) {
    return `PLAYER_BUSTED`;
  } else if (dealerTotal > 21) {
    return 'DEALER_BUSTED';
  } else if (playerTotal > dealerTotal) {
    return 'PLAYER';
  } else if (dealerTotal > playerTotal) {
    return 'DEALER';
  } else {
    return `It's a tie!`;
  }
}

function displayResults(dealerTotal, playerTotal) {
  let result = detectResult(dealerTotal, playerTotal);

  switch (result) {
    case 'PLAYER_BUSTED':
      prompt('You busted! Dealer wins!');
      break;
    case 'DEALER_BUSTED':
      prompt('Dealer busted! You win!');
      break;
    case 'PLAYER':
      prompt('You win!');
      break;
    case 'DEALER':
      prompt('Dealer wins!');
      break;
    case 'TIE':
      prompt("It's a tie!");
  }
}

function playAgain() {
  console.log(`======================`);
  prompt(`Play again? (Y)es or (N)o ?`);
  let answer = READLINE.question().toLowerCase();
  return answer[0] === 'y';
}

function displayOutput(dealerCards, dealerTotal, playerCards, playerTotal) {
  console.log('*********************');
  prompt(`Dealer has ${dealerCards}, for a total of: ${dealerTotal}`);
  prompt(`Player has ${playerCards}, for a total of: ${playerTotal}`);
  console.log('*********************');
}

function checkMatchWinner(dealerWins, playerWins) {
  if (dealerWins === 5) {
    prompt(`Dealer wins the round!`);
    dealerWins = 0;
    playerWins = 0;
  } else if (playerWins === 5) {
    prompt(`Player wins the round!`);
    dealerWins = 0;
    playerWins = 0;
  }
}

function displayWinCount(playerWins, dealerWins) {
  prompt(`Player Win Count : ${playerWins}, Dealer Win Count : ${dealerWins}.`);
}

// Begin Game
while (true) {
  prompt(`Welcome to Twenty One!`);

  let deck = initializeDeck();
  let playerCards = [];
  let dealerCards = [];
  displayWinCount(playerWins, dealerWins);

  playerCards.push(...popTwoFromDeck(deck));
  dealerCards.push(...popTwoFromDeck(deck));

  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  prompt(`Dealer has ${dealerCards[0]} and ?`);
  prompt(`You have: ${playerCards[0]} and ${playerCards[1]}, for a total of ${playerTotal}.`);

  // player turn
  while (true) {
    let playerTurn;
    while (true) {
      prompt(`Do you want to (h)it or (s)tay ?`);
      playerTurn = READLINE.question().toLowerCase();

      if (['h', 's'].includes(playerTurn)) break;
      prompt(`Sorry, must enter 'h' or 's'.`);
    }

    if (playerTurn === 'h') {
      playerCards.push(deck.pop());
      playerTotal = total(playerCards);
      prompt(`You chose to hit!`);
      prompt(`Your cards are now: ${hand(playerCards)}`);
      prompt(`Your total is now: ${playerTotal}`);
      displayWinCount(playerWins, dealerWins);
    }

    if (playerTurn === 's' || busted(playerTotal)) break;
  }

  if (busted(playerTotal)) {
    dealerWins += 1;
    displayResults(dealerTotal, playerTotal);
    displayOutput(dealerCards, dealerTotal, playerCards, playerTotal);

    displayWinCount(playerWins, dealerWins);
    checkMatchWinner(playerWins, dealerWins);

    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`You stayed at ${playerTotal}`);
  }

  //  dealer turn
  prompt(`Dealer's turn`);
  while (dealerTotal < 17) {
    prompt(`Dealer hits!`);
    dealerCards.push(deck.pop());
    dealerTotal = total(dealerCards);
    prompt(`Dealer's cards are now: ${hand(dealerCards)}`);
    displayWinCount(playerWins, dealerWins);
  }

  if (busted(dealerTotal)) {
    playerWins += 1;
    displayResults(dealerTotal, playerTotal);
    displayOutput(dealerCards, dealerTotal, playerCards, playerTotal);

    displayWinCount(playerWins, dealerWins);
    checkMatchWinner(playerWins, dealerWins);

    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`Dealer stayed at ${dealerTotal}`);
  }

  // console.log('*********************');
  // prompt(`Dealer has ${dealerCards}, for a total of: ${dealerTotal}`);
  // prompt(`Player has ${playerCards}, for a total of: ${playerTotal}`);
  // console.log('*********************');
  if (playerTotal > dealerTotal || dealerTotal > 21) {
    playerWins += 1;
  } else if (dealerTotal > playerTotal || playerTotal > 21) {
    dealerWins += 1;
  }

  displayWinCount(playerWins, dealerWins);
  checkMatchWinner(playerWins, dealerWins);

  displayOutput(dealerCards, dealerTotal, playerCards, playerTotal);
  displayResults(dealerTotal, playerTotal);

  if (!playAgain()) break;
}