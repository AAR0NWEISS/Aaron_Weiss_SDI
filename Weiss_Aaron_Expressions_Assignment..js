/**
 * Created by aweiss on 6/12/15.
 *
 * Aaron Weiss
 * Expressions_Assignment
 * Sec 02
 *
 *
 *
 */

//alert("helo");
//var test = "test good";
//console.log(test);

alert(" Hello, The calculator will add up the amount for a tip.");//tells user what it does

var percentArray = [];//loads empty arry call percentArray
percentArray[0]=100;// set of numbers used for testing cal
percentArray[1]=50;// set of numbers used for testing cal
percentArray[2]=0;// set of number used for testing cal
percentArray[4]= prompt("What is the percentage of the tip? \nie 15%");// put prompt val into array 4
percentArray[5]= prompt("Including yourself, How many people are being served? \nie 4 people at dinner");// put prompt val into array 5
percentArray[6] = prompt("What was the total cost of your meal?");// put prompt val into array 6

//var amountTip = prompt("What is the percentage of the tip? \nie 15%");
//var amountPeople = prompt("Including yourself, How many people are being served? \nie 4 people at dinner");
//var amountDinner = prompt("What was the total cost of your meal?");
percentageConver = percentArray[4] / percentArray[0];// convert numbers in array
var amountToal = (percentageConver*percentArray[6])/percentArray[5];// cal total out put


console.log("The percentage calculated is "+percentageConver);//output logs
console.log("The amount of people the bill is divided by is "+percentArray[5]);//output logs
console.log("The toal cost of dinner is "+percentArray[6]);//output logs
console.log("The amount of the tip is "+amountToal+"Person");//output logs

//test1



