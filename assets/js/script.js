// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// Need to create game where a new question appears when one is answered.
// When an answer is incorrect it will add 10 seconds to the timer.
// When all questions are answered the time on the counter is the score.
// User can log their score to the High Scores list using their initials.


var questions = [
    {
        title: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },
    {
        title: 'The condition in an if / else statement is enclosed within ____.',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses'
    },
    {
        title: 'Arrays in JavaScript can be used to store ____.',
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above'
    },
    {
        title: 'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
        answer: 'quotes'
    },
    {
        title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal / bash', 'for loops', 'console log'],
        answer: 'console log'
    },
];

var startButton = document.querySelector("#start");
var startEl = document.querySelector("#start-page");
var timerEl = document.querySelector("#timer-count");
var questionEl = document.querySelector("#question-title");
var answerEl = document.querySelector("#answer-list");
var messageEl = document.querySelector("#msg");


var secondsLeft = questions.length * 15;

startButton.addEventListener("click", function(){
    startEl.textContent = "";

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;
    }, 1000);

var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

answerEl.appendChild(li1);
answerEl.appendChild(li2);
answerEl.appendChild(li3);
answerEl.appendChild(li4);

for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i].title;
    var currentChoiceA = questions[i].choices[0];
    var currentChoiceB = questions[i].choices[1];
    var currentChoiceC = questions[i].choices[2];
    var currentChoiceD = questions[i].choices[3];
    var currentAnswer = questions[i].answer;  

    questionEl.textContent = currentQuestion;
    li1.textContent = currentChoiceA;
    li2.textContent = currentChoiceB;
    li3.textContent = currentChoiceC;
    li4.textContent = currentChoiceD;

    questionEl.setAttribute("style", "font-size: 32px; font-weight: 700; padding: 0rem 8rem 1rem 12rem");
}

function compareChoice(event) {
    
    var element = event.target

    if (element.matches("li")) {
       
        if (element.textContent == currentAnswer) {
            messageEl.textContent = "Correct!";
        } else {
            secondsLeft = secondsLeft -10;
            messageEl.textContent = "Wrong!";
        }
    }
    messageEl.setAttribute("style", "visibility: visibible");
}
answerEl.addEventListener("click", compareChoice);


}); 

