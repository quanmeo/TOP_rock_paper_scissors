console.log("Hello World1")

function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

function getComputerChoice()
{
    const ranInt = getRandomInt(3);

    if (ranInt == 0)
    {
        return "Rock";
    } else if (ranInt == 1)
    {
        return "Paper";
    } else
    {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection)
{
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    console.log(`You chose ${player}`);
    console.log(`Computer chose ${computer}`);

    if (player == "rock")
    {
        if (computer == "paper")
        {
            return "Computer Win! Paper beats Rock";
        } else if (computer == 'scissors')
        {
            return "You Win! Rock beats Scissors";
        } else {
            return "Equal";
        }
    } else if (player == 'paper')
    {
        if (computer == "rock")
        {
            return "You Win! Paper beats Rock";
        } else if (computer == "paper")
        {
            return "Equal";
        } else
        {
            return "Computer Win! Scissors beats Paper";
        }
    } else
    {
        if (computer == "rock")
        {
            return "Computer Win! Rock beats Scissors";
        } else if (computer == "paper")
        {
            return "You Win! Scissors beats Paper";
        } else
        {
            return "Equal";
        }
    }
}

function game()
{
    const nameOfPlayer = prompt('What is your name?');
    let playerWin = 0;
    let computerWin = 0;

    for (let i = 0; i < 5; i++)
    {
        const player = prompt("input your choice");
        const computer = getComputerChoice();

        const result = playRound(player, computer);

        console.log(result);

        if (result.search('You') != -1)
        {
            playerWin++;
        } else if (result.search('Computer') != -1)
        {
            computerWin++;
        }
    }

    if (playerWin > computerWin)
    {
        console.log(`${nameOfPlayer} is winner`);
    } else if (playerWin < computerWin)
    {
        console.log('Computer is winner');
    } else {
        console.log('All are equal');
    }
}

game()