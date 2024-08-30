/***

you have two numbers in two variables, called: num1, num2
now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.
write a simple if-else. 
also, write it using ternary operator.
 */
let num1 = 90;
let num2 = 70;
let result;
if(num1 > num2){
    result = num1 * 2 //num1 is bigger then it will be double
}else{
    result = num1 + num2 //num1 isn't bigger then result will be sum
} console.log(result)

// when num2 is bigger than num1
let num3 = 70;
let num4 = 90;
let result2;
if(num3 > num4){
    result2 = num3 * 2 //num1 is bigger then it will be double
}else{
    result2 = num3 + num4 //num1 isn't bigger then result will be sum
} console.log(result2)

// ternary checking
// "condition ? expressionTrue : expressionFalse"
let num5 = 90;
let num6 = 70;
let result3 = (num5 > num6) ? (num5 * 2) : (num5 + num6);
console.log(result3)