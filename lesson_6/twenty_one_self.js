const SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

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
  console.log(sum);
  return sum;
}

// Begin Game
console.log(`Game begins!`);
let deck = initializeDeck();
let playerCards = [];
let dealerCards = [];

playerCards.push(...popTwoFromDeck(deck));
dealerCards.push(...popTwoFromDeck(deck));

console.log(`Dealer has ${dealerCards[0]} and ?`);
console.log(`You have: ${playerCards[0]} and ${playerCards[1]}, for a total of ${total(playerCards)}.`);

// player turn
while (true) {
  
}