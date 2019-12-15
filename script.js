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
var b = 75
var int



$("#quizButton").on("click", function() {
  
  function countDown(b) {
  
          var int = setInterval(function () {
        
              $("#time").text(b);
              
              b--; 
              if(b <= -1) {
              clearInterval(int);
              }
          }, 1000);
      }
      countDown(b);
    
  
  $( "#header" ).addClass("d-none");
  $( "#description" ).addClass("d-none");
$("#quizButton").remove();

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
$("ul").addClass("list-group card-header text-center border-dark");
$("li").addClass("list-group-item btn");
$("li").addClass("choices");


$("li").on("click", function firstQuestionFun(p) {
 
  if (p.target.textContent === questions[0].answer)
  {
    alert("Correct")
    finalScore+= 15;
    console.log(finalScore);
    $(".Quiz").text("")
    secondQuestionFun();
  }
  else {
    alert("Incorrect");
    $(".Quiz").text("")

    secondQuestionFun();

  }

  
});
function secondQuestionFun() {

  question1 = $("<ul>" + questions[1].title + "</ul>");
  $(".Quiz").append(question1)
  
  answersB1 = $("<li>" + questions[1].choices[0] + "</li>");
  answersB2 = $("<li>" + questions[1].choices[1] + "</li>");
  answersB3 = $("<li>" + questions[1].choices[2] + "</li>");
  answersB4 = $("<li>" + questions[1].choices[3] + "</li>");
  $(".Quiz").append(answersB1)
  $(".Quiz").append(answersB2)
  $(".Quiz").append(answersB3)
  $(".Quiz").append(answersB4)
  $("ul").addClass("list-group card-header text-center border-dark");
$("li").addClass("list-group-item btn");
$("li").addClass("choices");

$("li").on("click", function secondQuestionFun2(a) {
  console.log(secondQuestionFun2)
  
  if (a.target.textContent === questions[1].answer)
  
  {
    alert("Correct")
    finalScore+= 15;
    console.log(finalScore);
    $(".Quiz").text("")
     thirdQuestionFun();
  }
  
  else {
    alert("Incorrect");
    $(".Quiz").text("")
    thirdQuestionFun();
    

  
  }
}

)}

function thirdQuestionFun() {
  
  question1 = $("<ul>" + questions[2].title + "</ul>");
  $(".Quiz").append(question1)
  
  answersC1 = $("<li>" + questions[2].choices[0] + "</li>");
  answersC2 = $("<li>" + questions[2].choices[1] + "</li>");
  answersC3 = $("<li>" + questions[2].choices[2] + "</li>");
  answersC4 = $("<li>" + questions[2].choices[3] + "</li>");
  $(".Quiz").append(answersC1)
  $(".Quiz").append(answersC2)
  $(".Quiz").append(answersC3)
  $(".Quiz").append(answersC4)
  $("ul").addClass("list-group card-header text-center border-dark");
$("li").addClass("list-group-item btn");
$("li").addClass("choices");


$("li").on("click", function secondQuestionFun2(a) {
  console.log(secondQuestionFun2)
  
  if (a.target.textContent === questions[2].answer)
  
  {
    alert("Correct")
    finalScore+= 15;
    console.log(finalScore);
    $(".Quiz").text("")
    //  thirdQuestionFun();
  }
  
  else {
    alert("Incorrect");
    $(".Quiz").text("")
    // thirdQuestionFun();
    

  
  }
}

)}














// $(".Quiz").append
//   $.each(questions  , function(i, question) {
//     questionTitleDiv = $("<ul>" + question.title + "<li>" + question.choices[0] +"</li>" + "<li>" + question.choices[1] + "<li>" + question.choices[2] + "<li>" + question.choices[3] +"</li>"+"</li>" +"</li>" +"</ul>")
//     $(".Quiz").append(questionTitleDiv);
   
//     $("ul").addClass("list-group card-header text-center border-dark");
//     $("li").addClass("list-group-item");
//     $("li").addClass("choices");
//     $("ul:nth-child(n+2)").addClass("d-none");
  
//     $(".list-group-item").on("click", function (p)
//     { 
//       correctAnswer = p.target.textContent;
    
     
    
//     });
    
//     function countDown(b) {
//       var int = setInterval(function () {
//           $("#time").text(b);
//           b-- || clearInterval(int);  //if i is 0, then stop the interval
//       }, 1000);
//   }
//   countDown(75);
//     });






});





  
  







    ///etc.
  