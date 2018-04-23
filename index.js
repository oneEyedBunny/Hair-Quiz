$(function() {
  var state = {
    currentQuestion: 0,
    score: 0,
    length: "",
    texture: "",
    questions: []
  };

  //changes the color of the selection to orange and ensures that the alternate option is not orange
  $(".hair-content-length").click(function(event) {
    $(".hair-content-length").removeClass("highlighted");
    $(event.currentTarget).addClass("highlighted");
    state.length = $(event.currentTarget).attr("data-length");
    showQuizMeButton();
  });

  $(".hair-content-texture").click(function(event) {
    $(".hair-content-texture").removeClass("highlighted");
    $(event.currentTarget).addClass("highlighted");
    state.texture = $(event.currentTarget).attr("data-texture");
    showQuizMeButton();
  });

//shows a button to to start the quiz once two selections have been made
  function showQuizMeButton(){
    if(state.length && state.texture !=="") {
      $(".quiz-me").removeClass("hidden");
    }
  }

//function to call
  $(".quiz-me").click(function() {
    console.log("I'm awesome");
    //createQuestionArray();
    //enactPageChange(1);
    //displayQuestion();
    //displayQuizStatus();
  })
});
//
// //function that hides the current page and shows the next page
// function enactPageChange(pageNumber) {
//   $("#page-").addClass("hidden")
//   $("#page-"+pageNumber).removeClass("hidden");
// }
//
// //////////////page 2 functions/////////////////////////////////////////////////////////////////////////////////
// //creates an array of questions based on the users selections for hair length/texture
// function createQuestionArray() {
//
// let lengthQuestions;
// let textureQuestions;
//
// if(this.state.length ==="long"){
//     lengthQuestions = shortQuestions;
// }else if (this.state.length ==="shor"){
//     lengthQuestions = longQuestions
// }
// //
// // if(this.state.tex ==="long"){
// //     textureQuestions = shortQuestions;
// // }else if (this.state.length ==="shor"){
// //     textureQuestions = longQuestions
// // }
//
// state.questions = [...universalQuestions, ...lengthQuestions, ...textureQuestions]
//   // pushes questions from the universal array to the quizQuestions array
//   // pushes the two arrays that correspond to their selections to the quizQuestions array
// }
//
//
//
// //function that renders the question onto the page
// function displayQuestion() {
//   loops through quizQuestions array to the first object
//   displays image value from image property in questionContainer
//   display question value from question proprty in text in question div
//   displays all the objects answers from answer array in the answer-option labels
//   displays the submit button
// }
//
// // currently need to declare to global variables to get this to work
// function displayQuizStatus() {
//   display `${questionNumber}/10` in .score-score_container
//   display correctAnswerTotal in .score_container
// }
//
// //function to call
// function clickSubmitAnswerButton() {
//   checkAnswer();
//   displayAnswerResults();
//   calculateCorrectAnswers();
//   displayQuizStatus();
// }
//
// //////////////page 3 functions/////////////////////////////////////////////////////////////////////////////////
//
// //function to see if they got the answer right or wrong
// function checkAnswer() {
//   identifies their answer selection
//   checks it against the objects correct_answer value
//   returns true or false value
// }
//
// //determines what image and response should be displayed on page3
// function displayAnswerResults() {
//   if checkAnswer() is true
//     then change the current pages class of .visbility to display:none
//     changes the next pages class of .visbility to display:block
//     displays the image correct_answer in the response_image_container
//     displays the text "Correct, go ahead twirl that hair!"
//
//   if checkAnswer() is false
//     then changes the current pages class of .visbility to display:none
//     changes the next pages class of .visbility to display:block
//     displays the image incorrect_answer in the response-response_image_container
//     displays the text associated with the object property incorrect_response
//   }
//
// // THIS IS NOT GOING TO WORK, you need to get the initial load of the question number working then increment...no global variables
// // //displays the question number and correct number
// // function displayQuizStatus() {
// //   let questionNumber = 0;
// //    display `${questionNumber}/10` in .score-score_container
// //
// //    display correctAnswerTotal in .score_container
// //   }
// //
// //
// // //adds to the number of correct answers when they answer correctly
// // function calculateCorrectAnswers() {
// //   let correctAnswerTotal = 0;
// //   if checkAnswer() is null ("aka hasn't run")
// //     then correctAnswerTotal = 0
// //    else if checkAnswer() is true
// //       correctAnswerTotal++
// //   }
//
// //moves from
// function enactPageChange2() {
//  changes the page-3 class of .visbility to display:none
//  changes the page-2 class of .visbility to display:block
// }
//
// //function to call
// function clickNextButton() {
//   enactPageChange2();
//   displayQuestion();
//   displayQuizStatus();
// }
//
// //////////////page 4 functions///////////////////////
//
// function displayQuizFinalResults() {
//   display `${correctAnswerTotal} /10` in .final-score
//   if correctAnswerTotal >= 7
//       display "You're a hair ROCKSTAR" in .final-message
//     else if correctAnswerTotal > 3 <7
//       display "You need some help, start talking to your stylist about your hair needs during your appointment"
//     else display "You're in need of some serious hair 101. Fire your stylist, they should be educating you on some of these things"
// }
//
// function clickRetakeQuizButton() {
//   sets correctAnswerTotal to zero
//   sets questionNumber to zero
//   changes the page-4 class of .visbility to display:none
//   changes the page-1 class of .visbility to display:block
// }
