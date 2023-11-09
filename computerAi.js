

const gameContainer = document.getElementById("game-container");
const gridItem = gameContainer.querySelectorAll(".grid-item");

const computerAi = (function () {

    let gameArray = [];

    gridItem.forEach((element) => {
        element.addEventListener("click", function () {
            gridItem.forEach((element, index) => {
                gameArray.splice(index, 1, element.innerHTML);   
            })
            console.log(gameArray);
        })
    });


})();

export default computerAi;
