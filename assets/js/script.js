// Question array containing objects with question, choices, and the answer.
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    }
];

// Declaring variables to dynamically interact with the DOM.
var startButton = document.querySelector("#start");
var startEl = document.querySelector("#start-page");
var timerEl = document.querySelector("#timer-count");
var questionEl = document.querySelector("#question-title");
var answerEl = document.querySelector("#answer-list");
var messageEl = document.querySelector("#msg");

var timerInterval = 0;
// Variable used to determine the object index in the question array.
var quizIndex = 0;
// Determines the time by adding 15 seconds to the clock for every question in the array.
var secondsLeft = questions.length * 15;

// Click event to start the timer and display the first question.
startButton.addEventListener("click", function(){
    startEl.textContent = "";

    timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

// If the clock reaches zero it will not continue to decrement instead finishing the game.
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            quizComplete();
        }
    }, 1000);

    displayQuiz(quizIndex);
});
   
// Creates list items for the question choices by manipulating the DOM.
    answerEl.setAttribute("style", "visibility: hidden");

    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");

    answerEl.appendChild(li1);
    answerEl.appendChild(li2);
    answerEl.appendChild(li3);
    answerEl.appendChild(li4);

// Function for iterating over the question array and manipulating the DOM
// to display the question and its answers.
// The quizIndex variable is used as a parameter in the function to determine the first question.
function displayQuiz(quizIndex){
    for (var i = 0; i < questions.length; i++) {
        var currentQuestion = questions[quizIndex].title;
        var currentChoiceA = questions[quizIndex].choices[0];
        var currentChoiceB = questions[quizIndex].choices[1];
        var currentChoiceC = questions[quizIndex].choices[2];
        var currentChoiceD = questions[quizIndex].choices[3]; 
        
        answerEl.setAttribute("style", "visibility: visibile");

        questionEl.textContent = currentQuestion;
        li1.textContent = currentChoiceA;
        li2.textContent = currentChoiceB;
        li3.textContent = currentChoiceC;
        li4.textContent = currentChoiceD;

        questionEl.setAttribute("style", "font-size: 32px; font-weight: 700; padding: 0rem 8rem 1rem 12rem");
    }
// Click event on the quiz questions.
    answerEl.addEventListener("click", compareChoice);
}

// Function for comparing the user choice with the correct answer.
// Each time the user makes a choice the question index is increased by 1
// continuing until there are no more questions left in the array to answer.
function compareChoice(event) {
   
    var element = event.target;

    if (element.matches("li") === true) {
       
        if (element.textContent == questions[quizIndex].answer) {
            messageEl.textContent = "Correct!";
            setTimeout(function (){
                messageEl.setAttribute("style", "visibility: hidden");
            }, 1000);
        } else {
            secondsLeft = secondsLeft -10;
            messageEl.textContent = "Wrong!";
            setTimeout(function (){
                messageEl.setAttribute("style", "visibility: hidden");
            }, 1000);
        }
    }
    messageEl.setAttribute("style", "visibility: visibible");

    quizIndex++;
    
// If there is another question in the array it will be displayed after
// each question is answered by the user.
    if (quizIndex >= questions.length) {
        quizComplete();
    } else {
        displayQuiz(quizIndex);
    }
}

// Function for manipulating the DOM to create the text box to submit the user
// score to local storage.
function quizComplete(){
    questionEl.textContent = "";
    answerEl.textContent = "";
    timerEl.textContent = "0";
    messageEl.setAttribute("style", "visibility: hidden");

    clearInterval(timerInterval);

    var completeH2 = document.createElement("h2");
    completeH2.textContent = "All done!";
    startEl.appendChild(completeH2);

    var completeP = document.createElement("p");
// Turns the quiz timer into the user score.
    var timeScore = secondsLeft;
    completeP.textContent = "Your final score is " + timeScore + ".";
    startEl.appendChild(completeP);

    var completeLabel = document.createElement("label");
    completeLabel.textContent = "Enter initials: ";
    startEl.appendChild(completeLabel);
  
    var completeInput = document.createElement("input");
    completeInput.setAttribute("type", "text");
    startEl.appendChild(completeInput);
  
    var completeSubmit = document.createElement("button");
    completeSubmit.setAttribute("type", "submit");
    completeSubmit.textContent = "Submit";
    completeSubmit.setAttribute("style", "margin-left: 0.5rem");
    startEl.appendChild(completeSubmit);

// Click event on the submit button.
    completeSubmit.addEventListener("click", function (){
        
        if (!completeInput.value){
            window.alert("Please enter your initials.");
        } else {
// Object for the initials of the user and their score.
            var userScore = {
                initials: completeInput.value.trim(),
                score: timeScore
            }
// Gets values from the key "scores" in the local storage. 
            var storedScores = localStorage.getItem("scores");
            
// If there are values the JSON parse method is used to make a JavaScript array
// otherwise an array is made if there are no values stored.
            if (storedScores !== null) {
                storedScores = JSON.parse(localStorage.getItem("scores"));
            } else {
                storedScores = [];
            }
            
// The current score is then pushed into the above array.
            storedScores.push(userScore);
// The array is sorted in descending order.
            storedScores.sort((a, b) => b.score - a.score);
// The array is then saved to local storage as a JSON string.
            localStorage.setItem("scores", JSON.stringify(storedScores));
// The page changes to the high scores page where the score will be displayed.
            window.location.replace("./highscores.html");
        }
    });
}