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
    let descPlayer = document.getElementById('descPlayer')
    let descEnemy = document.getElementById('descEnemy')
    let descResult = document.getElementById('descResult')
    descPlayer.textContent = `You: ${ps}`
    descEnemy.textContent = `Enemy: ${cs}`

    if(cs === ps)
    {
        descResult.textContent = "It's a tie!"
        return "tie"
    }
    else if(ps == "ROCK" && cs == "SCISSORS" 
        || ps == "PAPER" && cs == "ROCK"
        || ps == "SCISSORS" && cs == "PAPER")
        {
            descResult.textContent = "Enemy is hit!"
            return "player";
        }
    else{
        descResult.textContent = "You are hit!"
        return "computer";
    }
};

function action(ps){
    let result = playRound(ps, computerPlay())
    let descResult = document.getElementById('descResult')
    if(result == 'player'){
        enemyHealth -= 1
        if(enemyHealth == 0){
            setHealth(playerHealth, enemyHealth)
            alert("You Win! Refresh to play again")
            descResult.textContent = "You Won!"
            endGame()
        }
    }
    if(result == 'computer'){
        playerHealth -= 1
        if(playerHealth == 0){
            setHealth(playerHealth, enemyHealth)

            alert("You Lose... Refresh to play again")
            descResult.textContent = "Better luck next time"
            endGame()
        }
    }
    setHealth(playerHealth, enemyHealth)
}

function endGame(){
    document.getElementById("ROCK").remove()
    document.getElementById("PAPER").remove()
    document.getElementById("SCISSORS").remove()

    let againBtn = document.createElement('button')
    againBtn.textContent = "Play Again!"
    againBtn.onclick = () => location.reload()
    document.getElementById("bottom").appendChild(againBtn)
}

function generateUrl() {
    base_url = 'src/enemyImg/MONS_'
    number = Math.floor(Math.random() * 8639)
    number = number.toString()
    number = number.padStart(5, '0')
    return base_url + number + '.PNG'
}

function setHealth(playerHealth, enemyHealth){
    let player = document.getElementById("playerHealth")
    let enemy = document.getElementById("enemyHealth")
    player.textContent = `Your Health: ${playerHealth}`
    enemy.textContent = `Enemy Health: ${enemyHealth}`
}

let musicBtn = document.getElementById('start')
let music = document.getElementById('music')
musicBtn.onclick = function () {
    if(music.paused){
        music.play()
        musicBtn.textContent = 'Pause BGM'
    }
    else{
        music.pause()
        musicBtn.textContent = 'Play BGM'
    }
}

let char = document.createElement('img')
char.src = generateUrl()
//blackbird image for debugging
// char.src = 'src/enemyImg/MONS_08291.PNG'
char.style.marginLeft = 'auto'
char.style.marginRight = 'auto'
// char.style.marginBottom = '5%'

let display = document.getElementById('display')
char.onerror = () => char.src = generateUrl()
char.onload = function () {
    char.height = char.height * 1.15
    char.width = char.width * 1.15
    display.appendChild(char)
}

//game
let playerHealth = 5
let enemyHealth = 5
setHealth(playerHealth,enemyHealth)

let rockBtn = document.getElementById('ROCK')
let paperBtn = document.getElementById('PAPER')
let scissorsBtn = document.getElementById('SCISSORS')

rockBtn.onclick = () => action("ROCK")
paperBtn.onclick = () => action("PAPER")
scissorsBtn.onclick = () => action("SCISSORS")