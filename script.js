const responses = [`rock`, `paper`, `scissors`];

//Returns a random string from the 'responses' array
const getComputerChoice = function ()
{
    return responses[Math.floor(Math.random() * 3)];
}