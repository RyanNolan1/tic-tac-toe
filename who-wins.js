const whoWins = (function () {
  const gameContainer = document.getElementById("game-container");
  const gridItem = gameContainer.querySelectorAll(".grid-item");
  const gameOutComeOverlay = document.getElementById("game-outcome-overlay");
  const gameOutComeMessage = document.getElementById("game-outcome-message");
  const newGameButton = document.getElementById("new-game-button");
  const xScore = document.getElementById("x-score");
  const oScore = document.getElementById("o-score");

  let gameArray = ["", "", "", "", "", "", "", "", ""];
  let moveCount = 0;
  let xWins = 0;
  let oWins = 0;

  newGameButton.addEventListener("click", function() {
    xWins = 0;
    oWins = 0;
  });

  gridItem.forEach((element, index) => {
    element.addEventListener(
      "click",
      function () {
        gameArray.splice(index, 1, element.innerHTML);
        const topRow = gameArray.slice(0, 3);
        const middleRow = gameArray.slice(3, 6);
        const bottomRow = gameArray.slice(6, 9);
        const firstColumn = [gameArray[0], gameArray[3], gameArray[6]];
        const middleColumn = [gameArray[1], gameArray[4], gameArray[7]];
        const thirdColumn = [gameArray[2], gameArray[5], gameArray[8]];
        const diagonalDown = [gameArray[0], gameArray[4], gameArray[8]];
        const diagonalUp = [gameArray[6], gameArray[4], gameArray[2]];

        const isItX = (marker) => marker === "X";
        const isItO = (marker) => marker === "O";
        moveCount++;

        if (
          topRow.every(isItX) ||
          middleRow.every(isItX) ||
          bottomRow.every(isItX) ||
          firstColumn.every(isItX) ||
          middleColumn.every(isItX) ||
          thirdColumn.every(isItX) ||
          diagonalDown.every(isItX) ||
          diagonalUp.every(isItX)
        ) {
          gameOutComeMessage.innerHTML = "X Wins!";
          xWins += 1;
          xScore.innerHTML = `X Score:${xWins}`
          gameOutComeOverlay.style.visibility = "visible";
          gameArray = ["", "", "", "", "", "", "", "", ""]
          moveCount = 0;
        } else if (
          topRow.every(isItO) ||
          middleRow.every(isItO) ||
          bottomRow.every(isItO) ||
          firstColumn.every(isItO) ||
          middleColumn.every(isItO) ||
          thirdColumn.every(isItO) ||
          diagonalDown.every(isItO) ||
          diagonalUp.every(isItO)
        ) {
          gameOutComeMessage.innerHTML = "O Wins!";
          oWins += 1;
          oScore.innerHTML = `O Score:${oWins}`
          gameOutComeOverlay.style.visibility = "visible";
          gameArray = ["", "", "", "", "", "", "", "", ""]
          moveCount = 0;
        } else if (moveCount === 9) {
          gameOutComeMessage.innerHTML = "It's a Draw!";
          gameOutComeOverlay.style.visibility = "visible";
          gameArray = ["", "", "", "", "", "", "", "", ""]
          moveCount = 0;
        }
      }
    );
  });
})();

export default whoWins;
