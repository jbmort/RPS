
//computers selection
function compSelect() {
let cs = Math.floor(Math.random() * 3) + 1;
console.log(cs);
if (cs == 1) {return ("rock");}
if (cs == 2) {return ("paper");}
if (cs == 3) {return ("scissors");}
}

const user = prompt("What is your name?")
document.getElementById("player").innerHTML = (user + "'s score")

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

rock.addEventListener('click', () => {humanSelection("rock"); game()})
paper.addEventListener('click', () => {humanSelection("paper"); game()})
scissors.addEventListener('click', () => {humanSelection("scissors"); game()})

// gathers human response
function humanSelection (entry) {
humSel = entry;
}

let humanScore = 0
let compScore = 0

function reset() {
    humanScore = 0;
    compScore = 0;
    document.getElementById("hScore").innerHTML = humanScore;
    document.getElementById("cScore").innerHTML = compScore; 
    document.getElementById("top").innerHTML = "Make your selection!";
    document.getElementById("result").innerHTML = "Let's go again";
}
let humsel
function game() {
    let compSel = compSelect();
    if (humanScore < 3 && compScore < 3) {
        if (compSel == "rock" && humSel == "paper" || compSel == "paper" && humSel == "scissors" || compSel == "scissors" && humSel == "rock") {
            document.getElementById("result").innerHTML = "You Win this round!";
            ++humanScore;
            document.getElementById("hScore").innerHTML = humanScore;
            
        }
        if (compSel == "rock" && humSel == "scissors" || compSel == "paper" && humSel == "rock" || compSel == "scissors" && humSel == "paper") {
            document.getElementById("result").innerHTML = "The Computer won this round";
            ++compScore;
            document.getElementById("cScore").innerHTML = compScore;  
           
        }
        if (humSel !== "rock" && humSel !== "paper" && humSel !== "scissors") {
            document.getElementById("result").innerHTML = "Invalid Response";
          
        }
        else if (humSel === compSel) {document.getElementById("result").innerHTML = "Tie!";}
    }
    if (humanScore === 3) {
        document.getElementById("top").innerHTML = "You defeated the computer!";
        document.getElementById("result").innerHTML = "You WIN!!!";
    }
    else if (compScore === 3) {
        document.getElementById("top").innerHTML = "Game Over";
        document.getElementById("result").innerHTML = "The computer kicked your butt!";   
    }
}

    document.getElementById("hScore").innerHTML = humanScore
    document.getElementById("cScore").innerHTML = compScore


