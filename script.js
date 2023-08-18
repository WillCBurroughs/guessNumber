
// Number to guess 
let computerNumber = Math.floor(Math.random() * 100) + 1; 

// Stores hint 
let holdHint = document.getElementById("text-Display");

// Stores input from user
let holdValue = document.getElementById("number");

// Holds start new game 
let playAgain = document.getElementById("play-Again");

// Number user is guessing 
let holdGuess; 

function submitVal(){
    // Checks if value is truthy
    if(holdValue.value){
        holdGuess = parseInt(holdValue.value); 
    } else{
       
    }

    holdGuess = holdValue.value;

    if(holdGuess < computerNumber){
        holdHint.innerHTML = "Value is too Small";
    } else if(holdGuess > computerNumber){
        holdHint.innerHTML = "Value is too Large";
    }

    if(holdGuess == computerNumber){
        holdHint.innerHTML = "Congrats! you won";
        playAgain.style.display = "block";
    }

}


function reset(){
    computerNumber = Math.floor(Math.random() * 100) + 1; 
    playAgain.style.display = "none";
    holdValue.value = "";
    holdHint.innerHTML = "Number Guesser";
}