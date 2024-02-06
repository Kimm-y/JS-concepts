

let objects = ['rock', 'paper' , 'scissors']
const playersDisplay= document.getElementById("playersDisplay")
const computerDisplay= document.getElementById("computerDisplay")
const resultDisplay= document.getElementById("resultDisplay")
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")

let playerScore = 0;
let computerScore = 0;

function playGame(playersChoice){
    const computerChoice =objects[Math.floor(Math.random()*3)];
    let result = "";



if (playersChoice=== computerChoice){
    result= "DRAW"
    score=0 
} else {
    switch (playersChoice){
        case "rock":
            result = (computerChoice=== "scissors") ? " YOU WIN" : " YOU LOSE"

           break;

           case "scissors":
            result = (computerChoice=== "paper") ? " YOU WIN" : " YOU LOSE"
           break;

           case "paper":
            result = (computerChoice=== "ROCK") ? " YOU WIN" : " YOU LOSE"
           break;
    }

}

playersDisplay.textContent  = `PLAYER: ${playersChoice}`;
computerDisplay.textContent  = `COMPUTER: ${computerChoice}`;
resultDisplay.textContent= result;


              switch(result){
                 case " YOU WIN":
                    playerScore++ ;
                    playerScoreDisplay.textContent= playerScore;
                    break;
                    case " YOU LOSE":
                        computerScore++ ;
                       computerScoreDisplay.textContent= computerScore;
                        break;
              }

}









// setInterval(()=> {
//     let randInt = Math.round(Math.random()*objects.length)
//     document.body=objects[randInt]
// } , 1000);


let colorChanger = document.querySelector('.color-changer')
let colors = ['#F7ADB4', '#F7D8B4' ,'#F7F7B4' , '#B4F7C3' , '#B4DAF7']
 setInterval(() => {
    let randInt = Math.round(Math.random() * colors.length)
    document.body.style.backgroundColor = colors [randInt]
 }, 1000);



function promptMe (){
    var playersChoice = prompt ("Rock, Paper, Scissors");
    alert(playersChoice); }



// let resultDisplay = document.querySelector('.win-lose')

