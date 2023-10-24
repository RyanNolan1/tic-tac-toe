import { chosenMarker } from "./pickMarker.js";

const placeMarker = (function () {
  const gameStartOverlay = document.getElementById("game-start-overlay");
  const gameOutComeOverlay = document.getElementById("game-outcome-overlay");
  const nextRoundButton = document.getElementById("next-round-button");
  const newGameButton = document.getElementById("new-game-button");
  const gridItem = document.querySelectorAll(".grid-item");
  const xScore = document.getElementById("x-score");
  const oScore = document.getElementById("o-score");

  let whichMarker = 0;

  gridItem.forEach((element, index) => {
    element.addEventListener("click", function () {
      if (gridItem[index].innerHTML === "") {
        gridItem[index].innerHTML = chosenMarker[whichMarker];
        whichMarker += 1;
      }
    });
  });

  nextRoundButton.addEventListener("click", function () {
    whichMarker = 0;
    gameOutComeOverlay.style.visibility = "hidden";
    gridItem.forEach((element) => {
      element.innerHTML = "";
    });
  });

  newGameButton.addEventListener("click", function () {
    whichMarker = 0;
    gameOutComeOverlay.style.visibility = "hidden";
    gridItem.forEach((element) => {
      element.innerHTML = "";
    });
    xScore.innerHTML = "X Score: O";
    oScore.innerHTML = "O Score: O";
    gameStartOverlay.style.visibility = 'visible';;
  });
})();

export default placeMarker;
