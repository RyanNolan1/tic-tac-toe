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
  let xWinsCount = 0;
  let oWinsCount = 0;

  newGameButton.addEventListener("click", function () {
    xWinsCount = 0;
    oWinsCount = 0;
  });

  gridItem.forEach((element, index) => {
    element.addEventListener("click", function () {
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
      moveCount++;
      

      function xWins() {
        gameOutComeMessage.innerHTML = "X Wins!";
        xWinsCount += 1;
        xScore.innerHTML = `X Score:${xWinsCount}`;
        gameOutComeOverlay.style.visibility = "visible";
        gameArray = ["", "", "", "", "", "", "", "", ""];
        moveCount = 0;
      }

      function oWins() {
        gameOutComeMessage.innerHTML = "O Wins!";
        oWinsCount += 1;
        oScore.innerHTML = `O Score:${oWinsCount}`;
        gameOutComeOverlay.style.visibility = "visible";
        gameArray = ["", "", "", "", "", "", "", "", ""];
        moveCount = 0;
      }

      if (topRow.every(isItX)) {
        gridItem[0].style.backgroundColor = "red";
        gridItem[1].style.backgroundColor = "red";
        gridItem[2].style.backgroundColor = "red";
        xWins();
      } else if (middleRow.every(isItX)) {
        gridItem[3].style.backgroundColor = "red";
        gridItem[4].style.backgroundColor = "red";
        gridItem[5].style.backgroundColor = "red";
        xWins();
      } else if (bottomRow.every(isItX)) {
        gridItem[6].style.backgroundColor = "red";
        gridItem[7].style.backgroundColor = "red";
        gridItem[8].style.backgroundColor = "red";
        xWins();
      } else if (firstColumn.every(isItX)) {
        gridItem[0].style.backgroundColor = "red";
        gridItem[3].style.backgroundColor = "red";
        gridItem[6].style.backgroundColor = "red";
        xWins();
      } else if (middleColumn.every(isItX)) {
        gridItem[1].style.backgroundColor = "red";
        gridItem[4].style.backgroundColor = "red";
        gridItem[7].style.backgroundColor = "red";
        xWins();
      } else if (thirdColumn.every(isItX)) {
        gridItem[2].style.backgroundColor = "red";
        gridItem[5].style.backgroundColor = "red";
        gridItem[8].style.backgroundColor = "red";
        xWins();
      } else if (diagonalDown.every(isItX)) {
        gridItem[0].style.backgroundColor = "red";
        gridItem[4].style.backgroundColor = "red";
        gridItem[8].style.backgroundColor = "red";
        xWins();
      } else if (diagonalUp.every(isItX)) {
        gridItem[6].style.backgroundColor = "red";
        gridItem[4].style.backgroundColor = "red";
        gridItem[2].style.backgroundColor = "red";
        xWins();
      } else if (topRow.every(isItO)) {
        gridItem[0].style.backgroundColor = "yellow";
        gridItem[1].style.backgroundColor = "yellow";
        gridItem[2].style.backgroundColor = "yellow";
        oWins();
      } else if (middleRow.every(isItO)) {
        gridItem[3].style.backgroundColor = "yellow";
        gridItem[4].style.backgroundColor = "yellow";
        gridItem[5].style.backgroundColor = "yellow";
        oWins();
      } else if (bottomRow.every(isItO)) {
        gridItem[6].style.backgroundColor = "yellow";
        gridItem[7].style.backgroundColor = "yellow";
        gridItem[8].style.backgroundColor = "yellow";
        oWins();
      } else if (firstColumn.every(isItO)) {
        gridItem[0].style.backgroundColor = "yellow";
        gridItem[3].style.backgroundColor = "yellow";
        gridItem[6].style.backgroundColor = "yellow";
        oWins();
      } else if (middleColumn.every(isItO)) {
        gridItem[1].style.backgroundColor = "yellow";
        gridItem[4].style.backgroundColor = "yellow";
        gridItem[7].style.backgroundColor = "yellow";
        oWins();
      } else if (thirdColumn.every(isItO)) {
        gridItem[2].style.backgroundColor = "yellow";
        gridItem[5].style.backgroundColor = "yellow";
        gridItem[8].style.backgroundColor = "yellow";
        oWins();
      } else if (diagonalDown.every(isItO)) {
        gridItem[0].style.backgroundColor = "yellow";
        gridItem[4].style.backgroundColor = "yellow";
        gridItem[8].style.backgroundColor = "yellow";
        oWins();
      } else if (diagonalUp.every(isItO)) {
        gridItem[6].style.backgroundColor = "yellow";
        gridItem[4].style.backgroundColor = "yellow";
        gridItem[2].style.backgroundColor = "yellow";
        oWins();
      } else if (moveCount === 9) {
        gameOutComeMessage.innerHTML = "It's a Draw!";
        gameOutComeOverlay.style.visibility = "visible";
        gameArray = ["", "", "", "", "", "", "", "", ""];
        moveCount = 0;
      }}
    });
  });
})();

export default whoWins;
