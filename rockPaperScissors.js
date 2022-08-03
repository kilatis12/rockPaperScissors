// const getUserChoice = userInput =>{
//     let input = userInput.toLowerCase();
//     return input;
// }

// const getComputerChoice = () =>{
//     let computerChoice = Math.floor(Math.random() *3);

//     if(computerChoice === 0){
//         return 'rock';
//     }else if(computerChoice === 1){
//         return 'paper';
//     }else if(computerChoice === 2){
//         return 'scissors';
//     }else{
//         return 'undefined';
//     }
    
// }

// const determineWinner = (getUserChoice,getComputerChoice) =>{
//     if(getUserChoice === getComputerChoice){
//         return 'draw';
//     }else if(getUserChoice === 'rock' && getComputerChoice === 'paper'){
//         return 'Computer Won!';
//     }else if(getUserChoice === 'paper' && getComputerChoice === 'scissors'){
//         return 'Computer Won!';
//     }else if(getUserChoice === 'scissors' && getComputerChoice === 'rock'){
//         return 'Computer Won!';
//     }else if(getUserChoice ==='ez'){
//         return 'Cheat activated! you won!';
//     }else{
//         return 'User Won!';
//     }
// }

// const play = () =>{
//     let result = determineWinner('ez',getComputerChoice());
//     return result;
// }

const buttons = document.querySelectorAll(".gameButtons");
const result = document.getElementById("results");
const resultDiv = document.getElementById("result");
const user = document.getElementById("user");
const computer = document.getElementById("computer");
const draw = document.getElementById("draw");
const playAgain = document.querySelector("#playAgain");


user.textContent = 0;
computer.textContent = 0;
draw.textContent = 0;

function computerChoice() {
    const randomChoice = Math.floor(Math.random () * 3) + 1;
    if(randomChoice === 1) return 'rock';
    if(randomChoice === 2) return 'paper';
    if(randomChoice === 3) return 'scissor';
}

function playGame( choice, computerChoice ) {

    resultDiv.classList.remove('hidden')
    resultDiv.style = "display: flex;";

    if( computerChoice === choice ) {
        result.textContent = 'Draw';
        draw.textContent++;
        resultDiv.style.color = 'blue';
    } else if ( choice === 'rock' && computerChoice === 'paper') {
        result.textContent = 'Computer Won';
        computer.textContent++;
        resultDiv.style.color = 'red';
    } else if ( choice === 'paper' && computerChoice === 'scissor') {
        result.textContent = 'Computer Won';
        computer.textContent++;
        resultDiv.style.color = 'red';
    } else if ( choice === 'scissor' && computerChoice === 'rock') {
        result.textContent = 'Computer Won';
        computer.textContent++;
        resultDiv.style.color = 'red';
    } else {
        result.textContent = 'User Won';
        user.textContent++;
        resultDiv.style.color = 'green';
    }
    
}

buttons.forEach( button => {
    button.addEventListener('click', e => {
        playGame(button.value, computerChoice());
        buttons.forEach(button => {
            button.disabled = true;
        })
    })
})

playAgain.addEventListener('click', e => {
    buttons.forEach(button => {
        button.disabled = false;
    })
    resultDiv.classList.add('hidden')
    resultDiv.style = "display: none;";
})
