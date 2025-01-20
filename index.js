let userChoice = ""

// Get values from user's Click
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", (event) =>{
       userChoice = event.target.id
       console.log(userChoice)
       computer()
    })
})

// Generate computers choice
const choices = ["rock", "paper", "scissors"]
const computer = () => {
    const computersChoice = choices[Math.floor(Math.random() * choices.length)]
    console.log(computersChoice)
}
