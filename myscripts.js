const SQUARE_CONTAINER_HEIGHT = 960;
const SQUARE_CONTAINER_WIDTH = 960;
let NUMBER_OF_SQUARE = 256;
const inputButton = document.querySelector('#input-button');
inputButton.addEventListener('click',()=>{
    const SQUARE_PER_SIDE = prompt('Enter number of square');
    NUMBER_OF_SQUARE = SQUARE_PER_SIDE*SQUARE_PER_SIDE;
    createSquares(NUMBER_OF_SQUARE,SQUARE_PER_SIDE);
});



const mainContainer = document.querySelector(".main-container");

function createSquare(){
    const squareDiv = document.createElement('div');
    squareDiv.style.height = `${SQUARE_HEIGHT}px`;
    squareDiv.style.width = `${SQUARE_WIDTH}px`;
    squareDiv.className = 'square';
    return squareDiv;
}
function createSquares(NUMBER_OF_SQUARE,SQUARE_PER_SIDE){
    const squareContainer = document.querySelector(".square-container");
    squareContainer.innerHTML = "";
    SQUARE_PER_SIDE = parseInt(SQUARE_PER_SIDE, 10);
    SQUARE_HEIGHT = SQUARE_CONTAINER_WIDTH / (SQUARE_PER_SIDE);
    SQUARE_WIDTH = SQUARE_CONTAINER_WIDTH / (SQUARE_PER_SIDE);

    for (let i = 0; i < SQUARE_PER_SIDE; i++){        
        for (let j = 0; j < SQUARE_PER_SIDE; j++){
            const squareDiv = createSquare();
            squareContainer.appendChild(squareDiv);
        }
        
    }
    mainContainer.appendChild(squareContainer);
    const squares = document.querySelectorAll('.square');
    squares.forEach(square =>{
        square.addEventListener('mouseenter',()=>{
            square.style.background='red';
        })
    });
}
