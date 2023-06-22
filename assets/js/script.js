const questions = [
    {
        question: "Which of the following would describe you the best?",
        answers: [
           {text: "Brave", house: gryffindor},
           {text: "Intelligent", house: ravenclaw},
           {text: "Caring" house: hufflepuff},
           {text: "Cunning" house: slytherin},
        ],
   
   },
   {
       question: "Which of the following subjects would you most like to study at Hogwarts?",
       answers: [
        {text: "Transfiguration", house: gryffindor},
        {text: "Charms", house: ravenclaw},
        {text: "Care of Magical Creatures" house: hufflepuff},
        {text: "Potions" house: slytherin},
    ], 

    },
    {
        question: "As a 1st year student, which animal would you most like to accompany you to Hogwarts?",
        answers: [
           {text: "A rat", house: gryffindor},
           {text: "An owl", house: ravenclaw},
           {text: "A toad" house: hufflepuff},
           {text: "A cat" house: slytherin},
        ],
   
    },
    {
        question: "What career path would entice you the most once you had completed your years at Hogwarts?",
        answers: [
           {text: "An auror", house: gryffindor},
           {text: "A professor", house: ravenclaw},
           {text: "A healer" house: hufflepuff},
           {text: "An alchemist" house: slytherin},
        ],
   
    },
    {
        question: "What is your Zodiac sign?",
        answers: [
           {text: "Aries, Leo and Sagittarus", house: gryffindor},
           {text: "Gemini, Libra and Aquarius", house: ravenclaw},
           {text: "Taurus, Virgo and Capricorn" house: hufflepuff},
           {text: "Cancer, Scorpio & Pisces" house: slytherin},
        ],
   
    },
    {
        question: "Yay! You've just become a member of the Quidditch team, what position are you playing?",
        answers: [
           {text: "Seeker", house: gryffindor},
           {text: "Chaser", house: ravenclaw},
           {text: "Crowd supporter" house: hufflepuff},
           {text: "Beater" house: slytherin},
        ],
   
    },
    
];

const questionElement = document.getElementById('quiz-questions');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

