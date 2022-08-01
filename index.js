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

const canvas = document.getElementById("canvas");

function fitToContainer(canvas) {
    canvas.style["width"] = "100%";
    canvas.style["height"] = "100%";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}
fitToContainer(canvas);
const ctx = canvas.getContext("2d")
// const nate = document.createElement("img")
// nate.src = 'src/Nate.webp'
// nate.onload = function () {
//     let height = nate.height * 6
//     let width = nate.width * 6
//     context.drawImage(nate, -50, 10, width, height)
// }

let char = document.createElement('img')
char.src = 'src/Charizard.gif'
char.height = 350
char.width = 350
char.style.position = 'absolute'
char.style.left = '53%'
char.style.bottom = '55%'

let display = document.getElementById('display')
char.onload = () => display.appendChild(char)
//game()