const theGameStructure = (function () {
  const continueButton = document.getElementById("continue-button");
  const playerOneName = document.getElementById("player-1-name");
  const playerTwoName = document.getElementById("player-2-name");

  const playerFactory = (name) => {
    console.log(name);
    return name;
  };
  
  const gameBoard = {
   playerOne: "",
   playerTwo: "",
   rows: 3,
   columns: 3,
   gameArray: ["", "", "", "", "", "", "", "", ""],
 };

  function createPlayer() {
    gameBoard.playerOne = playerFactory(playerOneName.value);
    gameBoard.playerTwo = playerFactory(playerTwoName.value);
    console.log(gameBoard);
  }

  continueButton.addEventListener("click", createPlayer);


  return gameBoard;
})();

export default theGameStructure;
