import theGameStructure from "./gameboard.js";

const displayController = (function () {
  const gameContainer = document.getElementById("game-container");
  function renderGrid(rows, cols) {
    gameContainer.style.setProperty("--grid-rows", rows);
    gameContainer.style.setProperty("--grid-cols", cols);
    for (let i = 0; i < theGameStructure.gameArray.length; i++) {
      let cell = document.createElement("div");
      cell.innerText = theGameStructure.gameArray[i];
      gameContainer.appendChild(cell).className = "grid-item";
    }
    const gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach((element, index) => {
      element.addEventListener("click", function () {
        console.log("I've been clicked "+ index)
        gridItem[index].style.backgroundColor = "red";
      });
    });
  }
  renderGrid(theGameStructure.rows, theGameStructure.columns);
})();

export default displayController;
