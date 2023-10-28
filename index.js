import displayController from "./displayController.js";
import markerHandler from "./markerHandler.js";
import gameOutComeHandler from "./gameOutComeHandler.js";

const continueButton = document.getElementById("continue-button");
const playerOneName = document.getElementById("player-1-name")

const playerFactory = (name) => {
    console.log(name);
};

function createPlayer() {
    playerFactory(playerOneName.value);
}


continueButton.addEventListener("click", createPlayer);
