//*Quiz questions and answer options

const quizData = [
    {
        question: "Which of the following would describe you the best?",
        a: "Brave",
        b: "Intelligent",
        c: "Caring",
        d: "Cunning",
        gryffindorAnswer: "a",
        ravenclawAnswer: "b",
        hufflepuffAnswer: "c",
        slytherinAnswer: "d",
    },
    {
        question: "Which of the following subjects would you most like to study at Hogwarts?",
        a: "Transfiguration",
        b: "Charms",
        c: "Care of Magical Creatures",
        d: "Potions",
        gryffindorAnswer: "a",
        ravenclawAnswer: "b",
        hufflepuffAnswer: "c",
        slytherinAnswer: "d",
    },
    {
        question: "As a 1st year student, which animal would you most like to accompany you to Hogwarts?",
        a: "A rat",
        b: "An owl",
        c: "A toad",
        d: "A cat",
        gryffindorAnswer: "a",
        ravenclawAnswer: "b",
        hufflepuffAnswer: "c",
        slytherinAnswer: "d",
    },
    {
        question: "What career path would entice you the most once you had completed your years at Hogwarts?",
        a: "An auror",
        b: "A professor",
        c: "A healer",
        d: "An alchemist",
        gryffindorAnswer: "a",
        ravenclawAnswer: "b",
        hufflepuffAnswer: "c",
        slytherinAnswer: "d",
    },
    {
        question: "What is your Zodiac sign?",
        a: "Aries, Leo and Sagittarus",
        b: "Gemini, Libra and Aquarius",
        c: "Taurus, Virgo and Capricorn",
        d: "Cancer, Scorpio & Pisces",
        gryffindorAnswer: "a",
        ravenclawAnswer: "b",
        hufflepuffAnswer: "c",
        slytherinAnswer: "d",
    },
    {
        question: "Yay! You've just become a member of the Quidditch team, what position are you playing?",
        a: "Seeker",
        b: "Chaser",
        c: "Crowd supporter",
        d: "Beater",
        gryffindorAnswer: "a",
        ravenclawAnswer: "b",
        hufflepuffAnswer: "c",
        slytherinAnswer: "d",
    },
];

//* Get elements from DOM 
const quiz= document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

//* Data once quiz is loaded or restarted
let currentQuiz = 0;
let gryffindorHouse = 0;
let ravenclawHouse = 0;
let hufflepuffHouse = 0;
let slytherinHouse = 0;

loadQuiz()

/**
 * Loads each question & set of answer options for each index
 */
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].gryffindorAnswer) {
            gryffindorHouse++
        }
        if(answer === quizData[currentQuiz].ravenclawAnswer) {
            ravenclawHouse++
        }
        if(answer === quizData[currentQuiz].hufflepuffAnswer) {
            hufflepuffHouse++
        }
        if(answer === quizData[currentQuiz].slytherinAnswer) {
            House++
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else if (gryffindorHouse >= quizData.length){
            quiz.innerHTML = `
            <h2>You are Gryffindor!</h2>
            <button onclick="location.reload()">Restart</button>
            `
        } else if (ravenclawHouse >= quizData.length){
            quiz.innerHTML = `
            <h2>You are Ravenclaw!</h2>
            <button onclick="location.reload()">Restart</button>
            `
        } else if (hufflepuffHouse >= quizData.length){
            quiz.innerHTML = `
            <h2>You are Hufflepuff!</h2>
            <button onclick="location.reload()">Restart</button>
            `
        } else if (slytherinHouse >= quizData.length){
            quiz.innerHTML = `
            <h2>You are Slytherin!</h2>
            <button onclick="location.reload()">Restart</button>
            `
        }
     }
 })
