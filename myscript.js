let TOOL_VALUE = {
    "rock": 0,
    "paper": 1,
    "scissors": 2 
}
let VALUE_TOOL = {
    0: "rock",
    1: "paper",
    2: "scissors"
}

function choose(playerChoice) {
    let computerChoice = generateComputerChoice();
    let playerChoiceNum = TOOL_VALUE[playerChoice];
    let computerChoiceNum = TOOL_VALUE[computerChoice];

    var result;
    if (playerChoiceNum == computerChoiceNum)
        result = 0; //tie
    else if ((playerChoiceNum + 2) % 3 == computerChoiceNum)
        result = 1; //win   
    else
        result = -1;//lost

    changeHeaders(result);
    hideDivs(playerChoice);
    displayComputerDiv(playerChoice, computerChoice);
    stopTheGame();
}


function changeHeaders(result) {
    var header = document.querySelector("h1");
    if (result == 0)
        header.textContent = "YOU TIED!";
    if (result == 1)
        header.textContent = "YOU WON!";
    if (result == -1)
        header.textContent = "YOU LOST!";

    document.querySelectorAll('h3').forEach(head => {
        head.textContent = "";
    })
}

function hideDivs(playerChoice) {
    document.querySelectorAll('.tool').forEach(div => {
        if (div.id != playerChoice)
            div.style.display = "none";
    })
}

function displayComputerDiv(playerChoice, computerChoice) {
    var elemntClone = document.querySelector("#"+computerChoice).cloneNode(true);
    elemntClone.style.display = "flex";
    elemntClone.classList.add("flip-img");
    document.getElementById(playerChoice).after(elemntClone);
}

function stopTheGame() {
    document.querySelectorAll("img").forEach(image => {
        image.onclick = null;
    })
}

function generateComputerChoice() {
    let randomNum = Math.floor(Math.random() * 10) % 3;

    return VALUE_TOOL[randomNum];
}

function refreshPage(){
    location.reload();
}