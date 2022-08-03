const getUserChoice = userInput =>{
    let input = userInput.toLowerCase();
    return input;
}

const getComputerChoice = () =>{
    let computerChoice = Math.floor(Math.random() *3);

    if(computerChoice === 0){
        return 'rock';
    }else if(computerChoice === 1){
        return 'paper';
    }else if(computerChoice === 2){
        return 'scissors';
    }else{
        return 'undefined';
    }
    
}

const determineWinner = (getUserChoice,getComputerChoice) =>{
    if(getUserChoice === getComputerChoice){
        return 'draw';
    }else if(getUserChoice === 'rock' && getComputerChoice === 'paper'){
        return 'Computer Won!';
    }else if(getUserChoice === 'paper' && getComputerChoice === 'scissors'){
        return 'Computer Won!';
    }else if(getUserChoice === 'scissors' && getComputerChoice === 'rock'){
        return 'Computer Won!';
    }else if(getUserChoice ==='ez'){
        return 'Cheat activated! you won!';
    }else{
        return 'User Won!';
    }
}

const play = () =>{
    let result = determineWinner('ez',getComputerChoice());
    return result;
}

console.log(play());