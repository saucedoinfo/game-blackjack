// Construccion del mazo
const buildCardDeck = () => {
  let cards = [];
  let letter = ["C", "D", "H", "S"];
  let word = ["A", "J", "K", "Q"];

  for (let a = 2; a <= 10; a++) {
    for (let i = 0; i < letter.length; i++) {
      cards.push(`${a}${letter[i]}`);
    }
  }

  for (let a = 0; a < word.length; a++) {
    for (let i = 0; i < letter.length; i++) {
      cards.push(`${word[a]}${letter[i]}`);
    }
  }

  return cards;
};

let deck = buildCardDeck()

// Barajar carta
const shuffleDeckCards = (cards) => {
return _.shuffle(cards)
}

console.log(shuffleDeckCards(deck));
