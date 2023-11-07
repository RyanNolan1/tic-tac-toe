const theGameStructure = (function () {
  const continueButton = document.getElementById("continue-button");
  const playerOneName = document.getElementById("player-1-name");
  const playerTwoName = document.getElementById("player-2-name");
  const chooseOpponent = document.getElementsByName("choose-opponent");
  const chooseDifficulty = document.getElementById("choose-difficulty");

  const playerFactory = (name) => {
    return name;
  };

  const gameBoard = {
    playerOne: "",
    playerTwo: "",
    difficulty: "",
    rows: 3,
    columns: 3,
    gameArray: ["", "", "", "", "", "", "", "", ""],
  };

  function createPlayer() {
    chooseOpponent.forEach((element) => {
      if (element.checked && element.value === "AI") {
        gameBoard.playerOne = playerFactory(playerOneName.value);
        gameBoard.playerTwo = playerFactory("AI");
        gameBoard.difficulty = chooseDifficulty.value;
      } else if (element.checked && element.value === "Player") {
        gameBoard.playerOne = playerFactory(playerOneName.value);
        gameBoard.playerTwo = playerFactory(playerTwoName.value);
      }
    });
  }

  continueButton.addEventListener("click", createPlayer);

  return gameBoard;
})();

export default theGameStructure;
