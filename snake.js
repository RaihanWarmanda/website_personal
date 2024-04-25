const playBoard = document.querySelector("play-board")

let foodX, foodY;
let snakeX = 5, snakeY = 10;
let snakeBody = [];
let velocityX = 0, velocityY = 0;

const ChangeFoodPosition = () =>{
// Pasing a random 0 - 30 value as food  position
foodX = Math.floor(Math.random () * 30) + 1;
foodX = Math.floor(Math.random () * 30) + 1;
}

const changeDirection = () => {
    // Changing velocity value based on key press
    if(e.key === "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.key === "ArrowLeft") {
        velocityX = 0;
        velocityY = 1;
    }else if (e.key === "ArrowRight") {
        velocityX = 0;
        velocityY = 1;
    }
}
const initGame = () => {
    let htmlMarkup = '<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>' ;

// Checking if the snake hit the food
if(snakeX === foodX && snakeY === foodY ) {
    ChangeFoodPosition();
    snakeBody.push([foodX, foodY]); // pushing food position to snake body array
    console.log(snakeBody)
    
}

    // Upddating the snake's head position based on the current velocity
    snakeX += velocityX;
    snakeY += velocityY;

    for (let 0; < snakeBody.length; i++) {
       htmlMarkup += '<div class ="head" style="grid-area; ${snakeBody[i][1]} / $(snakeX}"></div>';
    }

    htmlMarkup += '<div class="head" style="grid-area: ${foodY} / ${foodX}"></div>' ;
    playBoard.innerHTML = htmlMarkup;
}

ChangeFoodPosition();
setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);