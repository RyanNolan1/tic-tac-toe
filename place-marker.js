import chosenMarker from "./choose-marker.js";

const placeMarker = (function () {
  const gridItem = document.querySelectorAll(".grid-item");
  let whichMarker = 0;
  gridItem.forEach((element, index) => {
    element.addEventListener("click", function () {
      if (gridItem[index].innerHTML === "") {
        gridItem[index].innerHTML = chosenMarker[whichMarker];
        whichMarker += 1;
      }
    });
  });
})();

export default placeMarker;
