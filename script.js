const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🐮', '🐷'];

const memoryGame = document.getElementById('memoryGame');

let flippedCards = [];
let matchedCards = [];

// Embaralhar os emojis
const shuffledEmojis = [...emojis, ...emojis].sort(() => Math.random() - 0.5);

// Criar o tabuleiro do jogo
shuffledEmojis.forEach(emoji => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.emoji = emoji;

    card.addEventListener('click', flipCard);

    memoryGame.appendChild(card);
});

function flipCard() {
    if (flippedCards.length < 2 && !flippedCards.includes(this)) {
        flippedCards.push(this);
        this.textContent = this.dataset.emoji;

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.emoji === card2.dataset.emoji) {
        card1.classList.add('hidden');
        card2.classList.add('hidden');
        matchedCards.push(card1, card2);
    } else {
        card1.textContent = '';
        card2.textContent = '';
    }

    flippedCards = [];

    if (matchedCards.length === emojis.length * 2) {
        alert('Parabéns! Você venceu!');
    }
}
