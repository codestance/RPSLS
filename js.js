let playerScore = 0;
let compScore = 0;
const playerScoreSpan = document.getElementById('score-player');
const compScoreSpan = document.getElementById('score-comp');
const rockDiv = document.getElementById('rock');
const paperDiv = document.getElementById('paper');
const scissorsDiv = document.getElementById('scissors');
const lizardDiv = document.getElementById('lizard');
const spockDiv = document.getElementById('spock');
const userChoiceDiv = document.querySelector('.user-choice');
const compChoiceDiv = document.querySelector('.comp-choice');
const resultDiv = document.querySelector('.result');



function getCompChoice(){
    const weapons = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const weapon = weapons[Math.floor(Math.random()*weapons.length)];
    return weapon;
};


function game(userChoice){
    // userChoiceDiv.appendChildImg(userChoice);
    console.log('userChoice : ' + userChoice);
    const compChoice = getCompChoice();
    // compChoiceDiv.appendChildImg(compChoice);
    console.log('compChoice : '+ compChoice);
    switch(userChoice+":"+compChoice){
        case 'rock:rock':
        case 'paper:paper':
        case 'scissors:scissors':
        case 'lizard:lizard':
        case 'spock:spock':
            console.log('It is a draw!');
            break;
        case 'rock:lizard':
        case 'lizard:rock':
            console.log('Rock crushes Lizard');
            break;
        case 'rock:scissors':
        case 'scissors:rock':
            console.log('Rock crushes Scissors');
            break;
        case 'paper:rock':
        case 'rock:paper':
            console.log('Paper covers Rock');
            break;
        case 'paper:spock':
        case 'spock:paper':
            console.log('Paper disproves Spock');
            break;
        case 'scicssors:paper':
        case 'paper:scissors':
            console.log('Scissors cuts Paper');
            break;
        case 'scissors:lizard':
        case 'lizard:scissors':
            console.log('Scissors decapitates Lizard');
            break;
        case 'lizard:spock':
        case 'spock:lizard':
            console.log('Lizard poisons Spock');
            break;
        case 'lizard:paper':
        case 'paper:lizard':
            console.log('Lizard eats Paper');
            break;
        case 'spock:scissors':
        case 'scissors:spock':
            console.log('Spock smashes Scissors');
            break;
        case 'spock:rock':
        case 'rock:spock':
            console.log('Spock vaporizes Rock');
            break;
    }
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