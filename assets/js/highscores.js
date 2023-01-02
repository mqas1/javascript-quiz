var scoreListEl = document.querySelector("#score-list");
var backButton = document.querySelector("#back-btn");
var clearButton = document.querySelector("#clear-btn");

// Function to get values from local storage and display them as list items.
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

// Click event to go from the high scores page back to the landing page.
backButton.addEventListener("click", function(){
    window.location.replace("./index.html");
});

// Clears items from local storage and refreshes the page to indicate this.
clearButton.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});