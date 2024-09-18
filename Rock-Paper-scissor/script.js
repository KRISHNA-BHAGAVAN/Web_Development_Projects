let compScore=0;
let userScore=0;
const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#result");
const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");
let msg = document.querySelector("#msg");
const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissor"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randInd];
};
const userChoice = (choiceId)=>{
    return choiceId;
}
choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    })
});

let drawMessage = ()=>{
    result.style.backgroundColor = "rgb(22, 50, 75)";
    result.innerText = `Draw Match..!`;
    msg.innerText = ` same choice as computer`
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log("user choice =",userChoice);
    console.log("computer choice =", compChoice);

    let userWin = true;
    if(userChoice===compChoice){
        drawMessage();
    }
    else{
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true
        }
        showResults(userChoice,compChoice,userWin);
    }
    
};

function showResults(userChoice, compChoice, userWin){
    if(userWin) {
        userScore++;
        userScorePara.innerText=`${userScore}`;
        result.style.backgroundColor = "green";
        result.innerText = `You Won!`;
        msg.innerText = ` Your ${userChoice} beats the ${compChoice}`

    }
    else{
        compScore++;
        compScorePara.innerText=`${compScore}`;
        result.style.backgroundColor = "red";
        result.innerText = `You Lost..Try Again`;
        msg.innerText = `${compChoice} beat your ${userChoice}`
    }
        
}