const playerScore_display = document.getElementById(`playerScore`);
const computerScore_display = document.getElementById(`computerScore`);
const output = document.getElementById(`output`);
const btn_container = document.getElementById(`btn-container`);

let playerScore = 0,
    computerScore = 0;

const responses = [`rock`, `paper`, `scissors`];

//Returns a random string from the 'responses' array
const getComputerChoice = function ()
{
    return responses[Math.floor(Math.random() * 3)];
}

//Returns player choice. Asks for input until it's either `rock`,`paper` or `scissors`
const getPlayerChoice = function () 
{
    let input;

    do{
        input = prompt(`Enter Choice:`);
        input = input.toLowerCase();
    }while(!responses.includes(input));

    return input;
}

const playRound = function (playerChoice, computerChoice)
{
    let result;

    if(playerChoice === computerChoice)
    {
        result = `draw`;
    }else if(playerChoice === `paper` && computerChoice === `scissors` ||
            playerChoice === `rock` && computerChoice === `paper` ||
            playerChoice === `scissors` && computerChoice === `rock`)
    {
        result = `lose`;
        updateScore(0,1);
    }else if(playerChoice === `paper` && computerChoice === `rock` ||
            playerChoice === `rock` && computerChoice === `scissors` ||
            playerChoice === `scissors` && computerChoice === `paper`)
    {
        result = `win`;
        updateScore(1,0);
    }else
    {
        return `Error: could not complete round`;
    }

    if(playerScore != 5 && computerScore != 5)
    {
        return `You ${result}, Player: ${playerScore}, Computer: ${computerScore}`;
    }
    else if(playerScore == 5)
    {
        let resultString = `Game Over! You Win!, Player: ${playerScore}, Computer: ${computerScore}`;
        computerScore = 0;
        playerScore = 0;
        return resultString;
    }
    else if(computerScore == 5)
    {
        let resultString = `Game Over! You Lose!, Player: ${playerScore}, Computer: ${computerScore}`;
        computerScore = 0;
        playerScore = 0;
        return resultString;
    }
    else{
        return `Error: could not complete game`;
    }
}

//Updates score variables and updates display of score
const updateScore = function (player, computer)
{
    playerScore += player;
    computerScore += computer;

    playerScore_display.textContent = playerScore;
    computerScore_display.textContent = computerScore;
}

btn_container.addEventListener(`click`, (event) => 
{
    let target = event.target;
    switch(target.id)
    {
        case `btn-rock`:
            output.textContent = playRound(`rock`, getComputerChoice());
            break;
        
        case `btn-paper`:
            output.textContent = playRound(`paper`, getComputerChoice());
            break;
        
        case `btn-scissors`:
            output.textContent = playRound(`scissors`, getComputerChoice());
            break;

        default:
            break;
    }
})

