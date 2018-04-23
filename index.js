
//toggles the class of the selections that the user makes
function userHairSelection() {
  Adds the class of the selection to "hairSelection";
  removes the class of "hairSelection" from the sibling in the same container;
   changeColor();
   showQuizMeButton();
}

//function that changes the color of the selection div and ensures the other selection option is not colored
function changeColor() {
  $('.content').on('click' function(){
    $(this).addClass('highlighted');
  })
}

// function changeColor () {
//   document.getElementById('.content').addEventListner("click", function(event){
//     event.addClass('highlighted');
//   })
// })

//makes the quiz me button visible so the user can start the quiz
function showQuizMeButton() {
  checks to see if 2 classes have been denoted "hairSelection", 1 from each container (hair-length-container + hair-texture-container)
  if yes, show the button, if no hide the button

}

//function that hides the current "page" and shows the new page
function enactPageChange1() {
 changes the page-1 class of .visbility to display:none
 changes the page-2 class of .visbility to display:block
}

//function to call
function clickQuizMeButton() {
  createQuestionArray();
  enactPageChange1();
  displayQuestion();
  displayQuizStatus();
}

//////////////page 2 functions/////////////////////////////////////////////////////////////////////////////////
//creates an array of questions based on the users selections for hair length/texture
function createQuestionArray() {
  pushes questions from the universal array to the quizQuestions array
  pushes the two arrays that correspond to their selections to the quizQuestions array
  ****need to figure out how to get from a class of "hairSelection" to the corresponding array of questions***
}

//function that renders the question onto the page
function displayQuestion() {
  loops through quizQuestions array to the first object
  displays image value from image property in questionContainer
  display question value from question proprty in text in question div
  displays all the objects answers from answer array in the answer-option labels
  displays the submit button
}

// currently need to declare to global variables to get this to work
function displayQuizStatus() {
  display `${questionNumber}/10` in .score-score_container
  display correctAnswerTotal in .score_container
}

//function to call
function clickSubmitAnswerButton() {
  checkAnswer();
  displayAnswerResults();
  calculateCorrectAnswers();
  displayQuizStatus();
}

//////////////page 3 functions/////////////////////////////////////////////////////////////////////////////////

//function to see if they got the answer right or wrong
function checkAnswer() {
  identifies their answer selection
  checks it against the objects correct_answer value
  returns true or false value
}

//determines what image and response should be displayed on page3
function displayAnswerResults() {
  if checkAnswer() is true
    then change the current pages class of .visbility to display:none
    changes the next pages class of .visbility to display:block
    displays the image correct_answer in the response_image_container
    displays the text "Correct, go ahead twirl that hair!"

  if checkAnswer() is false
    then changes the current pages class of .visbility to display:none
    changes the next pages class of .visbility to display:block
    displays the image incorrect_answer in the response-response_image_container
    displays the text associated with the object property incorrect_response
  }

// THIS IS NOT GOING TO WORK, you need to get the initial load of the question number working then increment...no global variables
// //displays the question number and correct number
// function displayQuizStatus() {
//   let questionNumber = 0;
//    display `${questionNumber}/10` in .score-score_container
//
//    display correctAnswerTotal in .score_container
//   }
//
//
// //adds to the number of correct answers when they answer correctly
// function calculateCorrectAnswers() {
//   let correctAnswerTotal = 0;
//   if checkAnswer() is null ("aka hasn't run")
//     then correctAnswerTotal = 0
//    else if checkAnswer() is true
//       correctAnswerTotal++
//   }

//moves from
function enactPageChange2() {
 changes the page-3 class of .visbility to display:none
 changes the page-2 class of .visbility to display:block
}

//function to call
function clickNextButton() {
  enactPageChange2();
  displayQuestion();
  displayQuizStatus();
}

//////////////page 4 functions///////////////////////

function displayQuizFinalResults() {
  display `${correctAnswerTotal} /10` in .final-score
  if correctAnswerTotal >= 7
      display "You're a hair ROCKSTAR" in .final-message
    else if correctAnswerTotal > 3 <7
      display "You need some help, start talking to your stylist about your hair needs during your appointment"
    else display "You're in need of some serious hair 101. Fire your stylist, they should be educating you on some of these things"
}

function clickRetakeQuizButton() {
  sets correctAnswerTotal to zero
  sets questionNumber to zero
  changes the page-4 class of .visbility to display:none
  changes the page-1 class of .visbility to display:block
}
