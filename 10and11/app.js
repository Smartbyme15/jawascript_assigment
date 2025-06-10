
// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
var city = prompt("enter your city name");
if(city === "karachi"){
    alert("walcome to the city of lights");
}
// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
var gender = prompt("enter your gender");

if(gender ===  "male"){

alert("Good Morning Sir");
  
}else if (gender === "female"){

    alert("Good Morning Ma’am.");
}
 
// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now
alert (" enter input of road traffic signal")
var color = prompt("enter signal colors")

if(color === "red"){
    alert("must stop");
}else if (color === "yellow"){
     
    alert("ready to move");

}else if (color === "green"){
    alert("move now");
}
// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”
var fuel = 0.25
 var fuel = +prompt("Enter remaining fuel in your car (in litres):");

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
} else {
    alert("You have enough fuel");
}
// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is not true");
}

var c = 12;
if (c++ === 13) {
  alert("condition 1 is not true");
}
if (c === 13) {
  alert("condition 2 is not true");
}
if (++c < 13) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

var Cost1 = 20000;
var Cost2 = 2000;
var totalCost = Cost1 + Cost2;
if (totalCost === Cost1 + Cost2 ) {
  alert("The cost equals");
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// Show the total marks, marks obtained, percentage, grade &
// remarks like:
var subject1 = +prompt("enter your subject1 marks ");
var subject2 = +prompt("enter your subject2 marks ");
var subject3 = +prompt("enter your subject3 marks ");
var totatMarks = +prompt("enter total marks");
 
    var obtained = subject1 + subject2 + subject3;
  var percentage = (obtained / totalMarks) * 100;
  var grade = "";
  var remarks = "";


   if (percentage >= 80) {
 grade = "A-one";
 remarks = "exellent"
  } else if (percentage >= 70) {
    grade = "A";
    remarks = "good";
 } else if (percentage >= 60) {
 grade = "B";
 remarks = "improve your study skills";
  } else {
  grade = "Fail";
  remarks = "sorry";
   }
//    7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
var secreteNum = 5;
var guessedNum = +prompt("inter number from 1 to 10");
if (guessedNum === secreteNum){
  alert("Bingo! Correct answer");
}else if (guessedNum + 1 === secreteNum){
  alert("Close enough to the correct answer");
}else{
  alert(" pleaze try again");
}
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var number = +prompt("Enter a number:");
if (number % 3 === 0) {
    alert("The number is divisible by 3.");
} else {
    alert("The number is NOT divisible by 3.");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.
// Step 1: User se number lena
var number = +prompt("Enter a number:");
if (number % 2 === 0) {
    alert("The number is even.");
} else {
    alert("The number is odd.");
}
// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”



