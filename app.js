//Chap3

//Q1
var age = 22;
alert("I Am" + " " + age + " " + "Years Old");

//Q2
var N = 14;
alert("You have Visited This Site" + " " + N + " " + "Times");


//Q3
var birthYear = 1999;
document.write("Q3)");
document.write("My BirthYear Is" + " " + birthYear);
document.write("<br>");
document.write(" Data Type Of Declared Variable Is Number");

//Q4
var visitorName = "John Doe"
var productTitle = "T-shirt(s)"
var quantity = "5";

document.write("<br>");
document.write("Q4)");
document.write(visitorName + " " + "Ordered" + quantity + " " + productTitle)

//Chap4
//Q1
var name = "SARAIB", age = 28, message = "Hello!";


//Q2
//Legal Variables
var camelCase = "lowercase word, then uppercase";
var dinner2 = "Seaside";
var I_AM_HUNGRY = "Hungry";
var _Hello_ = "Wellcome to my site";
var $_$ = "money eyes";


//illegal Variables
//var total% = 78;
//var 2fast2catch = "usman";
//var function = true;
//var class = "Khalid";
//var function="saraib"




//Q3
document.write("<h2>Rules for naming JS variables</h2>");
document.write("a) Variable names can only contain number,$,_. and letter <b> For example : $my_1stVariable.</b> <br>");
document.write("b) Variable must begin with a letter, $ or _. <b> For example : $name,_name or name.</b> <br>");
document.write("c) Variable names are case sensitive.<br>");
document.write("d) Variable names should not be JS keywords.");


//Chap5

//Q1 $ //Q2
var num1 = 34;
var num2 = 45;
var subNumbers = num1 - num2;
var mulNumbers = num1 * num2;
var divNumbers = num1 / num2;
var Module = num1 % num2;



