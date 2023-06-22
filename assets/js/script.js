const questions = [
    {
        question: "Which of the following would describe you the best?",
        answers: [
           {text: "Brave"},
           {text: "Intelligent"},
           {text: "Caring"},
           {text: "Cunning"},
        ],
   },
   {
       question: "Which of the following subjects would you most like to study at Hogwarts?",
       answers: [
        {text: "Transfiguration"},
        {text: "Charms"},
        {text: "Care of Magical Creatures"},
        {text: "Potions"},
        ], 

    },
    {
        question: "As a 1st year student, which animal would you most like to accompany you to Hogwarts?",
        answers: [
           {text: "A rat"},
           {text: "An owl"},
           {text: "A toad"},
           {text: "A cat"},
        ],
   
    },
    {
        question: "What career path would entice you the most once you had completed your years at Hogwarts?",
        answers: [
           {text: "An auror"},
           {text: "A professor"},
           {text: "A healer"},
           {text: "An alchemist"},
        ],
   
    },
    {
        question: "What is your Zodiac sign?",
        answers: [
           {text: "Aries, Leo and Sagittarus"},
           {text: "Gemini, Libra and Aquarius"},
           {text: "Taurus, Virgo and Capricorn"},
           {text: "Cancer, Scorpio & Pisces"},
        ],
   
    },
    {
        question: "Yay! You've just become a member of the Quidditch team, what position are you playing?",
        answers: [
           {text: "Seeker"},
           {text: "Chaser"},
           {text: "Crowd supporter"},
           {text: "Beater"},
        ],
   
    },
    
];



let questionElement = document.getElementById('question');
let answerButtons = document.getElementById('answer-buttons');
let nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let sortedHouse = 0;

/**
 * Removes the original placeholder answer buttons
 */
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/**
 * Stores the amount of times each house option is selected and determines the users house
 * based on the data majority
 */

optionA = document.getElementById('optionA');

let numberOfA = 0;

function selectedA(){
    numberOfA++;
}

optionA.addEventListener('click', selectedA());

if(numberOfA > 5){
    console.log('Welcome to Gryffindor!');
}

optionB = document.getElementById('optionB');

let numberOfB = 0;

function selectedB(){
    numberOfB++;
}

optionB.addEventListener('click', selectedB());

if(numberOfB > 5){
    console.log('Welcome to Ravenclaw!');
}

optionC = document.getElementById('optionC');

let numberOfC = 0;

function selectedC(){
    numberOfC++;
}

optionC.addEventListener('click', selectedC());

if(numberOfC > 5){
    console.log('Welcome to Hufflepuff!');
}

optionD = document.getElementById('optionD');

let numberOfD = 0;

function selectedD(){
    numberOfD++;
}

optionA.addEventListener('click', selectedD());

if(numberOfD > 5){
    console.log('Welcome to Slytherin!');
}

/**
 * As the site user progresses through the questions the currentQuestion will display a different 
 * question and a set of answers as it works up through the currentQuestionIndex
 * Displays the answers underneath the questionNumber
 */

 function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);

    });
}

/**
 * Once the quiz has started the function will reset the currentQuestionIndex and sortedHouse to 0
 */

function startQuiz(){
    currentQuestionIndex = 0;
    sortedHouse = 0;
    nextButton.innerHTML = "Next Question";
    showQuestion();
}

startQuiz();




