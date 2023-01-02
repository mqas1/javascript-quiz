var scoreListEl = document.querySelector("#score-list");
var backButton = document.querySelector("#back-btn");
var clearButton = document.querySelector("#clear-btn");

function renderHighScores(){
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    
    if (storedScores !== null) {

        storedScores.forEach(element => {
            var scoreLi = document.createElement("li");
            scoreLi.textContent = element.initials + " - " + element.score;
            scoreListEl.appendChild(scoreLi);
        });
    }
}

renderHighScores();

backButton.addEventListener("click", function(){
    window.location.replace("./index.html");
});

clearButton.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});