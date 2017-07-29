var userName = window.prompt("Please, enter your name. ");

document.getElementById("greeting").innerHTML += userName;

var number1 = window.prompt("Enter with first number");

var number2 = window.prompt("Enter with second number");



document.getElementById("operand1").innerHTML = number1;

document.getElementById("operand2").innerHTML = number2;
addition();

function addition(){
  return document.getElementById("addition").innerHTML = "The sum of " + number1 + " and " + number2 + " is " + (number1 + number2);
}



document.getElementById("subtraction").innerHTML = "The subtraction of " + number1 + " and " + number2 + " is " + (number1 - number2);

document.getElementById("multiplication").innerHTML = "The multiplication of " + number1 + " and " + number2 + " is " + (number1 * number2);

document.getElementById("division").innerHTML =  "The division of " + number1 + " and " + number2 + " is " + (number1 / number2);

document.getElementById("modulus").innerHTML = "The modulus of " + number1 + " and " + number2 + " is " + (number1 % number2);
