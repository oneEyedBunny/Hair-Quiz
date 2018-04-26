//global object and document.ready function for all
$(function(event) {
  var state = {
    currentQuestionNumber: 0,
    correctScore: 0,
    length: "",
    texture: "",
    finalQuizQuestions: [],
    correct_answer: "",
    incorrect_response: ""
  };

  //changes the color of the selection to orange and ensures that the alternate option is not orange
  $(".hair-content-length").click(function(event) {
    $(".hair-content-length").removeClass("highlighted");
    $(event.currentTarget).addClass("highlighted");
    state.length = $(event.currentTarget).attr("data-length");
    showQuizMeButton();
    $(".quiz-me").scrollIntoView({
      behavior: "smooth"
    });
  });

  $(".hair-content-texture").click(function(event) {
    $(".hair-content-texture").removeClass("highlighted");
    $(event.currentTarget).addClass("highlighted");
    state.texture = $(event.currentTarget).attr("data-texture");
    showQuizMeButton();
    $(".quiz-me").scrollIntoView({
      behavior: "smooth"
    });
  });

//shows a button to to start the quiz once two selections have been made
  function showQuizMeButton(){
    if(state.length && state.texture !=="") {
      $(".quiz-me").removeClass("hidden");
    }
  }

//calls several functions when quiz me button is clicked
  $(".quiz-me").click(function() {
    enactPageChange(1,2);
    createQuestionArray();
    displayQuizStatus();
    displayQuestionOnPage();
  })


//function that hides the current page and shows the next page
function enactPageChange(currentPageNumber, nextPageNumber) {
  $("#page-"+currentPageNumber).addClass("hidden");
  $("#page-"+nextPageNumber).removeClass("hidden");
}

//////////////page 2 functions/////////////////////////////////////////////////////////////////////////////////
//creates an array of questions based on the users selections for hair length/texture + standard universal questions
function createQuestionArray() {
  let lengthQuestions;
  let textureQuestions;

  if(state.length ==="long") {
      lengthQuestions = longQuestions;
   } else if (state.length ==="short") {
      lengthQuestions = shortQuestions;
  }
  if(state.texture ==="straight"){
      textureQuestions = straightQuestions;
  } else if (state.texture ==="curly"){
      textureQuestions = curlyQuestions;
  }
  state.finalQuizQuestions = [...universalQuestions, ...lengthQuestions, ...textureQuestions];
  console.log(state.finalQuizQuestions);
}

//displays the question number and the # of correct answers
function displayQuizStatus() {
  $(".question-number").text(`Question ${state.currentQuestionNumber}/10`);
  $(".correct-score").text(`Correct: ${state.correctScore}`);
}

//function that renders the question, image, and potential answers onto the page
function displayQuestionOnPage() {
  if (state.currentQuestionNumber < state.finalQuizQuestions.length) {
    let currentObject = state.finalQuizQuestions[state.currentQuestionNumber];
    $(".question-text").text(currentObject.question);
    $(".question-image").attr("src", currentObject.image);
      for(let i = 0; i < currentObject.answers.length ; i ++) {
          $(".answer-option-"+i).after(currentObject.answers[i]).attr("value", currentObject.answers[i]);
      }
      //changes the color of the selection to orange, logs the answer & associated properties to the global object
        $(".answer").click(function(event) {
          $(".answer").parent().removeClass("highlighted");
          $(event.target).parent().addClass("highlighted");
          state.userAnswer = $(event.target).attr("value");
          state.correct_answer = currentObject.correct_answer;
          state.incorrect_response = currentObject.incorrect_response;
      })
    }
   }

//calls several functions when submit button is clicked
  $(".submit").click(function() {
    enactPageChange(2,3)
    checkAnswer();
    //calculateCorrectAnswers();
    displayQuizStatus();
    //displayAnswerResults();
  })


// //////////////page 3 functions/////////////////////////////////////////////////////////////////////////////////

//function to see if they got the answer right or wrong
 function checkAnswer(event) {
   console.log(state.userAnswer);
   if(state.userAnswer === state.correct_answer) {
     state.correctScore++
     return true;
    } else {
      return false;
   };
  }

//determines what image and response should be displayed on page-3
// function displayAnswerResults() {
//   if checkAnswer() === true
//     displays the image correct_answer in the response_image_container
//     displays the text "Correct, go ahead twirl that hair!"
//    } else {
//     displays the image incorrect_answer in the response-response_image_container
//     displays the text associated with the object property incorrect_response
//   }
//  }
//adds to the number of correct answers when they answer correctly
// // function calculateCorrectAnswers() {
// //   let correctAnswerTotal = 0;
// //   if checkAnswer() is null ("aka hasn't run")
// //     then correctAnswerTotal = 0
// //    else if checkAnswer() is true
// //       correctAnswerTotal++
// //   }


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

//
// //moves from
// function enactPageChange2() {
//  changes the page-3 class of .visbility to display:none
//  changes the page-2 class of .visbility to display:block
// }

//function to call
function clickNextButton() {
  enactPageChange(3,2);
  displayQuestionOnPage();
  displayQuizStatus();
}

// //////////////page 4 functions///////////////////////

// function displayQuizFinalResults() {
//   display `${correctAnswerTotal} /10` in .final-score
//   if correctAnswerTotal >= 7
//       display "You're a hair ROCKSTAR" in .final-message
//     else if correctAnswerTotal > 3 <7
//       display "You need some help, start talking to your stylist about your hair needs during your appointment"
//     else display "You're in need of some serious hair 101. Fire your stylist, they should be educating you on some of these things"
// }

//resets score stats and takes user to first page
  function clickRetakeQuizButton() {
    state.correctScore =  0;
    state.currentQuestionNumber = 0;
    enactPageChange(4,1);
  }
}); //closes the global object function
