/***
Grade Calculator
Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
***/
let numb = 110;
let you1 = "Your grade is: ";
if(numb >= 90 && numb <= 100){
    console.log(you1 + "A+")
}else if(numb >= 80 && numb <= 89){
    console.log(you1 + "A")
}else if(numb >= 70 && numb <= 79){
    console.log(you1 + "B")
}else if(numb >= 60 && numb <= 69){
    console.log(you1 + "C")
}else if(numb >= 50 && numb <= 59){
    console.log(you1 + "D")
}else if(numb <=49 && numb >=0){
    console.log(you1 + "F")
}else{
    console.log(you1 + "Your input is inValid, You can choose 0-100")
}