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
        playerScore++;
        computerScore++;
    }else if(playerChoice === `paper` && computerChoice === `scissors` ||
            playerChoice === `rock` && computerChoice === `paper` ||
            playerChoice === `scissors` && computerChoice === `rock`)
    {
        result = `lose`;
        computerScore++;
    }else if(playerChoice === `paper` && computerChoice === `rock` ||
            playerChoice === `rock` && computerChoice === `scissors` ||
            playerChoice === `scissors` && computerChoice === `paper`)
    {
        result = `win`;
        playerScore++;
    }else
    {
        console.error(`Error: could not complete round`);
    }

    return `You ${result}, Player: ${playerScore}, Computer: ${computerScore}`;
}

btn_container.addEventListener(`click`, (event) => 
{
    let target = event.target;
    switch(target.id)
    {
        case `btn-rock`:
            console.log(playRound(`rock`, getComputerChoice()));
            break;
        
        case `btn-paper`:
            console.log(playRound(`paper`, getComputerChoice()));
            break;
        
        case `btn-scissors`:
            console.log(playRound(`scissors`, getComputerChoice()));
            break;

        default:
            break;
    }
})