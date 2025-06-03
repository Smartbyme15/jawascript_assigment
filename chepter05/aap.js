// question01
// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
var num = 5;
var num1=3;
var result =( num + num1)
document.write( "the sum of " +num +"to"+ num1 + "is"+result);
// question02
// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
var num3= 6;
var num4=7;
var addition = num3 + num4;
var subtraction = num3 - num4;
var multiplication = num3 * num4;
var division = num3 / num4;
 var modulus = num3 % num4;
 alert("the sum of " + num3+"to"+num4+"as a result of: "+addition);
 alert("The subtraction of " + num3 + " and " + num4 + " is: " + subtraction);
 alert("The multiplication of " + num3 + " and " + num4 + " is: " + multiplication);
 alert("The division of " + num3 + " and " + num4 + " is: " + division);
 alert("The modulus of " + num3 + " and " + num4 + " is: " + modulus);
//  question03
// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
var number;
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
document.write("value after declaration is:" + number +"<br>");
// c. Initialize the variable with some number.
number=5;
// d. Show the value of variable in your browser like “Initial
// value: 5”.
document.write("initial value:"+ number+ "<br>");
// e. Increment the variable.
number++;
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
document.write(" value after increment is :" + number+"<br>");
// g. Add 7 to the variable.
number+= 7;
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
document.write("value after addition is :"+ number +"<br>");
// i. Decrement the variable.
number--;
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
document.write("value after decrement is :" + number + "<br>");
// k. Show the remainder after dividing the variable’s value
// by 3.
var remainder = number % 3;
// l. Output : “The remainder is : 0”.
document.write("remainder is: "+ remainder);

// question04
// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// ticket
// to a movie. Example output:
var ticketprice=600;
var totalcost=600 * 5;
document.write( " cost of one ticket is:" + ticketprice +"PKR" +"<br>");
document.write("cost after buying 5 ticket"+totalcost+ "PKR" + "<br>");

// question05
// 5. Write a script to display multiplication table of any
// number in your browser. E.g
var Num = 7;
for(var a = 1; a <=10; a++){
    document.write(Num +"x" + a  + "=" +(Num * a)+"<br>");
   
}
// question06
// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
       var celsius = 25;

       
        var fahrenheitFromCelsius = (celsius * 9/5) + 32;

        document.write(celsius + "°C is " + fahrenheitFromCelsius + "°F<br>");

    
        var fahrenheit = 77;

        
      var celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;

        
        document.write(fahrenheit + "°F is " + celsiusFromFahrenheit.toFixed(2) + "°C");
// question07
// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.
var priceItem1 = 800;
var priceItem2 = 500;
var quantityItem1 = 3;
var quantityItem2 = 6;
var shippingCharges = 100;
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
        document.write("Price of item 1 is: " + priceItem1 + "<br>");
        document.write("Quantity of item 1 is: " + quantityItem1 + "<br>");
        document.write("Price of item 2 is: " + priceItem2 + "<br>");
        document.write("Quantity of item 2 is: " + quantityItem2 + "<br>");
        document.write("Shipping charges: " + shippingCharges + "<br>");
        document.write("Total cost of your order is: " + totalCost);


// queation08
// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
var total_marks = 980;
var marks_obtained = 840;
var percentage = (marks_obtained/ total_marks)*100;
document.write("total marks :"+ total_marks+ "<br>");
document.write("marks of obained :" +marks_obtained+"<br>");
document.write("percentage :"+ percentage+"%"+"<br>");
// question09
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var usdToPkr = 104.80;
var riyalToPkr = 28;
var usdAmount = 10;
var  riyalAmount = 25;
var totalPkr = (usdAmount * usdToPkr) + (riyalAmount * riyalToPkr);
document.write("Total Currency in PKR: " + totalPkr );
// question10
// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
var number = 8; 


var result = ((number + 5) * 10) / 2;


document.write("Initial number: " + number + "<br>");
document.write("Result after calculations: " + result);

// question11
// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.
var currentYear = 2024;
var birthYear = 2005;
var age1 = currentYear - birthYear; 
var age2 = age1 - 1;                
document.write("<h1>Age Calculator</h1>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + age2 + " or " + age1 + " years old.");


