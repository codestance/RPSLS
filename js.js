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
var tID;
function compStop(){
    clearInterval(tID);
    compChoiceDiv.style.backgroundImage = "none";
}
function compWait(){
    const p = [0, 140, 300, 460, 620];
    let x= 0;
    tID = setInterval(()=>{
        if(x<p.length-1){
            x=x+1;
        }else{
            x=0;
        }
        compChoiceDiv.style.backgroundPosition = `-${p[x]}px 0px`;
    },200);
}
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
    appendChildImg(userChoiceDiv, userChoice);
    console.log('userChoice : ' + userChoice);
    const compChoice = getCompChoice();
    appendChildImg(compChoiceDiv, compChoice);
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
function appendChildImg(d, i){
    let img = document.createElement('img');
    var src;
    switch(i){
        case 'rock':
            src = 'img/rock.svg';
            break;
        case 'paper':
            src = 'img/paper.svg';
            break;
        case 'scissors':
            src = 'img/scissors.svg';
            break;
        case 'lizard':
            src = 'img/lizard.svg';
            break;
        case 'spock':
            src = 'img/spock.svg';
            break;
    }
    if(d.firstChild){
        d.removeChild(d.firstChild);
    }
    img.setAttribute('src', src);
    d.appendChild(img);
}
function main(){
    compWait()
    rockDiv.addEventListener('click', function(){
        game('rock');
        compStop();
    })
    paperDiv.addEventListener('click', function(){
        game('paper');
        compStop();
    })   
    scissorsDiv.addEventListener('click', function(){
        game('scissors');
        compStop();
    })
    lizardDiv.addEventListener('click', function(){
        game('lizard');
        compStop();
    })
    spockDiv.addEventListener('click', function(){
        game('spock');
        compStop();
    })
};
main();