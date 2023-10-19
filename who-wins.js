const whoWins = (function () {
  const gameContainer = document.getElementById("game-container");
  const gridItem = gameContainer.querySelectorAll(".grid-item");

  let gameArray = [];

  gridItem.forEach((element, index) => {
    element.addEventListener("click", function () {
      gridItem.forEach((cell) => {
        if (cell.innerHTML !== "") {
            console.log(cell.innerHTML);
        }
    });
    });
  });
})();

export default whoWins;
