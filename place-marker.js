const placeMarker =  (function () {
const gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach((element, index) => {
      element.addEventListener("click", function () {
        console.log("I've been clicked "+ index)
        gridItem[index].style.backgroundColor = "red";
      });
    });
})();

export default placeMarker;