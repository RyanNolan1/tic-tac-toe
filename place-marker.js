import { chosenMarker } from './choose-marker.js';


const placeMarker = (function () {
  const gameOutComeOverlay = document.getElementById("game-outcome-overlay");
  const nextRoundButton = document.getElementById("next-round-button");
  const gridItem = document.querySelectorAll(".grid-item");
  let whichMarker = 0;
  gridItem.forEach((element, index) => {
    element.addEventListener("click", function () {
      if (gridItem[index].innerHTML === "") {
        gridItem[index].innerHTML = chosenMarker[whichMarker];
        whichMarker += 1;
      }
      nextRoundButton.addEventListener("click",function() {
        whichMarker = 0;
        gameOutComeOverlay.style.visibility = "hidden";
        gridItem.forEach(element => {
          element.innerHTML="";
        })
      })
    });
  });
})();

export default placeMarker;
