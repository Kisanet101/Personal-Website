//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var funScore = 0;
var creativeScore = 0;
var outgoingScore = 0;
var originalScore = 0;
var result = 0;


//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var result = document.getElementById("result");
var restart = document.getElementById("restart");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", outgoing);
q1a2.addEventListener("click", original);
q1a3.addEventListener("click", fun);
q1a4.addEventListener("click", creative);

q2a1.addEventListener("click", creative);
q2a2.addEventListener("click", fun);
q2a3.addEventListener("click", original);
q2a4.addEventListener("click", outgoing);

q3a1.addEventListener("click", fun);
q3a2.addEventListener("click", outgoing);
q3a3.addEventListener("click", creative);
q3a4.addEventListener("click", original);

q4a1.addEventListener("click", outgoing);
q4a2.addEventListener("click", creative);
q4a3.addEventListener("click", original);
q4a4.addEventListener("click", fun);

q5a1.addEventListener("click", outgoing);
q5a2.addEventListener("click", creative);
q5a3.addEventListener("click", fun);
q5a4.addEventListener("click", original);
                      
restart.addEventListener("click", restartButton);

//#TODO: Define quiz functions here
function fun(){
  funScore += 1;
  questionCount += 1;
  //alert("One Point to Fun!");
  if (questionCount >= 5) {
  updateResult();
}
}
function creative(){
 creativeScore += 1;
 questionCount += 1;; 
 //alert("One Point to Creative!");
 if (questionCount >= 5) {
 updateResult();
} 
}

function outgoing(){
 outgoingScore += 1;
 questionCount += 1; 
 //alert("One Point to Outgoing!");
 if (questionCount >= 5) {
 updateResult();
}
}

function original(){
 originalScore += 1;
 questionCount += 1;; 
 //alert("One Point to Original!");
 if (questionCount >= 5) {
 updateResult();
}
}

function updateResult(){
   if (creativeScore >= 3){
     result.innerHTML = "People most appreciate your creative mind! You think out of the box and find new, innovative solutions to problems.";
}
  else if (funScore >= 3) {
    result.innerHTML = "People most appreciate your fun personality! You love to try new things, explore new things, and travel.";
}
  else if (originalScore >= 3) {
    result.innerHTML = "People most appreciate that your one of a kind, your unique! You have a unique sense of style, and people  love that about you.";
}
  else if (outgoingScore >= 3) {
    result.innerHTML = "People most appeciate your outgoing nature! You love to spend time with your friends and focus on living in the moment.";
}
 else {
  result.innerHTML = "Hmm.. We're not quite sure. Try again later."; 
}
}

//Reset your variables tracking the scores for each of your quiz options.
//Reset your variable tracking which question the user is on.

function restartButton(){
result.innerHTML = "Your results are ...";  
questionCount = 0;
funScore = 0;
creativeScore = 0;
outgoingScore = 0;
originalScore = 0;  
}

