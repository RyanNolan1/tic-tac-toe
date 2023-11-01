import theGameStructure from "./theGameStructure.js";

const chooseMarker = document.getElementsByName("choose-marker");
const chooseOpponent = document.getElementsByName("choose-opponent");
const continueButton = document.getElementById("continue-button");
const gameStartOverlay = document.getElementById("game-start-overlay");
const gameOutComeOverlay = document.getElementById("game-outcome-overlay");
const nextRoundButton = document.getElementById("next-round-button");
const newGameButton = document.getElementById("new-game-button");
const gridItem = document.querySelectorAll(".grid-item");
const xScore = document.getElementById("x-score");
const oScore = document.getElementById("o-score");

const markerHandler = (function () {
  let chosenOpponent;
  let chosenMarker;
  let whichMarker = 0;

  continueButton.addEventListener("click", () => {
    xScore.innerHTML = `${theGameStructure.playerOne} (X) Score: 0`;
    oScore.innerHTML = `${theGameStructure.playerTwo} (O) Score: 0`;
    gameStartOverlay.style.visibility = "hidden";
    chooseMarker.forEach((element) => {
      if (element.checked && element.value === "X") {
        chosenMarker = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
      } else if (element.checked && element.value === "O") {
        chosenMarker = ["O", "X", "O", "X", "O", "X", "O", "X", "O"];
      }
    });
    chooseOpponent.forEach((element) => {
      if (element.checked && element.value === "AI") {
        chosenOpponent = "AI";
        oScore.innerHTML = `AI (O) Score: 0`;
      } else if (element.checked && element.value === "Player") {
        chosenOpponent = "Player";
      }
    });
  });

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
