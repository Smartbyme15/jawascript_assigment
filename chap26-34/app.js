 
 // 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
  

// var number = +prompt("Enter a positive number:");

// if (number > 0) {
//   document.write("<h3>Number: " + number + "</h3>");
//   document.write("<h3>Round off value: " + Math.round(number) + "</h3>");
//   document.write("<h3>Floor value: " + Math.floor(number) + "</h3>");
//   document.write("<h3>Ceil value: " + Math.ceil(number) + "</h3>");
// } else {
//   document.write("<h3>Please enter a positive number.</h3>");
// }

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
  
// var number = +prompt("Enter a negative floating point number:");

// if (number < 0) {
//   document.write("<h3>Number: " + number + "</h3>");
//   document.write("<h3>Round off value: " + Math.round(number) + "</h3>");
//   document.write("<h3>Floor value: " + Math.floor(number) + "</h3>");
//   document.write("<h3>Ceil value: " + Math.ceil(number) + "</h3>");
// } else {
//   document.write("<h3>Please enter a negative floating point number.</h3>");
// }


// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var number = +prompt("Enter any number (positive or negative):");

// var absoluteValue = Math.abs(number);

// document.write("<h3>The absolute value of " + number + " is " + absoluteValue + "</h3>");


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var diceValue = Math.floor(Math.random() * 6) + 1;

// document.write("<h3>Random Dice Value: " + diceValue + "</h3>");


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var toss = Math.floor(Math.random() * 2); 

// var result;
// if (toss === 0) {
//   result = "Heads";
// } else {
//   result = "Tails";
// }

// document.write("<h3>Random Coin Value: " + result + "</h3>");


// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("<h3>Random Number between 1 and 100: " + randomNumber + "</h3>");


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var weight = +prompt("Enter your weight (e.g. 50, 50kgs, 50.2kgs, 50.2kilograms):");
// document.write("<h3>Your weight is: " + weight + " kilograms</h3>");


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var userGuess = +prompt("Guess the secret number (between 1 and 10):");

// if (userGuess == secretNumber) {
//   document.write("<h3> Congratulations! You guessed the secret number!</h3>");
// } else {
//   document.write("<h3>Sorry, the secret number was " + secretNumber + ".</h3>");
// }



// 1. Write a program that displays current date and time in
// your browser.

// var currentDate = Date();

// document.write("<h3>Current Date and Time: " + currentDate + "</h3>");


// 2. Write a program that alerts the current month in words.
// For example December.

// var now = new Date();

// var monthNames = ["January", "February", "March", "April", "May", "June", 
//                   "July", "August", "September", "October", "November", "December"];


// var currentMonthIndex = now.getMonth();

// var currentMonthName = monthNames[currentMonthIndex];

// alert("Current Month: " + currentMonthName);


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var now = new Date();

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var currentDayIndex = now.getDay();

// var currentDayAbbr = dayNames[currentDayIndex];

// alert("Today is: " + currentDayAbbr);


// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var now = new Date();
// var dayIndex = now.getDay(); 

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = days[dayIndex];


// if (currentDay === "Sun") {
//   alert("It's Sunday!");
// } else if (currentDay === "Mon") {
//   alert("It's Monday!");
// } else if (currentDay === "Tue") {
//   alert("It's Tuesday!");
// } else if (currentDay === "Wed") {
//   alert("It's Wednesday!");
// } else if (currentDay === "Thu") {
//   alert("It's Thursday!");
// } else if (currentDay === "Fri") {
//   alert("It's Friday!");
// } else if (currentDay === "Sat") {
//   alert("It's Saturday!");
// }



// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.


// var now = new Date();
// var todayDate = now.getDate(); 

// if (todayDate < 16) {
//   document.write("First fifteen days of the month");
// } else {
//   document.write("Last days of the month");
// }


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var now = new Date();


// var milliseconds = now.getTime(); 
// var minutesOf1970 = Math.floor(milliseconds / (1000 * 60));

// document.write("Minutes since midnight, Jan 1, 1970: " + minutesOf1970 );


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var now = new Date();
// var hour = now.getHours();
// if (hour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var laterDate = new Date(2020, 11, 31);    
// document.write("Later Date: " + laterDate );


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var ramadanStart = new Date("June 18, 2015");
// var today = new Date();
// var diffInMilliseconds = today - ramadanStart;
// var daysPassed = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
// alert(daysPassed + " days have passed since 1st Ramadan, 2015.");


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.




// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.



// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?



// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.



// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month

