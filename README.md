# JavaScript Quiz

## Description 

Coding is a skill set that requires constant maintenance. There is something new to learn every day!

As a student it can feel like quite the Sisyphean task. 

This application was created to aid students in their quest to learn JavaScript by preparing them for the coding assessments they will encounter as they apply for jobs. This application also aims to provide positive reinforcement as students prove to themselves – and the browser – their knowledge of JavaScript fundamentals. 

[Deployed GitHub Page]()

![Screenshot of deployed application](/assets/images/screenshot.jpeg)

## Usage

The user clicks on the "Start Quiz" button and the timer starts. The page displays the first question.

The user can choose one of four answers. Each choice is compared against the correct answer, telling the user whether their choice was correct or not.

Every time a question is answered another one will display until there are no more questions left in the quiz.

After completing the quiz – or if the time runs out – the user can save their score with their initials. The score is added to the High Scores page, where it will be sorted in descending order. Which is to say, the higher the score the closer to the top of the list it will be.

## Credits

Application completed by Morgan Qasabian.

## Features

- The landing page contains a link to the High Scores page in the header.
- The "Start Quiz" button handles the event for starting the quiz timer and displaying the question and answers on the page.
- Each answer choice handles the event for displaying the message whether the choice is correct or incorrect. If incorrect, the timer decrement by 10 seconds. Each choice will lead to the next question displaying until all questions have been answered.
- A form is created through DOM manipulation to save the user's score with their initials to local storage. Once completed the window changes to the High Scores page.