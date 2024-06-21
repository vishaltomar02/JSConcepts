//
// This is only a SKELETON file for the 'Poker' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const cardRanks = {
  "A": 14,
  "K": 13,
  "Q": 12,
  "J": 11,
  "10": 10,
  "9": 9,
  "8": 8,
  "7": 7,
  "6": 6,
  "5": 5,
  "4": 4,
  "3": 3,
  "2": 2,
  "1": 1
}

// Regex to split card into rank and suit

const cardRegex = new RegExp("([DHSC])");

function cardInfoSplitter(card) {
  return card.split(cardRegex).filter(Boolean);
}

// function to get individualCards
function getAllCardsOfAHand(hand) {
  return hand.split(" ");
}

function getRanksOrSuits(cards, type) {
  return cards.map((card) => cardInfoSplitter(card)[type]);
}

// function to check the equality of all items (can be utilised for both suits check and ranks check)
function areAllEqual(items, amountToTest = items.length) {
  const itemsOccurenceMap = new Map();
  for (let i = 0; i < items.length; i++) {
    const itemOccurence = itemsOccurenceMap.get(items[i]);
    if (!itemsOccurenceMap.has(items[i])) itemsOccurenceMap.set(items[i], 1);
    else { itemsOccurenceMap.set(items[i], itemOccurence + 1) }
  }
  return [...itemsOccurenceMap.entries()].filter(([_, value]) => value === amountToTest).map(([key, _]) => key) + "" ?? null;
}

// Function to check for Five of a kind
function isFiveOfAKind(cards) {
  const ranks = getRanksOrSuits(cards, 0);
  const suits = getRanksOrSuits(cards, 1);
  const satisfier = [areAllEqual(ranks), areAllEqual(suits)];
  return {
    satisfies: Boolean(satisfier[0] && satisfier[1]),
    satisfier: satisfier + ""
  }
}

// Function to check if the ranks of cards are in a sequence manner ( Can be used for checking straight hand)
function areCardsInSequence(ranks) {
  const sortedRanks = ranks.sort((a, b) => cardRanks[a] - cardRanks[b]);
  for (let i = 0; i < sortedRanks.length - 1; i++) {
    if (cardRanks[sortedRanks[i]] + 1 !== cardRanks[sortedRanks[i + 1]]) return false;
  }
  return true;
}

// Function to check for a straight flush
function straightFlush(cards) {
  let ranks = [];
  let suits = [];
  for (let card of cards) {
    const [rank, suit] = cardInfoSplitter(card);
    ranks.push(rank);
    suits.push(suit);
  }
  console.log(ranks, suits, areCardsInSequence(ranks) && areAllEqual(suits));
  let suitsSatisfier = areAllEqual(suits);
  return {
    satisfies: Boolean(areCardsInSequence(ranks) && suitsSatisfier),
    satisfier: suitsSatisfier
  }
}

straightFlush(['JD', 'QD', '10D', '8D', '9D']);

// Function to check for four of a kind
function fourOfAKind(cards) {
  const ranks = getRanksOrSuits(cards, 0);
  let satisfier = areAllEqual(ranks, 4);
  return {
    satisfies: Boolean(satisfier),
    satisfier
  }
}

console.log("fourofakind", fourOfAKind(['JD', '10D', '10D', '10D', '10D']));

// Function to check if the hand is a full house

function fullHouse(cards) {
  const ranks = getRanksOrSuits(cards, 0);
  let satisfier = [areAllEqual(ranks, 3), areAllEqual(ranks, 2)];
  return {
    satisfies: Boolean(satisfier[0] && satisfier[1]),
    satisfier: satisfier + ""
  }
}
console.log("fullhouse", fullHouse(['JD', 'JD', '10D', 'JD', '10D']));


// Function to check if the hand is a flush
function flush(cards) {
  const suits = getRanksOrSuits(cards, 1);
  let satisfier = areAllEqual(suits);
  return {
    satisfies: Boolean(satisfier),
    satisfier: satisfier
  };
}
console.log("flush", flush(['JD', 'JD', '10D', 'JD', '10D']));

// Function to check for three of a kind
function threeOfAKind(cards) {
  const ranks = getRanksOrSuits(cards, 0);
  let satisfier = [areAllEqual(ranks, 3), areAllEqual(ranks, 2)];
  return {
    satisfies: Boolean(satisfier[0] && !satisfier[1]),
    satisfier: satisfier + ""
  };
}

// Function to check for two pairs category
function twoPairs(cards) {
  const ranks = getRanksOrSuits(cards, 0);
  let satisfier = areAllEqual(ranks, 2);
  return {
    satisfies: satisfier.split(",").length === 2,
    satisfier
  };
}
console.log("tow-pairs", twoPairs(['JD', 'KD', '10D', 'JD', '10D']));

// Function to check for onePair category
function onePair(cards) {
  const ranks = getRanksOrSuits(cards, 0);
  let satisfier = areAllEqual(ranks, 2);
  return {
    satisfies: satisfier.split(",").length === 1,
    satisfier
  };
}

// Function to get the highest rank
function highestCard(cards) {
  const ranks = getRanksOrSuits(cards, 0);
  let highest = ranks[0];
  for (let i = 1; i < ranks.length; i++) {
    if (cardRanks[ranks[i]] > cardRanks[highest]) highest = ranks[i];
  }
  console.log("highest", highest);
  let satisfier = highest;
  return {
    satisfies: Boolean(highest),
    satisfier
  };
}
highestCard(['JD', 'QH', 'AS', '8D', 'QC']);

const categories = [
  isFiveOfAKind,
  straightFlush,
  fourOfAKind,
  fullHouse,
  flush,
  areCardsInSequence,
  threeOfAKind,
  twoPairs,
  onePair,
  highestCard
];

function getEveryHandsCategory(hands) {
  const handsCards = hands.map((hand) => getAllCardsOfAHand(hand));
  console.log("handsCards", handsCards);
}

export const bestHands = (hands) => {
  // loopThroughHands(hands, checkFiveOfAKind);
  getEveryHandsCategory(hands)
};

bestHands(['JD QH JS 8D QC', 'JS QS JC 2D QD', 'AS AD AH AC AC', 'KS KD KH KC KC']);
