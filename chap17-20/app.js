// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// let arr = [[]];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// let matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];


// 3. Write a program to print numeric counting from 1 to 10.


// for(let i = 0 ; i<=10 ; i++){
// console.log(i);
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// let table = +prompt("enter number for table");
// let lenth = +prompt("enter lenth of table you need ");

// for (let i = 1; i <= length; i++) {
//  document.write(table + " x " + i + " = " + (table*i)); 
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(let i = 0 ; i <=fruits.length ; i++){
//     console.log(fruits[i]);
// }



// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// document.write("<h3>a. Counting:</h3>");
// for (let i = 1; i <= 15; i++) {
//   document.write(i + ", ");
// }

// document.write("<h3>b. Reverse Counting:</h3>");
// for (let i = 10; i >= 1; i--) {
//   document.write(i + ", ");
// }

// document.write("<h3>c. Even:</h3>");
// for (let i = 0; i <= 20; i += 2) {
//   document.write(i + ", ");
// }

// document.write("<h3>d. Odd:</h3>");
// for (let i = 1; i < 20; i += 2) {
//   document.write(i + ", ");
// }

// document.write("<h3>e. Series:</h3>");
// for (let i = 2; i <= 20; i += 2) {
//   document.write(i + "k, ");
// }


// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();

// let found = false;

// for (let i = 0; i < bakery.length; i++) {
//   if (bakery[i] === userInput) {
//     found = true;
//     document.write(userInput + " is <b>available</b> at index " + i  + " in our " + bakery

//     );
//     break;
//   }
// }

// if (!found) {
//   document.write(" We are sorry. " +  userInput + " is <b>not available</b> in our " + bakery);
// }


// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// let A = [24, 53, 78, 91, 12];
// let largest = A[0];

// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i];
//   }
// }

// document.write("Array items: " + A.join(", ") + "<br>");
// document.write("The largest number is: " + largest);

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// let A = [24, 53, 78, 91, 12];
// let smallest = A[0]; 

// for (let i = 1; i < A.length; i++) {
//   if (A[i] < smallest) {
//     smallest = A[i];
//   }
// }

// document.write("Array items: " + A.join(", ") + "<br>");
// document.write("The smallest number is: " + smallest);

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     document.write(i + ", ");
//   }
// }
