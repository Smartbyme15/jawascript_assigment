// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function power(a, b) {
//     let result = 1;
//     for (let i = 1; i <= b; i++) {
//         result *= a;
//     }
//     return result;
// }
// console.log("Power:", power(2, 3));

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

// function isLeap(year) {
//   return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// function findS(a, b, c) {
//   return (a + b + c) / 2;
// }
// function triangleArea(a, b, c) {
//   let S = findS(a, b, c);
//   return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.
 
// function avg(m1, m2, m3) {
//   return (m1 + m2 + m3) / 3;
// }
// function perc(m1, m2, m3) {
//   return ((m1 + m2 + m3) / 300) * 100;
// }
// function mainFunction(m1, m2, m3) {
//   console.log("Average:", avg(m1, m2, m3));
//   console.log("Percentage:", perc(m1, m2, m3));
// }

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// function customIndexOf(str, ch) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ch) return i;
//   }
//   return -1;
// }

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// function removeVowels(sentence) {
//   let result = "";
//   for (let i = 0; i < sentence.length; i++) {
//     if (!"aeiouAEIOU".includes(sentence[i])) {
//       result += sentence[i];
//     }
//   }
//   return result;
// }

// 7. Write a function with switch statement to count the number of
// occurrencces of any two vowels in succession in a line of text.
// For example, in the sentence
// FUNCTIONS, switch statements, while… do-while loops
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

// function countVowelPairs(line) {
//   let count = 0;
//   for (let i = 0; i < line.length - 1; i++) {
//     switch (line[i]) {
//       case 'a': case 'e': case 'i': case 'o': case 'u':
//         switch (line[i + 1]) {
//           case 'a': case 'e': case 'i': case 'o': case 'u':
//             count++;
//             break;
//         }
//     }
//   }
//   return count;
// }


// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// function toMeters(km) { return km * 1000; }
// function toFeet(km) { return km * 3280.84; }
// function toInches(km) { return km * 39370.1; }
// function toCentimeters(km) { return km * 100000; }

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

// function overtimePay(hours) {
//   if (hours > 40) {
//     return (hours - 40) * 12;
//   } else {
//     return 0;
//   }
// }

// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withddrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

// function giveNotes(amount) {
//   let hundred = 0, fifty = 0, ten = 0;

//   while (amount >= 10) {
//     switch (true) {
//       case amount >= 100:
//         hundred++; amount -= 100; break;
//       case amount >= 50:
//         fifty++; amount -= 50; break;
//       case amount >= 10:
//         ten++; amount -= 10; break;
//     }
//   }

//   console.log("100s:", hundred);
//   console.log("50s:", fifty);
//   console.log("10s:", ten);
// }
