import theGameStructure from "./theGameStructure.js";

const chooseMarker = document.getElementsByName("choose-marker");
const continueButton = document.getElementById("continue-button");
const gameStartOverlay = document.getElementById("game-start-overlay");
const gameOutComeOverlay = document.getElementById("game-outcome-overlay");
const nextRoundButton = document.getElementById("next-round-button");
const newGameButton = document.getElementById("new-game-button");
const gridItem = document.querySelectorAll(".grid-item");
const xScore = document.getElementById("x-score");
const oScore = document.getElementById("o-score");

const markerHandler = (function () {
  let chosenMarker;
  let whichMarker = 0;
  let humanMarker;
  let computerMarker;

  continueButton.addEventListener("click", () => {
    xScore.innerHTML = `${theGameStructure.playerOne} (X) Score: 0`;
    oScore.innerHTML = `${theGameStructure.playerTwo} (O) Score: 0`;
    gameStartOverlay.style.visibility = "hidden";
    chooseMarker.forEach((element) => {
      if (element.checked && element.value === "X") {
        chosenMarker = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
        humanMarker = "X";
        computerMarker = "O"
      } else if (element.checked && element.value === "O") {
        chosenMarker = ["O", "X", "O", "X", "O", "X", "O", "X", "O"];
        humanMarker = "O";
        computerMarker = "X"
      }
    });
  });

  function winning(board, player){
    if (
    (board[0] == player && board[1] == player && board[2] == player) ||
    (board[3] == player && board[4] == player && board[5] == player) ||
    (board[6] == player && board[7] == player && board[8] == player) ||
    (board[0] == player && board[3] == player && board[6] == player) ||
    (board[1] == player && board[4] == player && board[7] == player) ||
    (board[2] == player && board[5] == player && board[8] == player) ||
    (board[0] == player && board[4] == player && board[8] == player) ||
    (board[2] == player && board[4] == player && board[6] == player)
    ) {
    return true;
    } else {
    return false;
    }
   }

  gridItem.forEach((element, index) => {
    element.addEventListener("click", function () {
      if (gridItem[index].innerHTML === "") {
        gridItem[index].innerHTML = chosenMarker[whichMarker];
        whichMarker += 1;
        if (
          theGameStructure.playerTwo === "AI" &&
          theGameStructure.difficulty === "random"
        ) {
          let emptyCellIndex = [];
          gridItem.forEach((element, index) => {
            if (element.innerHTML === "") {
              emptyCellIndex.push(index);
            }
          });
          let randomIndex =
            emptyCellIndex[Math.floor(Math.random() * emptyCellIndex.length)];
          if (emptyCellIndex.length > 1) {
            gridItem[randomIndex].innerHTML = chosenMarker[whichMarker];
            whichMarker += 1;
          }

          emptyCellIndex.forEach((element, index) => {
            if (element === randomIndex) emptyCellIndex.splice(index, 1);
          });
        } else if (
          theGameStructure.playerTwo === "AI" &&
          theGameStructure.difficulty === "easy"
        ) {
          console.log("easy mode");
        } else if (
          theGameStructure.playerTwo === "AI" &&
          theGameStructure.difficulty === "medium"
        ) {
          console.log("medium mode");
        } else if (
          theGameStructure.playerTwo === "AI" &&
          theGameStructure.difficulty === "hard"
        ) {
          let emptyCellIndex = [];
          gridItem.forEach((element, index) => {
            if (element.innerHTML === "") {
              emptyCellIndex.push(index);
            } else {
              emptyCellIndex.push(element.innerHTML)
            }
          });
          console.log(winning(emptyCellIndex, humanMarker));
          console.log(emptyCellIndex);
        }
      }
    });
  });

  nextRoundButton.addEventListener("click", function () {
    whichMarker = 0;
    gameOutComeOverlay.style.visibility = "hidden";
    gridItem.forEach((element) => {
      element.innerHTML = "";
      element.style.backgroundColor = "white";
    });
  });

  newGameButton.addEventListener("click", function () {
    whichMarker = 0;
    gameOutComeOverlay.style.visibility = "hidden";
    gridItem.forEach((element) => {
      element.innerHTML = "";
      element.style.backgroundColor = "white";
    });
    xScore.innerHTML = `${theGameStructure.playerOne} (X) Score: 0`;
    oScore.innerHTML = `${theGameStructure.playerTwo} (O) Score: 0`;
    gameStartOverlay.style.visibility = "visible";
  });
})();

export default markerHandler;
