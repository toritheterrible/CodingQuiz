var questions = [
    {
      title: "What is the capital of Wisconsin?",
      choices: ["Milwaukee", "Green Bay", "Madison", "Eau Claire"],
      answer: "Madison"
    },
    {
      title: "What is the capital of California?",
      choices: ["Sacramento", "Los Angeles", "San Francisco", "San Diego"],
      answer: "Sacramento"
    }, 
    {
        title: "What is the capital of Utah?",
        choices: ["Salt Lake City", "St. George", "Park City", "Ogden"],
        answer: "Salt Lake City"
      },
      {
        title: "What is the capital of Florida?",
        choices: ["Orlando", "Miami", "Sarasota", "Tallahassee"],
        answer: "Tallahassee"
      },
      {
        title: "What is the capital of Tennessee?",
        choices: ["Chattanooga", "Nashville","Memphis", "Knoxville"],
        answer: "Nashville"
      },
    ];

var finalScore = 0;
var correctA = document.createElement("audio");
correctA.setAttribute("src", "smw_1-up.wav");
var inCorrectA = document.createElement("audio");
inCorrectA.setAttribute("src", "smw_blargg.wav");
var gameOver = document.createElement("audio");
gameOver.setAttribute("src", "gameover.wav");
// var b = document.body.querySelector("#time").textContent;
var timesUp;
timePenalty = 0;
totalSeconds = 75 
secondsElapsed = 0;
// finalScoreArray = []; 
// finalScoreArray.push(finalScore.valueOf());

function highScoresList () {

  localStorage.setItem(
    "highScoreTotal",

    JSON.stringify({
     highScores: finalScore
      

    })
  );
}

function submitScoreIntList () {
  localStorage.setItem(
    "initialsTotal",
  
    JSON.stringify({
      initials: submitScoreInt
      

    })
  );
}


$("button").on("click", function () {
  
  var highScoresList = localStorage.getItem("highScoreTotal");
var submitScore = localStorage.getItem("initialsTotal");
  highScoreDiv = $("<div>" + highScoresList + "<span>" +submitScore +  "</span>" +  "</div>") 
  $("#highScoreDiv1").append(highScoreDiv)
  $("#high").addClass("disabled")
console.log(highScoresList)


})








 





