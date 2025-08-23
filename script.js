// Screens
const startScreen = document.getElementById('startScreen');
const questionScreen = document.getElementById('questionScreen');
const puzzleScreen = document.getElementById('puzzleScreen');
const letterScreen = document.getElementById('letterScreen');

// Questions
const questions = [
    "Do you like surprises, Mahi? 😊",
    "Do you like me? 🥰",
    "Will you always stay with me? 💕",
    "Do you believe I make you smile? 😘",
    "Can I call you my everything, Mahi? 💖",
    "Will you let me love you forever? ❤️"
];
let currentQuestion = 0;

// Puzzle
const correctWord = "LOVE";
const scrambled = "VELO";
document.getElementById('scrambledWord').textContent = scrambled;

// Love letter text with more romantic lines
const loveLetter = `My Dearest Mahi ❤️,

Every time I think of you, my heart smiles a little brighter. You are the sunshine in my darkest days and the melody in my silence. 🌸

Mahi, I love the way your presence lights up my world. When you laugh, it feels like the universe pauses just to listen. 🌹

If life is a book, then you are the most beautiful chapter. If love is a song, then you are the sweetest lyrics. 🎶

I promise to hold your hand in every storm and dance with you in every rain. You are my today, my tomorrow, and my forever. 💍

Always yours,  
[Your Love Rahnuma] 💖`;

// Typewriter effect
function typeWriter(text, elementId, speed = 50) {
    let i = 0;
    const element = document.getElementById(elementId);
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Navigation Functions
function startQuestions() {
    startScreen.classList.remove('active');
    questionScreen.classList.add('active');
}

function nextQuestion(answer) {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        document.getElementById('questionText').textContent = questions[currentQuestion];
    } else {
        questionScreen.classList.remove('active');
        puzzleScreen.classList.add('active');
    }
}

// Puzzle Check
function checkPuzzle() {
    const input = document.getElementById('puzzleInput').value.toUpperCase();
    const message = document.getElementById('puzzleMessage');
    if (input === correctWord) {
        message.textContent = "Yay! You solved it! 💖";
        setTimeout(() => {
            puzzleScreen.classList.remove('active');
            letterScreen.classList.add('active');
            typeWriter(loveLetter, 'letterText');
        }, 1500);
    } else {
        message.textContent = "Oops! Try again 😊";
    }
}

// Floating hearts animation
const heartsContainer = document.getElementById('hearts');
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}
setInterval(createHeart, 500);
