import theGameStructure from "./gameboard.js";

const placeMarker = (function () {
    const gridItem = document.querySelectorAll(".grid-item");
    let whichMarker = 0;
    gridItem.forEach((element, index) => {
        element.addEventListener("click", function () {
        const X = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]  
      gridItem[index].innerHTML = X[whichMarker];
      whichMarker += 1;
    });
  });
})();

export default placeMarker;
