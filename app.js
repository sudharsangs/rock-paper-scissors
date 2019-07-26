let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "s") return "Scissors";
    if(letter === "p") return "Paper";
}

function win(user,computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallu="user".fontsize(3).sub();
    const smallc="comp".fontsize(3).sub();
    result_p.innerHTML = convertToWord(user) + " beats " + smallu + convertToWord(computer) + smallc + " .You win 🔥";
}

function lose(user,computer){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallu="user".fontsize(3).sub();
    const smallc="comp".fontsize(3).sub();
    result_p.innerHTML = convertToWord(user) + " loses to " + smallu + convertToWord(computer) + smallc + " .You Lose";
}

function draw(user,computer){
    const smallu="user".fontsize(3).sub();
    const smallc="comp".fontsize(3).sub();
    result_p.innerHTML = convertToWord(user) + " equals " + smallu + convertToWord(computer) + smallc + " Its a draw";
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "pr":
        case "sp":
        case "rs":
            win(userChoice,computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
        break;
    }

}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    
    paper_div.addEventListener('click', function() {
        game("p");
    })
    
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}
main();