var readlineSync = require("readline-sync");
var userChances = readlineSync.questionInt("how many times you want to guess:-- ")
var  randomNumber= Math.floor(Math.random()*10);
console.log(randomNumber)
chances = userChances;
var i = chances;
while(i>0){
    console.log("you have"+i+"chances to guess");
    i--
    userGuess = readlineSync.questionInt("guess number: ")
    if (userGuess == randomNumber){
        console.log("congrats! ,your guess is right")
       break

    }
    else if(userGuess<randomNumber){
        console.log("go higher!");
    }
    else if(userGuess>randomNumber){
        console.log("sadly!, your chances are completed");

    }


}

