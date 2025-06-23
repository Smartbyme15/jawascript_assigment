
// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
  

// var input = prompt("Ek character likho:");
// var code = input.charCodeAt(0);

// if (code >= 48 && code <= 57) {
//   alert("Yeh number hai.");
// }
// else if (code >= 65 && code <= 90) {
//   alert("Yeh uppercase letter hai.");
// }
// else if (code >= 97 && code <= 122) {
//   alert("Yeh lowercase letter hai.");
// }
// else {
//   alert("Yeh na number hai, na letter.");
// }

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var num1 = +prompt("enter first num");
// var num2 = +prompt("enter secode number");
// if (num1 > num2){
//     alert(" bigger is number1 : " + num1);
// }else if (num2 > num1){
//     alert(" bigger is number2 : " + num2);
// }else{
// ("both number are equal");
// }

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
 
// var favNum = +prompt("enter number positive ,negative or zero ");
// if (favNum > 0){
//     alert("your number is positive");
// }else if (favNum < 0){
//     alert("your number is negative");
// }else if (favNum == 0){
//     alert("your number is zero ");
// }else{
//     alert("this not a number");
// }


// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

// var letter = prompt("enter a alphabate");

// if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
//     alert("true")
// }else{
//     alert(false);
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.
 

// var correctPassword = "saylani123";
// var userPassword = prompt("enter saylani123");

// if (userPassword === "" || userPassword === null) {
//   alert("Please enter your password");
// }
// else if (userPassword === correctPassword) {
//   alert("Correct! The password you entered matches the original password.");
// }else {
//   alert("Incorrect password");
// }


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour = 13;

// if (hour < 18){
//     greeting = "Good day";
// }else{
//     greeting = "good evening";
// }

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// var time = +prompt("24-hour format mein time likho (jaise 1900):");

// if (time >= 0 && time < 1200) {
//   alert("Good Morning!");
// }
// else if (time >= 1200 && time < 1700) {
//   alert("Good Afternoon!");
// }
// else if (time >= 1700 && time < 2100) {
//   alert("Good Evening!");
// }
// else if (time >= 2100 && time <= 2359) {
//   alert("Good Night!");
// }
// else {
//   alert("Invalid time format!");
// }

// 1. Declare an empty array using JS literal notation to store
// student names in future.

// var arr = [""];

// 2. Declare an empty array using JS object notation to store
// student names in future.

// arr = new_Array[""];

// 3. Declare and initialize a strings array.

// var arr = ["laiba", "jannat", "aleeza"];

// 4. Declare and initialize a numbers array.

// var num = [24 , 43 , 94];

// 5. Declare and initialize a boolean array.

// var boolean = ["true", "false"];

// 6. Declare and initialize a mixed array.

// var arr = ["true" , "laiba" , 24];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

    // var qualifications = ["SSC","HSC","BCS","BS","BCOM", "MS","M. Phil.", "PhD"];

  
    // for (var i = 0; i < qualifications.length; i++) {
    //   document.write((i + 1) + ") " + qualifications[i] + "<br>");
    // }


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

    // var studentNames = ["Ali", "Faiza", "Ahmed"];

    // var studentScores = [320, 230, 480];

    // var totalMarks = 500;

   
    // for (var i = 0; i < studentNames.length; i++) {
    //   var name = studentNames[i];
    //   var score = studentScores[i];
    //   var percentage = (score / totalMarks) * 100;

    //   document.write(
    //     "Score of " + name + " is " + score +
    //     ". Percentage: " + percentage + "%<br>"
    //   );
    // }

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
  //  var colors = ["Red", "Green", "Blue", "Yellow"];
  //   document.write("a) Initial array: " + colors+ "<br><br>");

   
  //   var Start = prompt("Kaunsi color shuru mein add karna chahte hain?");
  //   colors.unshift(Start);
  //   document.write("b) After adding to beginning: " + colors+ "<br><br>");

  
  //   var End = prompt("Kaunsi color end mein add karna chahte hain?");
  //   colors.push(End);
  //   document.write("c) After adding to end: " + colors + "<br><br>");

  //   colors.unshift("Orange", "Pink");
  //   document.write("d) After adding two at beginning: " + colors + "<br><br>");

  //   colors.shift();
  //   document.write("e) After deleting first color: " + colors + "<br><br>");

  //   colors.pop();
  //   document.write("f) After deleting last color: " + colors + "<br><br>");

  //   var idxAdd = parseInt(prompt("Kaunsi index par add karna hai? (0 se start)"), 10);
  //   var colToAdd = prompt("Kaunsi color add karna hai at index " + idxAdd + "?");


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

  //  var scores = [320, 230, 480, 120, 390];

  //   document.write("Scores of Students: " + scores.join(", ") + "<br><br>");
  //   scores.sort(function(a, b) {
  //     return a - b;
  //   });
    
  //   document.write("Ordered Scores of Students: " + scores.join(", "));

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cities =["karachi" , "punjab" , "lahore" , "pishawar" , "quatta"];
// var selectedCities = cities.slice(0,3);

// console.log("all cities name : " + cities);
// console.log("reture slice city : " + selectedCities);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
 
// var arr = ["This ", " is ", " my ", " cat"];
// var singleString = arr.join("");

// console.log(singleString);



// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// var queue = [];


// queue.push("Keyboard");
// queue.push("Mouse");
// queue.push("Printer");
// queue.push("Monitor");
// document.write(queue.shift(0) + "<br>");  
// document.write(queue.shift(1) + "<br>");  
// document.write(queue.shift(2) + "<br>");  
// document.write(queue.shift(3) + "<br>");


// 14. Create a new array. Store values one by one in such a way


// that you can access the values in reverse order. (Last In-
// First Out)
// var computer = [];
// computer.push("Keyboard");
// computer.push("Mouse");
// computer.push("Printer");
// computer.push("Monitor");

// document.write(computer.pop() + "<br>");  
// document.write(computer.pop() + "<br>");  
// document.write(computer.pop() + "<br>");  
// document.write(computer.pop() + "<br>");

// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

   
    // var manufacturers = [" " ,"Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

    // document.write("<select>");

    // for (var i = 0; i < manufacturers.length; i++) {
    //   document.write("<option>" + manufacturers[i] + "</option>");
    // }

    // document.write("</select>");
