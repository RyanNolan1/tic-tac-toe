const displayController = (function () {
  const gameContainer = document.getElementById("game-container");
  function renderGrid(rows, cols) {
    gameContainer.style.setProperty("--grid-rows", rows);
    gameContainer.style.setProperty("--grid-cols", cols);
    for (let i = 0; i < rows * cols; i++) {
      let cell = document.createElement("div");
      cell.innerText = i + 1;
      gameContainer.appendChild(cell).className = "grid-item";
    }
  }
  renderGrid(3, 3);
})();

export default displayController;
