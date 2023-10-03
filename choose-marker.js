const chooseMarker = (function () {
  const chosenMarker = document.getElementsByName("choose-marker");
  const continueButton = document.getElementById("continue-button");

  continueButton.addEventListener('click', () =>  {
    chosenMarker.forEach((element) => {
        if (element.checked) {
            console.log(element.value);
        }
        });
  });
})();

export default chooseMarker;

