let playerScore = 0;
let compScore = 0;
const playerScoreSpan = document.getElementById('score-player');
const compScoreSpan = document.getElementById('score-comp');
const rockDiv = document.getElementById('rock');
const paperDiv = document.getElementById('paper');
const scissorsDiv = document.getElementById('scissors');
const lizardDiv = document.getElementById('lizard');
const spockDiv = document.getElementById('spock');
const userChoiceDiv = document.querySelector('#user-choice');
const compChoiceDiv = document.querySelector('#comp-choice');
const resultDiv = document.querySelector('.result');



function getCompChoice(){
    const weapons = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const weapon = weapons[Math.floor(Math.random()*weapons.length)];
    return weapon;
};

const isItWin = {
    rock : {
        lizard: 'Rock crushes Lizard',
        scissors:'Rock crushes Scissors'
    },
    paper: {
        rock: 'Paper covers Rock',
        spock: 'Paper disproves Spock'
    },
    scissors: {
        paper: 'Scissors cuts Paper',
        lizard: 'Scissors decapitates Lizard'
    },
    lizard: {
        spock: 'Lizard poisons Spock',
        paper: 'Lizard eats Paper'
    },
    spock: {
        scissors: 'Spock smashes Scissors',
        rock: 'Spock vaporizes Rock'
    }
}

function game(userChoice){
    // userChoiceDiv.appendChildImg(userChoice);
    console.log('userChoice : ' + userChoice);
    const compChoice = getCompChoice();
    // compChoiceDiv.appendChildImg(compChoice);
    console.log('compChoice : '+ compChoice);
    var msg;
    if(userChoice===compChoice){
        msg = 'It is a draw!';
        userChoiceDiv.style.borderColor = "blue";
        compChoiceDiv.style.borderColor = "blue";
    }else{
        msg = isItWin[userChoice][compChoice];
        if (msg){
            playerScore = playerScore+1;
            playerScoreSpan.innerHTML=playerScore;
            userChoiceDiv.style.borderColor = "green";
            compChoiceDiv.style.borderColor = "red";
        } else{
            msg = isItWin[compChoice][userChoice];
            compScore = compScore+1;
            compScoreSpan.innerHTML=compScore;
            compChoiceDiv.style.borderColor = "green";
            userChoiceDiv.style.borderColor = "red";
        }
    }
    msg = document.createTextNode(msg);
    if(resultDiv.firstChild){
        resultDiv.removeChild(resultDiv.firstChild);
    }
    resultDiv.appendChild(msg);
    
}

// function appendChildImg(e){

// }

function main(){
    rockDiv.addEventListener('click', function(){
        game('rock');
    })
    
    paperDiv.addEventListener('click', function(){
        game('paper');
    })
    
    scissorsDiv.addEventListener('click', function(){
        game('scissors');
    })
    
    lizardDiv.addEventListener('click', function(){
        game('lizard');
    })
    
    spockDiv.addEventListener('click', function(){
        game('spock');
    })
};

main();