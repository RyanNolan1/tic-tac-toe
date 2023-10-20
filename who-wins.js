const whoWins = (function () {
  const gameContainer = document.getElementById("game-container");
  const gridItem = gameContainer.querySelectorAll(".grid-item");

  let gameArray = ["", "", "", "", "", "", "", "", ""];
  let moveCount = 0;

  gridItem.forEach((element, index) => {
    element.addEventListener("click", function () {
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
        console.log("X Wins!");
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
        console.log("O Wins!");
      } else if (moveCount === 9) {
        console.log("It's a Draw!");
      }

     


    }, {once : true});
  });
})();

export default whoWins;
