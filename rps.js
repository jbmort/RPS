
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

// if enter is hit, triggers button
let input = document.getElementById('selection');
input.addEventListener('keypress', function(event)
{if (event.key === "Enter") { 
    event.preventDefault();
    document.getElementById("play").click();}
})

// gathers human and computer responses
function humanSelection () {
let sel = document.querySelector('input').value;
let hs = sel.toLowerCase();
console.log(hs);
return hs;
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
    document.getElementById("selection").innerHTML = ("");

}

function game() {
    let compSel = compSelect();
    let humSel = humanSelection();
   
    if (humanScore < 3 && compScore < 3) {
        if (compSel == "rock" && humSel == "paper" || compSel == "paper" && humSel == "scissors" || compSel == "scissors" && humSel == "rock") {
            document.getElementById("result").innerHTML = "You Win this round!";
            ++humanScore;
            document.getElementById("hScore").innerHTML = humanScore;
            document.getElementById("selection").innerHTML = ("");
        }
        if (compSel == "rock" && humSel == "scissors" || compSel == "paper" && humSel == "rock" || compSel == "scissors" && humSel == "paper") {
            document.getElementById("result").innerHTML = "The Computer won this round";
            ++compScore;
            document.getElementById("cScore").innerHTML = compScore;  
            document.getElementById("selection").innerHTML = ("");
        }
        if (humSel !== "rock" && humSel !== "paper" && humSel !== "scissors") {
            document.getElementById("result").innerHTML = "Invalid Response";
            document.getElementById("selection").innerHTML = ("");
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


