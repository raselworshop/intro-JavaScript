/***
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad
Note: 
use nested if-else-if-else
*/
let get = 420;
let upToFirst = "You can inside your friend score here.";
let upToSecond = "You can go for lunch now.";
let upToThird = "You can wish him/her good luck next time";
let upToFourth = "You can keep off your friend messages to seen";
let upToFifth = "You can block your friend right now";
let upTosixth = "You can go to home and act sad/sleep"
if(get >= 90 && get <= 100){
    console.log(upToFirst);
}else if(get >= 80 && get <= 89){
    console.log(upToSecond);
}else if(get >=70 && get <= 79){
    console.log(upToThird);
}else if(get >60 && get <= 69){
    console.log(upToFourth);
}else if(get >50 && get <= 59){
    console.log(upToFifth);
}else if(get <=49 && get >=0){
    console.log(upTosixth);
}else{
    console.log("Your input is wrong, you have to keep a number within 0-100");
}