$("#quizButton").on("click", function() {
  
  
  function countDown() {

    var timesUp = setInterval(function () {
      var secondsLeft = totalSeconds - secondsElapsed
        $("#time").text(secondsLeft);
        
        secondsElapsed++; 
  
  
        if(secondsLeft === 0) {
        clearInterval(timesUp);
        $(".Quiz").text("");
        // gameOver.play();
        finalScoreDiv = $("<ul>").text("Your Final Score is " + finalScore + ' out of 75!');
        initialHighScores = $(`<input class="form-control initials" type="text" placeholder="Your initials please">`)
        submitScoreButton = $(`<button type="button" class=" submitScore btn btn-primary btn-sm">Submit</button>`)
        $(".Quiz").append(finalScoreDiv, initialHighScores, submitScoreButton);
      
          
  
        
       $(".submitScore").on("click", function() {
        
        submitScoreInt = document.querySelector(".initials").value
        submitScoreIntList();
        highScoresList();
        $(".Quiz").text("");
        $( "#header" ).removeClass("d-none");
        $( "#description" ).removeClass("d-none");
        $("#quizButton").removeClass("d-none");
        })
       
        }
    }, 1000);
  }
  console.log(finalScore) 
    
  
  $( "#header" ).addClass("d-none");
  $( "#description" ).addClass("d-none");
  $("#quizButton").addClass("d-none");
  countDown();
  
question1 = $("<ul>" + questions[0].title + "</ul>");
$(".Quiz").append(question1)

answersA1 = $("<li>" + questions[0].choices[0] + "</li>");
answersA2 = $("<li>" + questions[0].choices[1] + "</li>");
answersA3 = $("<li>" + questions[0].choices[2] + "</li>");
answersA4 = $("<li>" + questions[0].choices[3] + "</li>");
$(".Quiz").append(answersA1)
$(".Quiz").append(answersA2)
$(".Quiz").append(answersA3)
$(".Quiz").append(answersA4)


$("li").addClass("choices");


$("li").on("click", function firstQuestionFun(a) {
  b = document.body.querySelector("#time").textContent
  if (a.target.textContent === questions[0].answer)
  {
    correctA.play();
    alert("Correct")
    
    if (secondsElapsed < 10) {
      finalScore+= 5;
    }
    if (secondsElapsed < 12) {
      finalScore+= 5;
    }
    if (secondsElapsed < 15) {
      finalScore+= 5;
    }
console.log(finalScore)
    
  
    $(".Quiz").text("")
    secondQuestionFun();
  }
  else {
    inCorrectA.play();
    alert("Incorrect");
    secondsElapsed = secondsElapsed + 15
    $(".Quiz").text("")
    secondQuestionFun();

  }

  
});

function secondQuestionFun() {

  question2 = $("<ul>" + questions[1].title + "</ul>");
  $(".Quiz").append(question2)
  
  answersB1 = $("<li>" + questions[1].choices[0] + "</li>");
  answersB2 = $("<li>" + questions[1].choices[1] + "</li>");
  answersB3 = $("<li>" + questions[1].choices[2] + "</li>");
  answersB4 = $("<li>" + questions[1].choices[3] + "</li>");
  $(".Quiz").append(answersB1)
  $(".Quiz").append(answersB2)
  $(".Quiz").append(answersB3)
  $(".Quiz").append(answersB4)

$("li").addClass("choices");

$("li").on("click", function secondQuestionFun2(a) {
  
  
  if (a.target.textContent === questions[1].answer)
  
  {
    correctA.play();
    alert("Correct")

    if (secondsElapsed < 10) {
      finalScore+= 5;
    }
    if (secondsElapsed < 12) {
      finalScore+= 5;
    }
    if (secondsElapsed < 15) {
      finalScore+= 5;
    }
    console.log(finalScore)
    $(".Quiz").text("")
     thirdQuestionFun();
  }
  
  else {
    inCorrectA.play();
    alert("Incorrect"); 
    secondsElapsed = secondsElapsed + 15
    $(".Quiz").text("")
    thirdQuestionFun();
  
  }
}

)}

function thirdQuestionFun() {
  
  question3 = $("<ul>" + questions[2].title + "</ul>");
  $(".Quiz").append(question3)
  
  answersC1 = $("<li>" + questions[2].choices[0] + "</li>");
  answersC2 = $("<li>" + questions[2].choices[1] + "</li>");
  answersC3 = $("<li>" + questions[2].choices[2] + "</li>");
  answersC4 = $("<li>" + questions[2].choices[3] + "</li>");
  $(".Quiz").append(answersC1)
  $(".Quiz").append(answersC2)
  $(".Quiz").append(answersC3)
  $(".Quiz").append(answersC4)

$("li").addClass("choices");


$("li").on("click", function thirdQuestionFun2(a) {
  
  
  if (a.target.textContent === questions[2].answer)
  
  {
    correctA.play();
    alert("Correct")
    if (secondsElapsed < 10) {
      finalScore+= 5;
    }
    if (secondsElapsed < 12) {
      finalScore+= 5;
    }
    if (secondsElapsed < 15) {
      finalScore+= 5;
    }
    $(".Quiz").text("")
    fourthQuestionFun();
  }
  
  else {
    inCorrectA.play();
    alert("Incorrect");
    secondsElapsed = secondsElapsed + 15
    $(".Quiz").text("")
    fourthQuestionFun();
    

  
  }
}

)};

function fourthQuestionFun() {
  
  question4 = $("<ul>" + questions[3].title + "</ul>");
  $(".Quiz").append(question4)
  
  answersD1 = $("<li>" + questions[3].choices[0] + "</li>");
  answersD2 = $("<li>" + questions[3].choices[1] + "</li>");
  answersD3 = $("<li>" + questions[3].choices[2] + "</li>");
  answersD4 = $("<li>" + questions[3].choices[3] + "</li>");
  $(".Quiz").append(answersD1)
  $(".Quiz").append(answersD2)
  $(".Quiz").append(answersD3)
  $(".Quiz").append(answersD4)

$("li").addClass("choices");


$("li").on("click", function fourthQuestionFun2(a) {
  
  
  if (a.target.textContent === questions[3].answer)
  
  {
    correctA.play();
    alert("Correct")
    if (secondsElapsed < 10) {
      finalScore+= 5;
    }
    if (secondsElapsed < 12) {
      finalScore+= 5;
    }
    if (secondsElapsed < 15) {
      finalScore+= 5;
    }
    console.log(finalScore)
    $(".Quiz").text("")
    fifthQuestionFun();
  }
  
  else {
    inCorrectA.play();
    alert("Incorrect");
    secondsElapsed = secondsElapsed + 15
    $(".Quiz").text("")
    fifthQuestionFun();

  }
}

)};

function fifthQuestionFun() {
  
  question5 = $("<ul>" + questions[4].title + "</ul>");
  $(".Quiz").append(question5)
  
  answersE1 = $("<li>" + questions[4].choices[0] + "</li>");
  answersE2 = $("<li>" + questions[4].choices[1] + "</li>");
  answersE3 = $("<li>" + questions[4].choices[2] + "</li>");
  answersE4 = $("<li>" + questions[4].choices[3] + "</li>");
  $(".Quiz").append(answersE1)
  $(".Quiz").append(answersE2)
  $(".Quiz").append(answersE3)
  $(".Quiz").append(answersE4)
 
$("li").addClass("choices");

$("li").on("click", function fifthQuestionFun2(a) {

  
  if (a.target.textContent === questions[4].answer)
  
  {
    
    if (secondsElapsed < 10) {
      finalScore+= 5;
    }
    if (secondsElapsed < 12) {
      finalScore+= 5;
    }
    if (secondsElapsed < 15) {
      finalScore+= 5;
    }
    correctA.play();
    alert("Correct")
    secondsElapsed = 75
    $(".Quiz").text("");
    gameOver.play();
    finalScoreDiv = $("<ul>").text("Your Final Score is " + finalScore + ' out of 75!');
    initialHighScores = $(`<input class="form-control initials" type="text" placeholder="Your initials please">`)
    submitScoreButton = $(`<button type="button" class=" submitScore btn btn-primary btn-sm">Submit</button>`)
    $(".Quiz").append(finalScoreDiv, initialHighScores, submitScoreButton);
  
  }
  
  else {
    inCorrectA.play();
    secondsElapsed = 75
    alert("Incorrect");
    $(".Quiz").text("");
    gameOver.play();
    finalScoreDiv = $("<ul>").text("Your Final Score is " + finalScore + ' out of 75!');
    initialHighScores = $(`<input class="form-control initials" type="text" placeholder="Your initials please">`)
    submitScoreButton = $(`<button type="button" class=" submitScore btn btn-primary btn-sm">Submit</button>`)
    $(".Quiz").append(finalScoreDiv, initialHighScores, submitScoreButton);
 
  }
  $(".submitScore").on("click", function() {
   
    submitScoreInt = document.querySelector(".initials").value
    submitScoreIntList();
    highScoresList();
    alert("Now Back to the Main Menu");
    $(".Quiz").text("");
    $( "#header" ).removeClass("d-none");
    $( "#description" ).removeClass("d-none");
    $("#quizButton").removeClass("d-none");
  location.reload();
   
    })
}

)};
});





  
  








  