// Question bank
var questionBank = [
    {
        question: 'What is the easiest definition of divs?',
        choice: ['A. monica organizers', 'B. colors', 'C. size', 'D. margins'],
        answer: 'A. monica organizers'
    },
    {
        question: 'What is the easiest definition of var? ',
        choice: ['A. declaring code!', 'B. making events', 'C. calculating score', 'D. styling'],
        answer: 'A. declaring code!'
    },
    {
        question: 'How do you reference an ID in CSS?',
        choice: ['A. . period', 'B. # hashtag', 'C. ; semicolon ', 'D. : colon'],
        answer: 'B. # hashtag'
    },
    {
        question: 'What does addanEventListener do?',
        choice: ['A. ends the event', 'B. pauses the event', 'C. removes the event', 'D. listens for the code and then turns into an action!'],
        answer: 'D. listens for the code and then turns into an action!'
    },
    {
        question: 'What is the difference between an array and a list?',
        choice: ['A. theres no difference', 'B. an array makes events, lists are multiple types', 'C. list contains multiple data types, while an array collects several items of the same type', 'D. arrays get elements, lists collect lists of same type'],
        answer: 'C. list contains multiple data types, while an array collects several items of the same type'
    },
    {
        question: 'whats the difference between let and const?',
        choice: ['A. const makes events', 'B. a let listens whereas a const lets values change whereas a let does not', 'C. a const is unpredictable but a let is safe with variables', 'D. a const declares variables that does not change whereas a let allows the value of the variable to change'],
        answer: 'D. a const declares variables that does not change whereas a let allows the value of the variable to change'
    },
]

//TODO: add a button that can be clicked to view the saved high scores ****


var gameoverDiv = document.querySelector(".gameOver")
var submitButton = document.querySelector("#submitButton")

var question = document.getElementById
    ('question');
var quizContainer = document.getElementById
    ('quiz-container');
var scorepanel = document.getElementById
    ('scorepanel');
var choice0 = document.getElementById
    ('choice0');
var choice1 = document.getElementById
    ('choice1');
var choice2 = document.getElementById
    ('choice2');
var choice3 = document.getElementById
    ('choice3');
var next = document.querySelectorAll('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var stat = document.getElementById('question1');
var i = 0;
var score = 0;
var timer = 30;
var showTime;
var isplaying = false;
var isgameover = false;
var timeLeft = document.getElementById('time')
// function to display questions
function displayQuestion() {


    // i+=2
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
    choice0.innerHTML = questionBank[i].choice[0];
    choice1.innerHTML = questionBank[i].choice[1];
    choice2.innerHTML = questionBank[i].choice[2];
    choice3.innerHTML = questionBank[i].choice[3];
    stat.innerHTML = "Question " + (i + 1) + ' of ' + questionBank.length;
}
// function to calculate score

function calScore(e) {
    console.log(e.innerHTML)
    if (e.innerHTML === questionBank[i].answer) {
        console.log(e.innerHTML)
        score = score + 1;

    }
    // before there was an else statement that did not stop the timer, so I fixed it by deleting the else statement to improve the quiz experience.
    nextQuestion()

}

// function to display next question
function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();

    }
    else {
        console.log('else hit!')
        
        gameOver()
    }

    displayQuestion();
}
// added isplaying = false to fix the reset timer gliche.

function gameOver() {
    console.log("gameOver")
    clearInterval(showTime)
    gameoverDiv.setAttribute("class", "gameOver");

    points.innerHTML = score + '/' +  questionBank.length;
    quizContainer.style.display = 'block';
    isplaying = false;
    isgameover=true;
}

// on line 97 there was the code showing on lines 109-110 and that was incorrect which messed up the code, but now its in the correct place to show the score to the user



function savehighScore() {
    var initials = document.getElementById("initials");
    console.log(initials, "initials element");
    console.log(initials.value, "initials value")



    localStorage.setItem(initials.value, score)
}


function resetGame() {
    timeLeft.innerHTML = "00";
    timer = 30;
    i = 0;
    score = 0;
    isgameover = false;
    gameoverDiv.setAttribute("class", "gameOver hide");
    
    points.innerHTML ="";

}

// GIVEN I am taking a code quiz 

// make a instruction box

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// fixed issue: was the timer was not stopping once the questions were all done before because the code was saying to showTime INSIDE the timer, now its FIXED with adding  clearInterval(showTime) on line 106
// fixed issue: before the start button was making the timer go too fast so I added isplaying variable to confirm when its true it will play.

//  NOTE: isplaying will be false and isgameover will run false first until the game is actually over. if isgameover is true than we will reset all the variables. 

var startButton = document.querySelector("#startButton");
startButton.addEventListener('click', function () {
    if(!isplaying && isgameover){
        resetGame();
    }

    if (!isplaying && !isgameover) {
        isplaying = true
        startButton.textContent = "Restart Quiz"; 
        showTime = setInterval(function () {
            timeLeft.innerHTML = timer
            console.log("runnings")
            if (timer <= 0) {
                gameOver()
            }
            timer = timer - 1
        }, 1000);
        displayQuestion(0)
    }
    
});

submitButton.addEventListener("click", function () {
    savehighScore()
})

// add an if statement, timer
// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score