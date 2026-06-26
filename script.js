const flashcards = [
    {
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets"
    },
    {
        question: "What does JS stand for?",
        answer: "JavaScript"
    },
    {
        question: "What is React?",
        answer: "A JavaScript Library"
    },
    {
        question: "What is Git?",
        answer: "Version Control System"
    }
];

let currentCard = 0;
let score = 0;
let timeleft = 30;

function loadCard() {
    document.getElementById("question").textContent =
        flashcards[currentCard].question;

    document.getElementById("answer").textContent =
        flashcards[currentCard].answer;

    document.getElementById("answer").style.display = "none";

    document.getElementById("progress").textContent =
        `Card ${currentCard + 1} of ${flashcards.length}`;
}

function showAnswer() {
    document.getElementById("answer").style.display = "block";
    score++;
    document.getElementById("score").textContent = `score: ${score}`;
}

function nextCard() {
    if (currentCard < flashcards.length - 1) {
        currentCard++;
        loadCard();
    }
}

function prevCard() {
    if (currentCard > 0) {
        currentCard--;
        loadCard();
    }
}
let timer = setInterval(() => {
    timeleft--;

    document.getElementById("timer").textContent =
        `Time Left: ${timeleft}`;

    if (timeleft <= 0) {
        clearInterval(timer);
        alert(`Time's Up!\nFinal Score: ${score}`);
    }
}, 1000);
loadCard();