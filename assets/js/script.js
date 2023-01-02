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

var startButton = document.querySelector("#start");
var startEl = document.querySelector("#start-page");
var timerEl = document.querySelector("#timer-count");
var questionEl = document.querySelector("#question-title");
var answerEl = document.querySelector("#answer-list");
var messageEl = document.querySelector("#msg");

var timerInterval = 0;
var quizIndex = 0;
var secondsLeft = questions.length * 15;

startButton.addEventListener("click", function(){
    startEl.textContent = "";

    timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            quizComplete();
        }
    }, 1000);

    displayQuiz(quizIndex);
});
   
    answerEl.setAttribute("style", "visibility: hidden");

    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");

    answerEl.appendChild(li1);
    answerEl.appendChild(li2);
    answerEl.appendChild(li3);
    answerEl.appendChild(li4);

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
    answerEl.addEventListener("click", compareChoice);
}

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
    
    if (quizIndex >= questions.length) {
        quizComplete();
    } else {
        displayQuiz(quizIndex);
    }
}

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

    completeSubmit.addEventListener("click", function (){
        
        if (!completeInput.value){
            window.alert("Please enter your initials.");
        } else {
            var userScore = {
                initials: completeInput.value.trim(),
                score: timeScore
            }
            
            var storedScores = localStorage.getItem("scores");
            
            if (storedScores !== null) {
                storedScores = JSON.parse(localStorage.getItem("scores"));
            } else {
                storedScores = [];
            }
            
            storedScores.push(userScore);
            storedScores.sort((a, b) => b.score - a.score);
            localStorage.setItem("scores", JSON.stringify(storedScores));
            window.location.replace("./highscores.html");
        }
    });
}