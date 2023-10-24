import theGameStructure from './theGameStructure.js';

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
  }
  renderGrid(theGameStructure.rows, theGameStructure.columns);
})();

export default displayController;
