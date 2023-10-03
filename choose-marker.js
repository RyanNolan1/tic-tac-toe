const chosenMarker = (function () {
  const pickMarker = document.getElementsByName("choose-marker");
  const continueButton = document.getElementById("continue-button");

  continueButton.addEventListener("click", () => {
    pickMarker.forEach((element) => {
      if (element.checked && element.value === "X") {
        return ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
      } else if (element.checked && element.value === "O") {
        return ["O", "X", "O", "X", "O", "X", "O", "X", "O"];
      }
    });
  });
})();

export default chosenMarker;
