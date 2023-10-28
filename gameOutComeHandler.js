import theGameStructure from "./theGameStructure.js";

const gameContainer = document.getElementById("game-container");
const gridItem = gameContainer.querySelectorAll(".grid-item");
const gameOutComeOverlay = document.getElementById("game-outcome-overlay");
const gameOutComeMessage = document.getElementById("game-outcome-message");
const newGameButton = document.getElementById("new-game-button");
const xScore = document.getElementById("x-score");
const oScore = document.getElementById("o-score");

const whoWins = (function () {
  let gameArray = ["", "", "", "", "", "", "", "", ""];
  let moveCount = 0;
  let xWinsCount = 0;
  let oWinsCount = 0;

  newGameButton.addEventListener("click", function () {
    xWinsCount = 0;
    oWinsCount = 0;
  });

  gridItem.forEach((element, index) => {
    element.addEventListener("click", function () {
      moveCount++;
      if (gameArray[index] === "") {
        gameArray.splice(index, 1, element.innerHTML);
        const topRow = [gameArray[0], gameArray[1], gameArray[2]];
        const middleRow = [gameArray[3], gameArray[4], gameArray[5]];
        const bottomRow = [gameArray[6], gameArray[7], gameArray[8]];
        const firstColumn = [gameArray[0], gameArray[3], gameArray[6]];
        const middleColumn = [gameArray[1], gameArray[4], gameArray[7]];
        const thirdColumn = [gameArray[2], gameArray[5], gameArray[8]];
        const diagonalDown = [gameArray[0], gameArray[4], gameArray[8]];
        const diagonalUp = [gameArray[6], gameArray[4], gameArray[2]];

        const isItX = (marker) => marker === "X";
        const isItO = (marker) => marker === "O";

        function announceWinner(winningMarker) {
          gameOutComeMessage.innerHTML = `${winningMarker} Wins!`;
          gameOutComeOverlay.style.visibility = "visible";
          gameArray = ["", "", "", "", "", "", "", "", ""];
          moveCount = 0;
          if (winningMarker === "X") {
            xWinsCount += 1;
            xScore.innerHTML = `${theGameStructure.playerOne} Score: ${xWinsCount}`;
            gameOutComeMessage.innerHTML = `${theGameStructure.playerOne} Score: ${xWinsCount}`;
          } else if (winningMarker === "O") {
            oWinsCount += 1;
            oScore.innerHTML = `${theGameStructure.playerTwo} Score: ${oWinsCount}`;
            gameOutComeMessage.innerHTML = `${theGameStructure.playerTwo} Score: ${oWinsCount}`;
          }
        }

        if (topRow.every(isItX) || topRow.every(isItO)) {
          [0, 1, 2].forEach((i) => (gridItem[i].style.backgroundColor = "red"));
          announceWinner(topRow[0]);
        } else if (middleRow.every(isItX) || middleRow.every(isItO)) {
          [3, 4, 5].forEach((i) => (gridItem[i].style.backgroundColor = "red"));
          announceWinner(middleRow[0]);
        } else if (bottomRow.every(isItX) || bottomRow.every(isItO)) {
          [6, 7, 8].forEach((i) => (gridItem[i].style.backgroundColor = "red"));
          announceWinner(bottomRow[0]);
        } else if (firstColumn.every(isItX) || firstColumn.every(isItO)) {
          [0, 3, 6].forEach((i) => (gridItem[i].style.backgroundColor = "red"));
          announceWinner(firstColumn[0]);
        } else if (middleColumn.every(isItX) || middleColumn.every(isItO)) {
          [1, 4, 7].forEach((i) => (gridItem[i].style.backgroundColor = "red"));
          announceWinner(middleColumn[0]);
        } else if (thirdColumn.every(isItX) || thirdColumn.every(isItO)) {
          [2, 5, 8].forEach((i) => (gridItem[i].style.backgroundColor = "red"));
          announceWinner(thirdColumn[0]);
        } else if (diagonalDown.every(isItX) || diagonalDown.every(isItO)) {
          [0, 4, 8].forEach((i) => (gridItem[i].style.backgroundColor = "red"));
          announceWinner(diagonalDown[0]);
        } else if (diagonalUp.every(isItX) || diagonalUp.every(isItO)) {
          [6, 4, 2].forEach((i) => (gridItem[i].style.backgroundColor = "red"));
          announceWinner(diagonalUp[0]);
        } else if (moveCount === 9) {
          gameOutComeMessage.innerHTML = "It's a Draw!";
          gameOutComeOverlay.style.visibility = "visible";
          gameArray = ["", "", "", "", "", "", "", "", ""];
          moveCount = 0;
        }
      }
    });
  });
})();

export default whoWins;
