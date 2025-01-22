let computerScore = 0;
let userScore = 0;
let draw = 0;
let round = 10;
const container = document.getElementById("container")
const button = document.querySelectorAll("button")
// Generate computer's choice
const choices = ["rock", "paper", "scissors"];
const getComputerChoice = () => {
    const computersChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("Computer's choice:", computersChoice);
    return computersChoice; // Ensure it returns the choice
};

// Determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "tie";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        return "user";
    } else {
        return "computer";
    }
}

// timer
function startCountdown(){
    let countdown = 10
    const paragraph = document.createElement("p")
    container.appendChild(paragraph)

    const timer = setInterval(() => {
        paragraph.textContent = `Game will restart in ${countdown} seconds ...`
        if(countdown === 0){
          clearInterval(timer)
          window.location.reload()
        }
        countdown--

    }, 1000)
}

// disableButtons 
function disableButtons (){
    button.forEach(button => {
        button.disabled = true
    })
}

// Get values from user's click
button.forEach((button) => {
    button.addEventListener("click", function () {
        const userChoice = this.id; // User's choice is based on button ID
        console.log("User's choice:", userChoice);

        const computerChoice = getComputerChoice(); // Get computer's choice

        // Determine the winner
        const result = determineWinner(userChoice, computerChoice);

        if (result === "user") {
            userScore++;
        } else if (result === "computer") {
            computerScore++;
        } else if (result === "tie") {
            draw++;
        }
        round--
        // Update the scoreboard
        document.getElementById("player").textContent = userScore;
        document.getElementById("computer").textContent = computerScore;
        document.getElementById("draw").textContent = draw;

        // display the trials left

        const message = document.getElementById("choice")
        
        message.textContent = `Trials left: ${round}`
        if(round === 0){
            let value = ""
            if(userScore > computerScore){
                value = "You win"
            }else if(computerScore > userScore){
                value= "Ohh chim you don loose"
            }else{
                value ="It's a tie"
            }
            disableButtons()
            container.innerHTML=""
            container.classList.add("second")
            container.innerHTML= `
             <h1>Game Over</h1>
             ${value}
            `
            startCountdown()
           
        }
    });
});
