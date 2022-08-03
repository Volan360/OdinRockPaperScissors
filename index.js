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
    if(cs === ps)
    {
        return "tie"
    }
    else if(ps == "ROCK" && cs == "SCISSORS" 
        || ps == "PAPER" && cs == "ROCK"
        || ps == "SCISSORS" && cs == "PAPER")
        {
            return "player";
        }
    else{
        return "computer";
    }
};

function game(){
    player_score = 0;
    computer_score = 0;
    for (let i = 0; i< 5; i++){
        cs = computerPlay();
        ps = "";
        while (!["ROCK", "PAPER", "SCISSORS"].includes(ps.toUpperCase())){
            ps = window.prompt("Make your move! Rock, Paper, or Scissors?")
        }
        ps = ps.toUpperCase()
        console.log("Player: " + ps);
        console.log("Computer: " + cs);
        if(playRound(ps,cs) === "player")
        {
            player_score += 1
            console.log("You win this round! " + ps + " beats " + cs);
        }
        else if(playRound(ps, cs) == "tie")
        {
            console.log("A tie! You're operating on the same wavelength");
        }
        else{
            computer_score += 1;
            console.log("You lose this round! " + cs + " beats " + ps);
        }
        console.log("Player score: " + player_score);
        console.log("Computer score: " + computer_score);
    }
    if(player_score > computer_score){
        console.log("You Win! Verily humanity reigns supreme!")
    }
    else if(player_score == computer_score)
    {
        console.log("A tie! It seems you've met your match!")
    }
    else{
        console.log("You Lose! Praise our digital overlords!")
    }
};

function generateUrl() {
    base_url = 'src/enemyImg/MONS_'
    number = Math.floor(Math.random() * 8639)
    number = number.toString()
    number = number.padStart(5, '0')
    return base_url + number + '.PNG'
}

let char = document.createElement('img')
char.src = generateUrl()
// char.src = 'src/enemyImg/MONS_08291.PNG'
char.style.position = 'absolute'
char.style.left = '38%'
char.style.bottom = '50%'


// let deox = document.createElement('img')
// deox.src = 'src/Deoxys-speed.gif'
// deox.height = 300
// deox.width = 300
// deox.style.position = 'absolute'
// deox.style.left = '30%'
// deox.style.bottom = '40%'

let display = document.getElementById('display')
char.onerror = function () {

    char.src = generateUrl()
    // char.src = 'src/enemyImg/MONS_08291.PNG'
}
char.onload = () => display.appendChild(char)
// deox.onload = () => display.appendChild(deox)
//game()