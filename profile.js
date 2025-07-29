// Function that takes a user to Youtube in a new tab
// as long as they enter the right word
function goToYoutube() {
    // defines text that will replace the current title text if the user passes the test
    let result = "";

    // sets up game loop
    let notCorrect = true
    while (notCorrect) {
        let msg = window.prompt("Oh you want to watch YouTube? Let's see if you read the website. Which game was my most favorite?");
        if (msg.toUpperCase().trim() == "MINECRAFT") {
            alert("Achievement Unlocked: The End");
            result += "Thanks for reading!";

            // creates an external link to Youtube
            document.getElementById("siteTitle").innerText = result;
            const link = document.createElement('a');
            link.href = 'https://www.youtube.com/';
            link.target = '_blank';
            link.click();

            // exits game loop
            notCorrect = false;
        } else {
            // Asks the user if they still want to try and guess the word
            if (confirm("Try Again? Click 'Ok' :)\nClick 'Cancel' if you don't want to :(")) {
                continue;
            } else {
                break;
            }
        } 
    }
    
}

// Function that represents the main gaame of the website
function game() {
    let gameOn = true;
    let gameWon = false;
    
    // Object that holds questions and their answers
    // The answer to each question are at the same index of each list
    let questions = {
        "question": [
            "What year was Super Mario Bros. for the NES released?",
            "What is the most amount of players possible in a regular game of Fornite (including yourself?",
            "Mario Kart 8 Deluxe is playable on Nintendo ______?",
            "In Minecraft, the ______ dimension contains ghasts.",
            "Charizard, Mewtwo, and squirtle are all examples of what?\nHint: name the series they are from"
        ], 
        "answer": [
            "1985",
            "100",
            "Switch",
            "Nether",
            "Pokemon"
        ]
    }

    // Initiates Game loop 
    while (gameOn) {
        alert("Alright you asked for it...");
        alert("I'll ask you some basic video game questions and you have 3 attempts at each question or you lose!");
        let lives = 3;
        for (let i = 0; i < questions.question.length; i++) {
            let incorrect = true;
            let response = "";
            while (incorrect) {
                response = prompt(questions.question[i])
                if (response.toUpperCase().trim() === questions.answer[i].toUpperCase()) {
                    alert("Good job! Next question...");
                    incorrect = false;
                } else {
                    lives -= 1;
                    if (lives === 0) {
                        alert("You're out of lives. Thanks for playing!");
                        break;
                    } else {
                        alert("Try Again, you have " + lives + " lives remaining");
                    }
                }
            }
            if (lives === 0) {
                break;
            }
        }
        if (lives !== 0) {
            gameWon = true;
            alert("I guess you can call yourself a gamer now!");  
        }

        // exits game loop once the user either completes the game or runs out of lives
        gameOn = false;
    }

    // Changes website title if user wins the game
    if (gameWon) {
        document.getElementById("siteTitle").innerText = "YOU WIN!!!";
    }
}