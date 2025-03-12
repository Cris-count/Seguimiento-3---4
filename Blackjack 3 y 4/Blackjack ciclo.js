class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }

    getValue() {
        if (this.value === 'J' || this.value === 'Q' || this.value === 'K') {
            return 10;
        } else if (this.value === 'A') {
            return 11;
        } else {
            return parseInt(this.value);
        }
    }
}

class Deck {
    constructor() {
        this.cards = [];
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        for (let suit of suits) {
            for (let value of values) {
                this.cards.push(new Card(suit, value));
            }
        }
        this.shuffle();
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    deal() {
        return this.cards.pop();
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    addCard(card) {
        this.hand.push(card);
    }

    getHandValue() {
        let value = 0;
        let aceCount = 0;
        for (let card of this.hand) {
            value += card.getValue();
            if (card.value === 'A') {
                aceCount++;
            }
        }
        while (value > 21 && aceCount > 0) {
            value -= 10;
            aceCount--;
        }
        return value;
    }

    isBusted() {
        return this.getHandValue() > 21;
    }
}

class Game {
    constructor() {
        this.deck = new Deck();
        this.player = new Player('Jugador');
        this.dealer = new Player('Dealer');
        this.initUI();
        this.startGame();
    }

    initUI() {
        this.playerCardsElement = document.getElementById('player-cards');
        this.playerValueElement = document.getElementById('player-value');
        this.dealerCardsElement = document.getElementById('dealer-cards');
        this.dealerValueElement = document.getElementById('dealer-value');
        this.resultElement = document.getElementById('result');
        document.getElementById('hit-button').addEventListener('click', () => this.playerTurn('h'));
        document.getElementById('stand-button').addEventListener('click', () => this.playerTurn('s'));
    }

    startGame() {
        this.player.addCard(this.deck.deal());
        this.player.addCard(this.deck.deal());
        this.dealer.addCard(this.deck.deal());
        this.dealer.addCard(this.deck.deal());

        this.updateUI();
    }

    updateUI() {
        this.playerCardsElement.textContent = this.player.hand.map(card => `${card.value} of ${card.suit}`).join(', ');
        this.playerValueElement.textContent = `Total value: ${this.player.getHandValue()}`;
        this.dealerCardsElement.textContent = this.dealer.hand.map(card => `${card.value} of ${card.suit}`).join(', ');
        this.dealerValueElement.textContent = `Total value: ${this.dealer.getHandValue()}`;
    }

    playerTurn(action) {
        switch (action) {
            case 'h':
                this.player.addCard(this.deck.deal());
                if (this.player.isBusted()) {
                    this.updateUI();
                    this.resultElement.textContent = 'You busted! Dealer wins.';
                    return;
                }
                break;
            case 's':
                this.dealerTurn();
                return;
        }
        this.updateUI();
    }

    dealerTurn() {
        do {
            this.dealer.addCard(this.deck.deal());
        } while (this.dealer.getHandValue() < 17);
        this.updateUI();
        this.checkWinner();
    }

    checkWinner() {
        if (this.dealer.isBusted()) {
            this.resultElement.textContent = 'Dealer busted! You win.';
        } else if (this.player.getHandValue() > this.dealer.getHandValue()) {
            this.resultElement.textContent = 'You win!';
        } else if (this.player.getHandValue() < this.dealer.getHandValue()) {
            this.resultElement.textContent = 'Dealer wins.';
        } else {
            this.resultElement.textContent = 'It\'s a tie.';
        }
    }
}

new Game();