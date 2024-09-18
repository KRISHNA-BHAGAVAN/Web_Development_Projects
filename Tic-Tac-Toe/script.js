let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".extras p");
const newGameBtn = document.querySelector("#new-game");
let menu_section = document.querySelector(".extras");
let game_section = document.querySelector(".game");
const resetBtn = document.querySelector("#reset-btn");
let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.textContent === "") {
      if (turnO) {
        box.textContent = "O";
        turnO = false;
      } else {
        box.textContent = "X";
        turnO = true;
      }
      checkWinner();
    }
  });
});


const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
}
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}
const resetGame = () => {
  turnO = true;
  enableBoxes();
}
let newGame = ()=>{
  resetGame();
  game_section.classList.remove("hide");
  menu_section.classList.add("hide");
}
function checkWinner() {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        console.log("We have a Winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
}
const showWinner = (winner) => {
  msg.textContent = `Congratulations, Player '${winner}' has won the game`;
  disableBoxes();
  game_section.classList.add("hide");
  menu_section.classList.remove("hide");
}
newGameBtn.addEventListener("click",newGame);
resetBtn.addEventListener("click", resetGame) ;

