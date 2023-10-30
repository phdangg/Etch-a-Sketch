const NUMBER_OF_SQUARE = 256;

const mainContainer = document.querySelector(".main-container");
const squareContainer = document.querySelector(".square-container");


for (let i = 0;i<NUMBER_OF_SQUARE;i++){
    const squareDiv = document.createElement('div');
    squareDiv.style.height = "50px";
    squareDiv.style.width = "50px";
    squareDiv.style.border = "1px solid black";
    squareContainer.appendChild(squareDiv);
}

mainContainer.appendChild(squareContainer);