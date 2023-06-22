/**
 * Quiz questions & answer options
 */

const quizData = [
    {
        question: "Which of the following would describe you the best?",
        a: "Brave",
        b: "Intelligent",
        c: "Caring",
        d: "Cunning",
    },
    {
        question: "Which of the following subjects would you most like to study at Hogwarts?",
        a: "Transfiguration",
        b: "Charms",
        c: "Care of Magical Creatures",
        d: "Potions",
    },
    {
        question: "As a 1st year student, which animal would you most like to accompany you to Hogwarts?",
        a: "A rat",
        b: "An owl",
        c: "A toad",
        d: "A cat",
    },
    {
        question: "What career path would entice you the most once you had completed your years at Hogwarts?",
        a: "An auror",
        b: "A professor",
        c: "A healer",
        d: "An alchemist",
    },
    {
        question: "What is your Zodiac sign?",
        a: "Aries, Leo and Sagittarus",
        b: "Gemini, Libra and Aquarius",
        c: "Taurus, Virgo and Capricorn",
        d: "Cancer, Scorpio & Pisces",
    },
    {
        question: "Yay! You've just become a member of the Quidditch team, what position are you playing?",
        a: "Seeker",
        b: "Chaser",
        c: "Crowd supporter",
        d: "Beater"
    }

];

/**
 * Pull HTML elements from DOM by ID
 */
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEL = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let gryffindorHouse = 0;
let ravenclawHouse = 0;
let hufflepuffHouse = 0;
let slytherinHouse = 0;

loadQuiz();

/**
 * The quiz is loaded back to the first question & set of answers 
 * once it is loaded for the first time or reset
 */

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEL.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers(){
    answerEls.forEach(answerEls => answerEls.checked = false);
}

function getSelected(){
    let answerEls
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id; 
        }
        return answer; 
    })
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].a){
            gryffindorHouse++;
        } else if(answer === quizData[currentQuiz].b){
            ravenclawHouse++;
        } else if(answer === quizData[currentQuiz].c){
            hufflepuffHouse++;
        } else if(answer === quizData[currentQuiz].d){
            slytherinHouse++;
        }
    }
})


   
    





