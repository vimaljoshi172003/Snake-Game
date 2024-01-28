var blockSize = 25;
var rows = 20;
var col = 20;
var board;
var context;
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;
var velocityX = 0
var velocityY = 0
var snakeBody = [];
var foodX;
var foodY;
var gameover = false 
window.onload = function (){
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = col * blockSize;
    context = board.getContext("2d");
    placeFood()
    document.addEventListener("keyup",chageDirection)
    setInterval(update,1000/10);
}
function update(){
    if(gameover){
        return;
    }
    context.fillStyle = "#202020";
    context.fillRect(0 , 0, board.width, board.height);
    context.fillStyle = "yellow";
    context.fillRect(foodX , foodY, blockSize, blockSize);
    if(snakeX == foodX && snakeY == foodY){
        snakeBody.push([foodX,foodY])
        placeFood();
    }
    for (let i = snakeBody.length-1; i >0; i--) {
        snakeBody[i]= snakeBody[i-1];
        
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX,snakeY]
    }
    context.fillStyle = "blue"
    snakeX += velocityX * blockSize
    snakeY += velocityY * blockSize
    context.fillRect(snakeX , snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0],snakeBody[i][1],blockSize,blockSize)
        
    }
    if(snakeX < 0 || snakeX > col*blockSize || snakeY < 0 || snakeY > rows*blockSize){
        gameover = true
        alert("Game Over Now")
    }
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameover = true 
            alert("Game Over Now") 
        }
        
    }

}
function chageDirection(e){
    if (e.code == "ArrowUp" && velocityY != 1){
        velocityX = 0;
        velocityY = -1
        
    }
    else if (e.code == "ArrowDown" && velocityY != -1){
        velocityX = 0;
        velocityY = 1
        
    }
    else if (e.code == "ArrowLeft" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
        
    }
    else if (e.code == "ArrowRight" && velocityX != -1){
        velocityX = 1;
        velocityY = 0;
        
    }
}

function placeFood(){
    foodX = Math.floor(Math.random()* col) * blockSize
    foodY = Math.floor(Math.random()* col) * blockSize

}