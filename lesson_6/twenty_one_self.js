const SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const READLINE = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

// shuffle cards
function shuffle(cards) {
  for (let first = cards.length - 1; first > 0; first -= 1) {
    let second = Math.floor(Math.random() * (first + 1));
    [cards[first], cards[second]] = [cards[second], cards[first]];
  }
  console.log(cards);
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

function busted(cards) {
  return total(cards) > 21;
}

function detectResult(dealerCards, playerCards) {
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

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

function displayResults(dealerCards, playerCards) {
  let result = detectResult(dealerCards, playerCards);

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
  return answer[0] === 'y' || answer === 'n';
}

// Begin Game
while (true) {
  prompt(`Welcome to Twenty One!`);

  let deck = initializeDeck();
  let playerCards = [];
  let dealerCards = [];

  playerCards.push(...popTwoFromDeck(deck));
  dealerCards.push(...popTwoFromDeck(deck));

  prompt(`Dealer has ${dealerCards[0]} and ?`);
  prompt(`You have: ${playerCards[0]} and ${playerCards[1]}, for a total of ${total(playerCards)}.`);

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
      prompt(`You chose to hit!`);
      prompt(`Your cards are now: ${hand(playerCards)}`);
      prompt(`Your total is now: ${total(playerCards)}`);
    }

    if (playerTurn === 's' || busted(playerCards)) break;
  }

  if (busted(playerCards)) {
    displayResults(dealerCards, playerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`You stayed at ${total(playerCards)}`);
  }

  //  dealer turn
  prompt(`Dealer's turn`);
  while (total(dealerCards) < 17) {
    prompt(`Dealer hits!`);
    dealerCards.push(deck.pop());
    prompt(`Dealer's cards are now: ${hand(dealerCards)}`);
  }

  if (busted(dealerCards)) {
    displayResults(dealerCards, playerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`Dealer stayed at ${total(dealerCards)}`);
  }

  console.log('*********************');
  prompt(`Dealer has ${dealerCards}, for a total of: ${total(dealerCards)}`);
  prompt(`Player has ${playerCards}, for a total of: ${total(playerCards)}`);
  console.log('*********************');

  displayResults(dealerCards, playerCards);

  if (!playAgain()) break;
}