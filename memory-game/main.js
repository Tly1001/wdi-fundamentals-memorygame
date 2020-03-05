const cards = [{
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];

let cardsInPlay = []
let wins = 0;
let losses = 0;

function checkForMatch() {
    
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
            wins += 1;
        } else {
            alert("Sorry, try again.");
            losses += 1;
        }
        pointsUpdate();
        resetBoard();
    }
}

function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsInPlay.push(cards[cardId].rank);
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    this.setAttribute("src", cards[cardId].cardImage);
    setTimeout(function(){checkForMatch()}, 650);
};

function createBoard() {
    for (let i = 0; i < cards.length; i++) {
        const cardElement = document.createElement("img");
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute("data-id", i);
        document.getElementById("game-board").appendChild(cardElement);
        cardElement.addEventListener('click', flipCard);
    }
}

function pointsUpdate() {
    const winPointsElement = document.getElementById('wins');
    const losePointsElement = document.getElementById('losses');
    winPointsElement.textContent = wins;
    losePointsElement.textContent = losses;
}


function resetBoard() {
    for (let i = 0; i < cards.length; i++) {
        cardsInPlay = [];
        const cardElement = document.getElementsByTagName("img")[i];
        cardElement.setAttribute('src', "images/back.png");
        cardElement.addEventListener('click', flipCard);
}}

createBoard();