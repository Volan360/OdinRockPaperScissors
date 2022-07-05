function computerPlay(){
    seed = Math.floor(Math.random()*9);
    if(0 <= seed && seed <= 2)
    {
        choice = "ROCK";
    }
    else if(3 <= seed && seed <= 5)
    {
        choice = "PAPER";
    }
    else
    {
        choice = "SCISSORS";
    }
    return choice;
};
//ps = playerSelection, cs = computerSelection
function playRound(ps, cs){
    ps = ps.toUpperCase();
    cs = cs.toUpperCase();
    console.log(ps);
    console.log(cs);
    if(cs === ps)
    {
        return "This one's a tie!"
    }
    else if(ps == "ROCK" && cs == "SCISSORS" 
        || ps == "PAPER" && cs == "ROCK"
        || ps == "SCISSORS" && cs == "PAPER")
        {
            return "You Win! " + ps + " beats " + cs;
        }
    else{
        return "You Lose! " + cs + " beats " + ps;
    }
};

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
