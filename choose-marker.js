const chosenMarker = (function () {
  const pickMarker = document.getElementsByName("choose-marker");
  const continueButton = document.getElementById("continue-button");

  continueButton.addEventListener("click", () => {
    pickMarker.forEach((element) => {
      if (element.checked && element.value === "X") {
        console.log(["X", "O", "X", "O", "X", "O", "X", "O", "X"])
        return ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
      } else if (element.checked && element.value === "O") {
        console.log(["O", "X", "O", "X", "O", "X", "O", "X", "O"])
        return ["O", "X", "O", "X", "O", "X", "O", "X", "O"];
      }
    });
  });
})();

export default chosenMarker;
