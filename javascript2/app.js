let totalFoodAte = 0;
let totalDistanceTravelled = 0;
const  gameContainer  =  document.getElementById("gameContainer");
const  createGameBoardPixels  = () => {
    for (let  i  =  1; i  <=  1600; ++i) {
        gameContainer.innerHTML  =  `${gameContainer.innerHTML} <div class="gameBoardPixel" id="pixel${i}"></div>`;
    }
};
const  gameBoardPixels  =  document.getElementsByClassName("gameBoardPixel");

let  currentFoodPostion  =  0;
const  createFood  = () => {
    gameBoardPixels[currentFoodPostion].classList.remove("food");

    currentFoodPostion  =  Math.random();
    currentFoodPostion  =  Math.floor(currentFoodPostion  *  1600);
    gameBoardPixels[currentFoodPostion].classList.add("food");
};

const  LEFT_DIR  =  37;
const  UP_DIR  =  38;
const  RIGHT_DIR  =  39;
const  DOWN_DIR  =  40;

let  snakeCurrentDirection  =  RIGHT_DIR;

const  changeDirection  =  newDirectionCode  => {
    if (newDirectionCode  ==  snakeCurrentDirection) return;
    if (newDirectionCode  ==  LEFT_DIR  &&  snakeCurrentDirection  != RIGHT_DIR) {
        snakeCurrentDirection  =  newDirectionCode;
    } else  if (newDirectionCode  ==  UP_DIR  &&  snakeCurrentDirection  !=  DOWN_DIR) {
        snakeCurrentDirection  =  newDirectionCode;
    } else  if (newDirectionCode  ==  RIGHT_DIR  && snakeCurrentDirection  !=  LEFT_DIR) {
        snakeCurrentDirection  =  newDirectionCode;
    } else  if (newDirectionCode  ==  DOWN_DIR  &&  snakeCurrentDirection  !=  UP_DIR) {
        snakeCurrentDirection  =  newDirectionCode;
    }
};

let  currentSnakeHeadPosition  =  799;
let  snakeLength  =  1000; 

const  moveSnake  = () => {
    switch (snakeCurrentDirection) {
        case  LEFT_DIR:
            --currentSnakeHeadPosition;
            const  isSnakeHeadAtLastGameBoardPixelTowardsLeft  = currentSnakeHeadPosition  %  40  ==  39  ||  currentSnakeHeadPosition  <  0;
            if (isSnakeHeadAtLastGameBoardPixelTowardsLeft) {
                currentSnakeHeadPosition  =  currentSnakeHeadPosition  +  40;
            }
            break;

        case  UP_DIR:
            currentSnakeHeadPosition  =  currentSnakeHeadPosition  -  40;
            const  isSnakeHeadAtLastGameBoardPixelTowardsUp  = currentSnakeHeadPosition  <  0;
            if (isSnakeHeadAtLastGameBoardPixelTowardsUp) {
                currentSnakeHeadPosition  =  currentSnakeHeadPosition  +  1600;
            }
            break;

        case  RIGHT_DIR:
            ++currentSnakeHeadPosition;
            const  isSnakeHeadAtLastGameBoardPixelTowardsRight  = currentSnakeHeadPosition  %  40  ==  0;
            if (isSnakeHeadAtLastGameBoardPixelTowardsRight) {
                currentSnakeHeadPosition  =  currentSnakeHeadPosition  -  40;
            }
            break;

        case  DOWN_DIR:
            currentSnakeHeadPosition  =  currentSnakeHeadPosition  +  40;
            const  isSnakeHeadAtLastGameBoardPixelTowardsDown  = currentSnakeHeadPosition  >  1599;
            if (isSnakeHeadAtLastGameBoardPixelTowardsDown) {
                currentSnakeHeadPosition  =  currentSnakeHeadPosition  -  1600;
            }
            break;

        default:
            break;
    }
    let  nextSnakeHeadPixel  = gameBoardPixels[currentSnakeHeadPosition];

    if (nextSnakeHeadPixel.classList.contains("snakeBodyPixel")) {
        clearInterval(moveSnakeInterval);
        if (!alert(`You have ate ${totalFoodAte} food by travelling ${totalDistanceTravelled} blocks.`))
        window.location.reload();
    }

    nextSnakeHeadPixel.classList.add("snakeBodyPixel");

    setTimeout(() => {
        nextSnakeHeadPixel.classList.remove("snakeBodyPixel");
    }, snakeLength);

    totalDistanceTravelled++;
    document.getElementById("blocksTravelled").innerHTML  = totalDistanceTravelled;

    if (currentSnakeHeadPosition  ==  currentFoodPostion) {
        totalFoodAte++;
        document.getElementById("pointsEarned").innerHTML  =  totalFoodAte;
        snakeLength  =  snakeLength  +  100;
        createFood();
    }
};

createGameBoardPixels();

createFood();

var  moveSnakeInterval  =  setInterval(moveSnake, 80);

addEventListener("keydown", e  =>  changeDirection(e.keyCode));

const  leftButton  =  document.getElementById("leftButton");
const  rightButton  =  document.getElementById("rightButton");
const  upButton  =  document.getElementById("upButton");
const  downButton  =  document.getElementById("downButton");

leftButton.onclick  = () =>  changeDirection(LEFT_DIR);
rightButton.onclick  = () =>  changeDirection(RIGHT_DIR);
upButton.onclick  = () =>  changeDirection(UP_DIR);
downButton.onclick  = () =>  changeDirection(DOWN_DIR);


const getapi = () => { 
    setInterval(() => {
    alert("google does not working")
},100)}