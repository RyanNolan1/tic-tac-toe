let chosenMarker;

const pickMarker = (function () {
  const chooseMarker = document.getElementsByName("choose-marker");
  const continueButton = document.getElementById("continue-button");
  const gameOverLay = document.getElementById("game-start-overlay");

  continueButton.addEventListener("click", () => {
    gameOverLay.style.display = 'none';
    chooseMarker.forEach((element) => {
      if (element.checked && element.value === "X") {
        chosenMarker = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
      } else if (element.checked && element.value === "O") {
        chosenMarker = ["O", "X", "O", "X", "O", "X", "O", "X", "O"];
      }
    });
    return chosenMarker;
  });

})();

export { chosenMarker };
