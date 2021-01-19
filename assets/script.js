// JS for quiz application. Written by Mike Marino - Based on tutorial from the WebShala.


// Assign variables tied to html class query selectors. 
// const variables behave like let, but cannot be reassigned. 
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".qText");
const optionContainer = document.querySelector(".qContainer");
const answersIndicatorContainer = document.querySelector(".answers-indicator")


// define variables for javascript functions to use
let questionCounter = 0;  //variable to hold count of how many questions we have
let currentQuestion; // provides for one question at a time
let availableQuestion = []; // create variable Array of quiz questions 
let availableOptions = []; // create variable Array of quiz options
let correctAnswers = 0;
let attemps = 0;

// push question into availableQuestion array. finds # of questons, selects a randome one, and assigns it to teh available question variable
// the push method adds a new item to an array
function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for (let i=0; i<totalQuestion; i++){

        availableQuestion.push(quiz[i])

    }
// console.log(availableQuestion)

}




// set question number, question text and answer options to html
function getNewQuestion(){
    // set total number of questions 
    questionNumber.innerHTML = (questionCounter + 1)  + " of " + quiz.length;

    //set quesetion text
    //get random question
    const questionIndex = availableQuestion[Math.floor(Math.random() * availableQuestion.length)]
    console.log(questionIndex)

    currentQuestion = questionIndex;
    // sets html to the current question.  q is a reference to the array syntax
    questionText.innerHTML = currentQuestion.q;
    
    //get the postion of 'questionIndex' from the availableQuestion arrary
    const index1= availableQuestion.indexOf(questionIndex);

    // remove the questionIndex from the availableQuestion array, so that the question does not repeat
    // The splice() method adds/removes items to/from an array, and returns the removed item(s).
    availableQuestion.splice(index1,1);
    //console.log(availableQuestion); 

//--------------------------------------
    //set options
    // get the length of options
    const optionLen = currentQuestion.options.length
    // push options into avialabeOptions array
   for (let i=0; i<optionLen; i++){
       availableOptions.push(i);
   }

   // clears previous options from the container
   optionContainer.innerHTML='';

        let animationDelay = .2;

   //create options in HTML
   for(let i=0; i<optionLen; i++){

        // random option
       const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];

       // get the position of 'OptionIndex' from the availableOptions
       const index2 = availableOptions.indexOf(optionIndex);

       // remove the optionIndex from the availablOptions, so the option does not repeat
        availableOptions.splice(index2, 1);       
   //     console.log(optionIndex);
 //       console.log(availableOptions);
       
       const option = document.createElement("div");
       option.innerHTML = currentQuestion.options[optionIndex];
       option.style.animationDelay=animationDelay + 's';
       animationDelay = animationDelay + 0.15;
       option.id = optionIndex;
       option.className ="option";
       optionContainer.appendChild(option);
       option.setAttribute("onclick", "getResult(this)")
        
   }
   
//    console.log(availableOptions);
    questionCounter++;
}

// get the result of the current attempt question
function getResult(element){
    const id = parseInt(element.id);
    //get the answer by compring the id of clicked option 
    if(id === currentQuestion.answer){
        console.log("answer is correct");
        // set the green color to the corret
        element.classList.add("correct");
        // element.setAttribute("style", "background-color: green;");
        //add the indicator to correct mark
        updateAnswerIndicator("correct");
        correctAnswers++;

    }else{
        console.log("Answer is wrong");
        element.classList.add("wrong");
        // element.setAttribute("style", "background-color: red;");
        // if the answer is incorret then show teh correct option by showing the green opion
              //add the indicator to correct mark
        updateAnswerIndicator("wrong");
        const optionLen = optionContainer.children.length;
        for(let i=0; i<optionLen; i++) {
            if(parseInt(optionContainer.children[i].id)===currentQuestion.answer){
                optionContainer.children[i].classList.add("correct");
            }
         }
    }
attemps++
unclickableOptions();

}

// make all the options unclicable once teh user selects an option (restrict the user to change the selection)
function unclickableOptions(){
    const optionLen = optionContainer.children.length;
    for(let i=0; i<optionLen; i++){
        optionContainer.children[i].classList.add("already-answered");
    }

}


function answersIndicator(){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
    const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator)

    }
}

function updateAnswerIndicator(markType){
    console.log(markType);
    answersIndicatorContainer.children[questionCounter-1].classList.add(markType);

}

function next(){
    if(questionCounter === quiz.length){
        console.log("quiz over");
        quizOver();

        }
        else{
            getNewQuestion();
        }

}


function quizOver(){


}




localStorage.setItem("q", "5");


var radios = document.getElementsByName("options"); // list of radio buttons
var val = localStorage.getItem('options'); // local storage value
for(var i=0;i<radios.length;i++){
  if(radios[i].value == val){
      radios[i].checked = true; // marking the required radio as checked
  }
}

console.log(localStorage)







window.onload = function(){
    //First set all questions in available question array
setAvailableQuestions();
// second we will call getnewquestion function
getNewQuestion();
// to create indicators of answers
answersIndicator();
}

// var startButton = document.getElementById("starQuiz");

// startButton.addEventListener('click', ){

//     var QuizUser = {

//     Initials: "Sara",
//     qCount: null
// }


//    let qCount = document.querySelector('input[name="options"]:checked');
    
//    localStorage.setItem("QuizUser", JSON.stringify(QuizUser))
//    console.log(QuizUser);
// }) ;




// document.addEventListener('DOMContentLoaded', () => {

// var startBtn = document.getElementById("startQuiz");


// $(document).ready(function(){







// //Get User question count selection
// // var qCount = $("input[name='options']:checked").val();


// startBtn.addEventListener("click", function(event){
//     event.preventDefault();
//     saveUserInfo();
//     console.log(QuizUser)
// });

// function saveUserInfo() {

// // $("input[type='radio']").click(function(){       

// var QuizUser = {

//     Initials: "Sara",
//     qCount:$("input[name='options']:checked").val()
// }


   
//     localStorage.setItem("QuizUser", JSON.stringify(QuizUser))
 


// // })
// }

// }) //close of document.ready function



// //Start Quiz
// //Start Timer
// //change questoin # on screen
// //populate picture
// //populate question
// //populate multiple choice
// //user selection of choice
// //check if choice is correct/incorrect
// //indicate if selection is correct/incorrect
// //get score
// // save score to local storage
// //show score on highscore.html




// //next button appears after selection is made





























// const timeLeftDisplay = document.querySelector('#time-left');


// let timeLeft = 100;

// function countDown(){
// setInterval(function(){
//      if(timeLeft <= 0) {
//         clearInterval(timeLeft= 0)
//         window.location.href = "gameOver.html";
//     }
//     timeLeftDisplay.innerHTML = timeLeft;
//     timeLeft -=1;
// },1000)
// }
// countDown()







// }) //DOM Loader Close - Last line of code

