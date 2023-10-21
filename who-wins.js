const whoWins = (function () {
  const gameContainer = document.getElementById("game-container");
  const gridItem = gameContainer.querySelectorAll(".grid-item");
  const gameOutComeOverlay = document.getElementById("game-outcome-overlay");
  const gameOutComeMessage = document.getElementById("game-outcome-message");

  let gameArray = ["", "", "", "", "", "", "", "", ""];
  let moveCount = 0;

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
          gameOutComeOverlay.style.visibility = "visible";
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
          gameOutComeOverlay.style.visibility = "visible";
        } else if (moveCount === 9) {
          gameOutComeMessage.innerHTML = "It's a Draw!";
          gameOutComeOverlay.style.visibility = "visible";
        }
      },
      { once: true }
    );
  });
})();

export default whoWins;
