const whoWins = (function () {
  const gameContainer = document.getElementById("game-container");
  const gridItem = gameContainer.querySelectorAll(".grid-item");

  let gameArray = ["", "", "", "", "", "", "", "", ""];

  gridItem.forEach((element, index) => {
    element.addEventListener("click", function () {
        gameArray.splice(index, 1, element.innerHTML)
        console.log(gameArray);
    });
  });
})();

export default whoWins;
