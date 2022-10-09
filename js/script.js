// Question bank
var questionBank = [
    {
        question: 'What is the easiest definition of divs?',
        choice: ['monica organizers', 'colors', 'size', 'margins'],
        answer: 'monica organizers'
    },
    {
        question: 'What is the easiest definition of var? ',
        choice: ['declaring code!', 'making events', 'calculating score', 'styling'],
        answer: 'declaring code!'
    },
    {
        question: 'How do you reference an ID in CSS?',
        choice: ['. period', '# hashtag', '; semicolon ', ': colon'],
        answer: '# hashtag'
    },
    {
        question: 'What does addanEventListener do?',
        choice: ['ends the event', 'pauses the event', 'removes the event', 'listens for the code and then turns into an action!'],
        answer: 'listens for the code and then turns into an action!'
    },
    {
        question: 'What is the difference between an array and a list?',
        choice: ['theres no difference', 'an array makes events, lists are multiple types', 'list contains multiple data types, while an array collects several items of the same type', 'arrays get elements, lists collect lists of same type'],
        answer: 'list contains multiple data types, while an array collects several items of the same type'
    },
    {
        question: 'whats the difference between let and const?',
        choice: ['const makes events, a let listens', 'a const lets values change whereas a let does not', 'a const is unpredictable but a let is safe with variables', 'a const declares variables that does not change whereas a let allows the value of the variable to change'],
        answer: 'a const declares variables that does not change whereas a let allows the value of the variable to change'
    },
]


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
var timeLeft = document.getElementById('time')
// function to display questions
function displayQuestion() {
    

    // i+=2
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
    choice0.innerHTML = questionBank[i].choice[0];
    choice1.innerHTML = questionBank[i].choice[1];
    choice2.innerHTML = questionBank[i].choice[2];
    choice3.innerHTML = questionBank[i].choice[3];
    stat.innerHTML = "Question" + ' ' + (i + 1) + 'of' + ' ' + questionBank.length;
}
// function to calculate score

function calScore(e) {
    if (e.innerHTML === questionBank[i].answer) {
        console.log(e.innerHTML)
        score = score + 1;

    }
    else {
        console.log(timer)
        timer = timer - 10
        console.log(timer)
    }

    setTimeout(nextQuestion, 10);

    // function to display next question
    function nextQuestion() {
        if (i < questionBank.length - 1) {
            i = i + 1;
            displayQuestion();

        }
        else {
            console.log('else hit!')
            points.innerHTML = score + '/' +
                questionBank.length;
            quizContainer.style.display = 'block'
            window.location.href = 'end.html'
        }

        // click events to next button
        next.addEventListener('click', nextQuestion);

        // Back to Quiz button event handler
        function returntoQuiz() {
            location.reload();
        }
        // function to check Answers
        function checkAnswer() {
            var answerBank = document.getElementById
                ('answerBank');
            var Answers = document.getElementById('answers');
            answerBank.style.display = 'block';
            scoreBank.style.display = 'block';
            for (var a = 0; a < questionBank.length; a++) {
                var list = document.createElement('li')
                    ;
                list.innerHTML = questionBank[a].answer;
                Answers.appendChild(list);

            }

        }



        displayQuestion();


    }


    displayQuestion();

}





// GIVEN I am taking a code quiz 

// make a instruction box

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
var startButton = document.querySelector("#startButton");
startButton.addEventListener('click', function () {
    const frank = setInterval(function () {
        timeLeft.innerHTML = timer
        console.log("runnings")
        timer = timer - 1
        if (timer === 0){
            clearInterval(frank)
        }
    }, 1000);

    displayQuestion(0)
});

// add an if statement, timer
// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score