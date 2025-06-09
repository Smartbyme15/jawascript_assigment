// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
    var a = 19;

    document.write("Result:<br>");
    document.write("The value of a is: " + a + "<br>");

    document.write("The value of ++a is: " + ++a + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

    document.write("The value of a++ is: " + a++ + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

    document.write("The value of --a is: " + --a + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

    document.write("The value of a-- is: " + a-- + "<br>");
    document.write("Now the value of a is: " + a + "<br>");

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
    var a = 2, b = 1;

    var result = --a - --b + ++b + b--;
                //  1 - 0  +  1  +  1
    alert(result);
// 3. Write a program that takes input a name from user &
// greet the user.
var name = prompt("put your name");
alert("hi " + name + " " + "walcome to my site");
  
// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
    var number = +prompt("Enter a number for the multiplication table:");

    document.write("<h3>Multiplication Table of " + number + "</h3>");

   
    document.write(number + " x 1 = " + (number * 1) + "<br>");
    document.write(number + " x 2 = " + (number * 2) + "<br>");
    document.write(number + " x 3 = " + (number * 3) + "<br>");
    document.write(number + " x 4 = " + (number * 4) + "<br>");
    document.write(number + " x 5 = " + (number * 5) + "<br>");
    document.write(number + " x 6 = " + (number * 6) + "<br>");
    document.write(number + " x 7 = " + (number * 7) + "<br>");
    document.write(number + " x 8 = " + (number * 8) + "<br>");
    document.write(number + " x 9 = " + (number * 9) + "<br>");
    document.write(number + " x 10 = " + (number * 10) + "<br>");
     
// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


      // 3 subjects ke naam user se lo
    var subject1 = prompt("Enter name of subject 1:");
    var subject2 = prompt("Enter name of subject 2:");
    var subject3 = prompt("Enter name of subject 3:");

    // Har subject ke total marks
    var totalMarks = 100;

    // 3 subjects ke obtained marks
    var marks1 = +prompt("Enter obtained marks for " + subject1 + ":");
    var marks2 = +prompt("Enter obtained marks for " + subject2 + ":");
    var marks3 = +prompt("Enter obtained marks for " + subject3 + ":");

    // Teeno subjects ka total & percentage
    var totalObtained = marks1 + marks2 + marks3;
    var overallTotal = totalMarks * 3;
    var percentage1 = (marks1 / totalMarks) * 100;
    var percentage2 = (marks2 / totalMarks) * 100;
    var percentage3 = (marks3 / totalMarks) * 100;
    var overallPercentage = (totalObtained / overallTotal) * 100;