document.write("Subtraction of " + num1 + " and " + num2 + " is " + subNumbers + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + mulNumbers + "<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + divNumbers + "<br>");
document.write("Reminder of " + num1 + " and " + num2 + " is " + Module + "<br>");
document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

//Q3
var number = +prompt("Enter Number");
document.write("Intial Value=" + number);
document.write("<br>");
document.write("Value After Increament=" + ++number);
document.write("<br>");
number = 7 + number;
document.write("Value After Addition=" + number);
document.write("<br>");
document.write("Value After Decreament=" + --number);
document.write("<br>");
document.write("Reminder=" + (number % 3));

document.write("<br>");

//Q4
var cost = 600;
var number = +prompt("Enter Number Of tickets");
totalCost = 600 * number;
document.write("Total Cost to Buy " + " " + number + " " + "Tickets to a movie is" + " " + totalCost + "PKR");

//Q5
var tableNumber = +prompt("Enter Table Number");


document.write("<h2>Table of  </h2>" + tableNumber)
document.write("x1= " + tableNumber * 1 + "<br>" + tableNumber + "x2= " + tableNumber * 2 + "<br>" + tableNumber + "x3= " + tableNumber * 3 + "<br>" + tableNumber + "x4= " + tableNumber * 4 + "<br>" + tableNumber + "x5= " + tableNumber * 5 + "<br>" + tableNumber + "x6= " + tableNumber * 6 + "<br>" + tableNumber + "x7= " + tableNumber * 7 + "<br>" + tableNumber + "x8= " + tableNumber * 8 + "<br>" + tableNumber + "x9= " + tableNumber * 9 + "<br>" + tableNumber + "x10= " + tableNumber * 10 + "<br>")

//Q6
var Celsius = +prompt("Enter Temp in Celsius");
var fahrenheit = +prompt("Enter Temp in Farenheit");

c = (fahrenheit - 32) * 5 / 9;
f = (Celsius * 9 / 5) + 32;


document.write(Celsius + "<sup>o</sup>C is " + f + "<sup>o</sup>C");
document.write("<br>");
document.write(fahrenheit + "<sup>o</sup>F is " + c + "<sup>o</sup>C ");


//Q7
document.write("<h1>Shopping Cart</h1>");
var item1 = 300;
var item2 = 400;
document.write("Price Of Item1 =" + item1);
document.write("<br>");
var quantity1 = +prompt("Enter quantity Of item 1");
document.write("Quantity of item1=" + quantity1);
document.write("<br>");
document.write("Price Of Item2 =" + item2);
document.write("<br>");
var quantity2 = +prompt("Enter quantity Of item 1");
document.write("Quantity of item2=" + quantity2);
document.write("<br>");
var shippingCharges = 100;
document.write("Shipping Charges=" + shippingCharges);
document.write("<br>");
var totalBill = (quantity1 * item1 + quantity2 * item2 + shippingCharges);
document.write("Total Bill=" + totalBill);

//Q8
document.write("<h1>Marks Sheet</h1>");
var marksObtained = +prompt("Enter Marks Obtained");
var totalMarks = +prompt("Enter Marks Obtained");
document.write("Total Marks=" + totalMarks);
document.write("<br>");
document.write(" MarksObtained =" + marksObtained);
document.write("<br>");
var percentage = (marksObtained / totalMarks) * 100;

document.write("Perentage =" + percentage + "%");

//Q9

var oneUSD = 200;
var oneRiyal = 51.63;
var Quantity = +prompt("Enter Amount of Dollar And Riyal");
var PKR2USD = oneUSD * Quantity;
var PKR2Riyal = oneRiyal * Quantity;
var totalCost = PKR2USD + PKR2Riyal;
document.write("<h1>Currency In PKR</h1>");
document.write("Total Currency in PKR : " + totalCost);


//Q10
var number = 5;
document.write("Initial Number=" + number)
document.write("<br>");
var SingleExpression = number * 10 / 2;
document.write("Single Expression calculation is : " + SingleExpression);

//Q11
var currentYear = 2022;
var birthYear = 1998;

var myAge = currentYear - birthYear;

document.write("<h1>Age Calculator</h1>")
document.write("Current Year : " + currentYear + "<br>Birth Year is" + birthYear + "<br>My age is  : " + myAge);


//Q12
var radius = 20;
var pi = 3.142;
var cf = 2 * pi * radius;
var area = pi * radius * radius;

document.write("<h1>The Geometrizer</h1>");
document.write('Radius of Circle is : ' + radius);
document.write("<br>");
document.write('The Circumference of Circle is : ' + cf);
document.write("<br>");
document.write('The Area of Circle is : ' + pi);

//Q13
var favsnack = "TUC";
var currentAge = 24;
var maxAge = 65;
var snankPerDay = 2;
var snankPerDay = 2;
var ageCalculate = maxAge - currentAge;
var totalSnaks = ageCalculate * snankPerDay;
document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("<br>");
document.write("Favorite Snack:  " + favsnack);
document.write("<br>");
document.write("Current Age: " + currentAge);
document.write("<br>");
document.write("Estimated Maximum Age:  " + maxAge);
document.write("<br>");
document.write("Amount of Snacks per day:  " + snankPerDay);
document.write("<br>");
document.write("You will need " + totalSnaks + " " + favsnack + " to last you untill the ripe old age of " + maxAge);


//Chap 6-9

//Q1
var a = 10;
document.write("Result:");
document.write("<br>");
document.write("Value of a is: " + a);
document.write("<br>");
document.write("------------------------------------------")
document.write("<br><br>");


++a;
document.write("The value of ++a is : " + a);
document.write("<br>");
document.write("Now the value of a : " + a);
document.write("<br>");
document.write("<br>");


document.write("The value of a++ is : " + a);
document.write("<br>");
a++;
document.write("Now the value of a : " + a);
document.write("<br>");
document.write("<br>");




--a;
document.write("The value of --a is : " + a);
document.write("<br>");
document.write("Now the value of a : " + a);
document.write("<br>");
document.write("<br>");


document.write("The value of a-- is : " + a);
document.write("<br>");
a--;
document.write("Now the value of a : " + a);

//Q2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//   1  -  0  +  1  +  1
//   1 + 1 + 1
//   3

document.write("Explaination");
document.write("<br>");
document.write("------------------------------------------");
document.write("<br>");
document.write("--a is the pre decrement of a, current value of a is 2 after decrement --a =  1  <br>");
document.write("--b is the pre decrement of b, current value of b is 0 after decrement --b =  0  <br>");
document.write("++b is the pre increment of b, current value of b is 1 after increment ++b =  1  <br>");
document.write("++b is the post decrement of b, it will decrease the value after call the varibale current value of b is 1 after decrement  b-- =  1");


document.write("<br>");
document.write("Current value of a is : 1");
document.write("<br>");
document.write("Current value of b is : 1");


document.write("<br>");
document.write("Result : " + result);

//Q3
var Name = prompt("Enter Your Name : ");
document.write("Welcome " + Name);


//Q4

var tableNo = prompt("Enter a number : ");
if (tableNo === "") {
   tableNo = 5;
}

document.write(tableNo + "x1= " + tableNo * 1 + "<br>" + tableNo + "x2= " + tableNo * 2 + "<br>" + tableNo + "x3= " + tableNo * 3 + "<br>" + tableNo + "x4= " + tableNo * 4 + "<br>" + tableNo + "x5= " + 4 * 5 + "<br>" + tableNo + "x6= " + tableNo * 6 + "<br>" + tableNo + "x7= " + tableNo * 7 + "<br>" + tableNo + "x8= " + tableNo * 8 + "<br>" + tableNo + "x9= " + tableNo * 9 + "<br>" + tableNo + "x10= " + tableNo * 10 + "<br>");

//Q5
var nameSub1 = prompt("Enter a your subject name : ");
var subMarks1 = parseInt(prompt("Enter Obtained marks of this subject"));

var nameSub2 = prompt("Enter a your subject name : ");
var subMarks2 = parseInt(prompt("Enter Obtained marks of this subject"));

var nameSub3 = prompt("Enter a your subject name : ");
var subMarks3 = parseInt(prompt("Enter Obtained marks of this subject"));


var eachmarks = 100;
var eachpercentage1 = subMarks1 / eachmarks * 100;
var eachpercentage2 = subMarks2 / eachmarks * 100;
var eachpercentage3 = subMarks3 / eachmarks * 100;

var totalMarksStd = 300;
var obtainedMarks = subMarks1 + subMarks2 + subMarks3;
var Percentage = obtainedMarks / totalMarksStd * 100;
document.write(`<table>
    <tr>  
        <th>Subjects</th>  
        <th>Total Marks</th>  
        <th>Obtained Marks</th> 
        <th>Percentage</th>  
    </tr>  

    <tr>
        <td>${nameSub1}</td>
        <td>${eachmarks}</td>
        <td>${subMarks1}</td>
        <td>${eachpercentage1}%</td>
    </tr>

    <tr>
    <td>${nameSub2}</td>
    <td>${eachmarks}</td>
    <td>${subMarks2}</td>
    <td>${eachpercentage2}%</td>
</tr>

<tr>
<td>${nameSub3}</td>
<td>${eachmarks}</td>
<td>${subMarks3}</td>
<td>${eachpercentage3}%</td>
</tr>  


<tr>
<td></td>
<td>${totalMarksStd}</td>
<td>${obtainedMarks}</td>
<td>${Percentage}%</td>
</tr>  
    </table>`)


