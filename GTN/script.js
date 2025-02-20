// Generate a Random Number
let y = Math.floor(Math.random() * 100 + 1);
        

// List of guesses
mylist = [];


const guessResultsMsg = document.getElementById("results-msg");
const endMsg = document.getElementById("end-msg");
const resultsMsg = document.querySelector(".results-msg");
const endContainer = document.querySelector(".end-container");
const replay = document.getElementById("reset-btn");
const lastGuessL = document.getElementById("guessListLast");
const guessList = document.getElementById("guessList")

function resetGame() {
    // Reset variables
    y = Math.floor(Math.random() *100 + 1); // Generate a new random number
    mylist = []; // Reset guess list

    // Reset UI elements
    replay.style.display = "none";
    guessResultsMsg.innerText = '';
    endMsg.innerText = '';
    lastGuessL.innerText = '';
    resultsMsg.style.display = "block";
    document.getElementById("guessField").value = '';
}

// Main game logic
function handleGuess() {
    // Number guessed by user
    const x = parseInt(document.getElementById("guessField").value);
    guessRange = (x - y)
    


    if (x === y) {
        endMsg.innerText = `Bazinga!! You guessed right!\nNumber of guesses: ${mylist.length}`;
        resultsMsg.style.display = "none";
        replay.style.display = "block";
        guessResultsMsg.style.display = "none";
    } else if (Math.abs(guessRange) <= 4){
        mylist.push(x);
        document.getElementById("guessField").value = ''
        const lastGuess = mylist[mylist.length - 2];
        lastGuessL.innerText = ``                 
        guessResultsMsg.innerText = `Warm`;
        guessList.innerText = `Your guesses so far ${mylist}`;                                    
        if (x >= lastGuess && x < y){
            document.getElementById("guessField").value = ''
            lastGuessL.innerText = `Your last guess was ${x}`
            guessResultsMsg.innerText = "You are getting warmer"
            guessList.innerText = ``; 
        } else {
            document.getElementById("guessField").value = ''
            lastGuessL.innerText = `Your last guess was ${x}`
            guessResultsMsg.innerText = "You are getting colder"
            guessList.innerText = ``;
        }
        
    } else {
        mylist.push(x);
        document.getElementById("guessField").value = ''
        lastGuessL.innerText = ``
        guessResultsMsg.innerText = `Brrr you are Ice Cold`;
        guessList.innerText = `Your guesses: [${mylist}]`;

    }
}

// Attach event listeners
document.getElementById("submitguess").onclick = handleGuess;
replay.addEventListener("click", resetGame);