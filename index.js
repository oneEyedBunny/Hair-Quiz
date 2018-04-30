//global object and document.ready function for all
$(function(event) {
 let state;
 clearState()

  function clearState(){
    state = {
      currentQuestionNumber: 0,
      correctScore: 0,
      length: "",
      texture: "",
      finalQuizQuestions: [],
      correct_answer: "",
    };
  }

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

//shows a button to start the quiz once two selections have been made, screen scrolls to button.
  function showQuizMeButton(){
    if(state.length && state.texture !=="") {
      $(".quiz-me").removeClass("hidden");
      $("html, body").animate( {
        scrollTop: $(".quiz-me").offset().top}, 2000);
  }
}

//calls several functions when quiz me button is clicked
  $(".quiz-me").click(function() {
    showPageNumber(2);
    createQuestionArray();
    displayQuizStatus();
    displayQuestionOnPage();
  })


//function that hides the current page and shows the specified page
function showPageNumber(nextPageNumber) {
  $(".page").addClass("hidden");
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
}

//displays the question number and the # of correct answers
function displayQuizStatus() {
  $(".question-number").text(`Question ${state.currentQuestionNumber+1}/10`);
  $(".correct-score").text(`Correct: ${state.correctScore}`);
}

//function that renders the question, image, and answers onto the page
function displayQuestionOnPage() {
  //clears prior answer
  $(".answer-option").removeClass("highlighted");
  $(".answer").prop('checked', false);
  state.userAnswer = "";

  if (state.currentQuestionNumber < state.finalQuizQuestions.length) {
    let currentObject = state.finalQuizQuestions[state.currentQuestionNumber];
    $(".question-text").text(currentObject.question);
    $(".question-image").attr("src", currentObject.image);
      for(let i = 0; i < currentObject.answers.length ; i ++) {
          $("#answer-option-"+i).text(currentObject.answers[i]);
      }
    } else {
      displayFinalQuizResults();
    };
   }
//changes the color of the selection to orange, logs the answer & associated properties to the global object
   $(".answer").click(function(event) {
     $('#error-message').text("");
     $(".answer").parent().removeClass("highlighted");
     $(event.target).parent().addClass("highlighted");
     state.userAnswer = $(event.target).attr("value");
   })

//calls several functions when submit button is clicked
  $(".submit").click(function() {
    if(state.userAnswer !=="") {
      showPageNumber(3);
      displayAnswerResults();
      displayQuizStatus();
  } else {
    $('#error-message').text("You need to make a selection before you can move onto the next question");
  }
})

////////////////page 3 functions/////////////////////////////////////////////////////////////////////////////////
//determines what image and response should be displayed on page-3
  function displayAnswerResults() {
    let currentQuestion = state.finalQuizQuestions[state.currentQuestionNumber];
    if (state.userAnswer === currentQuestion.correct_answer) {
      state.correctScore++;
      $(".response-images").attr('src', "images/correct_answer.jpg");
      $(".response-answer > h2").text("Correct, go ahead twirl that hair!");
    } else {
      $(".response-images").attr('src', "images/incorrect_answer.png");
      $(".response-answer > h2").text(`Incorrect, ${currentQuestion.incorrect_response}`);
    };
   }

//moves the quiz forward to the next question
$(".next").click(function() {
  state.currentQuestionNumber++;
  showPageNumber(2);
  displayQuizStatus();
  displayQuestionOnPage();
})

////////////////page 4 functions///////////////////////
//displays the results of the quiz
function displayFinalQuizResults() {
  showPageNumber(4);
  $(".final-score").text(`You got ${state.correctScore}/10 Correct`);
  if (state.correctScore >= 8) {
      $(".final-message").text("You're a hair ROCKSTAR!!");
    } else if
    (state.correctScore >= 4) {
      $(".final-message").text("You need some help, start talking to your stylist about your hair needs during your appointment");
    } else {
      $(".final-message").text("You're in need of some serious hair 101. Fire your stylist, they should be educating you on some of these things");
    }
}

//resets score stats and takes user to first page
  $(".retake-quiz").click(function() {
    showPageNumber(1);
    clearState();
    $(".hair-content-length").removeClass("highlighted");
    $(".hair-content-texture").removeClass("highlighted");
    $(".quiz-me").addClass("hidden");
  })

}); //closes the global object function
