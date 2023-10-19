const whoWins = (function () {
  const gameContainer = document.getElementById("game-container");
  const gridItem = gameContainer.querySelectorAll(".grid-item");

  let gameArray = ["", "", "", "", "", "", "", "", ""];

  gridItem.forEach((element, index) => {
    element.addEventListener("click", function () {
      gameArray.splice(index, 1, element.innerHTML);
      const topRow = gameArray.slice(0, 3);
      const middleRow = gameArray.slice(3, 6);
      const bottomRow = gameArray.slice(6, 9);
      const diagonalDown = [gameArray[0], gameArray[4], gameArray[8]];
      const diagonalUp = [gameArray[6], gameArray[4], gameArray[2]];

      const isItX = (marker) => marker === "X";
      if (topRow.every(isItX) || middleRow.every(isItX) || bottomRow.every(isItX) || diagonalDown.every(isItX) || diagonalUp.every(isItX)) {
        console.log("X Wins!");
      }

      const isItO = (marker) => marker === "O";
      if (topRow.every(isItO) || middleRow.every(isItO) || bottomRow.every(isItO) || diagonalDown.every(isItO) || diagonalUp.every(isItO)) {
        console.log("O Wins!");
      }


    });
  });
})();

export default whoWins;
