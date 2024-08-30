/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
var weight = 60;
var heightInch = 70;
var heightMet = heightInch * 0.0254;
var BMIx = weight / (heightMet * heightMet);
var BMI = BMIx.toFixed(2);
var you1 = "You are under weight.";
var you2 = "You are normal.";
var you3 = "You are overweight.";
var you4 = "Otherwise, You are obese.";
if(BMI < 18.5){
    console.log("Your BMI is:" + BMI +" "+ you1);
}else if(BMI>=18.5 && BMI<=24.9){
    console.log("Your BMI is:" + BMI +" "+ you2);
    }else if(BMI>=25 && BMI<=29.9){
        console.log("Your BMI is:" + BMI +" "+ you3);
    }else{
        console.log("Your BMI is:" + BMI +" "+ you4);
    };

