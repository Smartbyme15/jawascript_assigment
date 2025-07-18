/*1. Write a function that displays current date & time in your
browser.

 function showDateTime() {
    var now = new Date();
    document.getElementById("dateTime").innerHTML = now;
  }

  showDateTime();

2. Write a function that takes first & last name and then it
greets the user using his full name.

function greetUser(firstName, lastName) {
  var fullName = firstName + " " + lastName;
  alert("Hello, " + fullName + "!");
}

// Example call:
greetUser("Jannat", "Ali");


3. Write a function that adds two numbers (input by user)
and returns the sum of two numbers.

function addNumbers() {
  var num1 = +prompt("Enter first number:");
  var num2 = +prompt("Enter second number:");
  var sum = num1 + num2;
  return sum;
}

var result = addNumbers();
alert("The sum is: " + result);


4. Calculator:
Write a function that takes three arguments num1, num2
& operator & compute the desired operation. Return and
show the desired result in your browser.

function calculator(num1, num2, operator) {
  var result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    result = "Invalid operator";
  }
  document.getElementById("result").innerHTML = "Result: " + result;
}

calculator(10, 5, "*");

5. Write a function that squares its argument.

function factorial(n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

alert("Factorial is: " + factorial(5));

6. Write a function that computes factorial of a number.

function factorial(n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

alert("Factorial is: " + factorial(5));

7. Write a function that take start and end number as inputs
& display counting in your browser.

<script>
function showCounting(start, end) {
  var output = "";
  for (var i = start; i <= end; i++) {
    output += i + "<br>";
  }
  document.getElementById("counting").innerHTML = output;
}

showCounting(1, 10);

8. Write a nested function that computes hypotenuse of a
right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare()

function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(x) {
    return x * x;
  }

  var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
  return hypotenuse;
}

alert("Hypotenu is: " + calculateHypotenuse(3, 4));

9. Write a function that calculates the area of a rectangle.
 A = width * height
 Pass width and height in following manner:
i. Arguments as value
ii. Arguments as variables

function areaOfRectangle(width, height) {
  return width * height;
}

alert("Area: " + areaOfRectangle(5, 10));

var w = 7;
var h = 6;

alert("Area: " + areaOfRectangle(w, h));

10. Write a JavaScript function that checks whether a passed
string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as
forward, e.g., madam.

function isPalindrome(str) {
  var cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  var reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

var word = prompt("Enter a word:");
if (isPalindrome(word)) {
  alert(word + " is a palindrome.");
} else {
  alert(word + " is not a palindrome.");
}

11. Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox'


function capitalizeWords(str) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
var result = capitalizeWords("the quick brown fox");
alert(result);

12. Write a JavaScript function that accepts a string as a
parameter and find the longest word within the string.
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development'

function findLongestWord(str) {
  var words = str.split(" ");
  var longest = words[0];

  for (var i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
var result = findLongestWord("Web Development Tutorial");
alert("Longest word is: " + result);

13. Write a JavaScript function that accepts two arguments, a
string and a letter and the function will count the number of
occurrences of the specified letter within the string.
Sample arguments : 'JSResourceS.com', 'o'

function countLetter(str, letter) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === letter.toLowerCase()) {
      count++;
    }
  }
  return count;
}
var inputString = prompt("Enter a string:");
var inputLatter = prompt("Enter a letter to count:");

var result = countLetter("JSResourceS.com", "o");
alert("The letter appears " + result + " times.");

14. The Geometrizer
Create 2 functions that calculate properties of a circle, using
the definitions here.
Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output
"The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function */