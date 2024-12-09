


function Snakeg(){

    let canvas = document.getElementById("snakeBoard");
let context = canvas.getContext("2d");
canvas.style.background = "#ff8";

const cellSize = 20;
let segments = [{ x: canvas.width / 2, y: canvas.height / 2 }];
let foodX, foodY;
let direction = { x: 0, y: 0 };
let score = 0;
let gameInterval;
const foodImage = new Image();
foodImage.src = "image/apple.webp";





function drawSnake() {
    context.fillStyle = "green";
    segments.forEach(segment => {
        context.fillRect( segment.x, segment.y, cellSize, cellSize);
    });
}

function randomFood() {
    let food;
    do {
        food = {
            x: Math.floor(Math.random() * (canvas.width / cellSize)) * cellSize,
            y: Math.floor(Math.random() * (canvas.height / cellSize)) * cellSize,
        };
    } while (segments.some(segment => segment.x === food.x && segment.y === food.y));
    return food;
}

function newFood() {
    const food = randomFood();
    foodX = food.x;
    foodY = food.y;
}

function updateCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBoard();
    drawSnake();
    context.drawImage(foodImage, foodX, foodY, cellSize, cellSize);
}

function drawBoard() {
    context.strokeStyle = "lightgray";
    for (let i = 0; i <= canvas.width; i += cellSize) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, canvas.height);
        context.stroke();
    }
    for (let i = 0; i <= canvas.height; i += cellSize) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(canvas.width, i);
        context.stroke();
    }
}

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowUp":
            if (direction.y === 0) direction = { x: 0, y: -cellSize };
            break;
        case "ArrowLeft":
            if (direction.x === 0) direction = { x: -cellSize, y: 0 };
            break;
        case "ArrowRight":
            if (direction.x === 0) direction = { x: cellSize, y: 0 };
            break;
        case "ArrowDown":
            if (direction.y === 0) direction = { x: 0, y: cellSize };
            break;
    }
});

function moveSnake() {
    let head = { x: segments[0].x + direction.x, y: segments[0].y + direction.y };

    
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        clearInterval(gameInterval);
        alert("Game Over! Your score: " + score);
        return;
    }

    // Check self-collision
    for (let i = 1; i < segments.length; i++) {
        if (head.x === segments[i].x && head.y === segments[i].y) {
            clearInterval(gameInterval);
            alert("Game Over! Your score: " + score);
            return;
        }
    }

    
    segments.unshift(head);

    
    if (head.x === foodX && head.y === foodY) {
        score++;
        newFood();
    } else {
        segments.pop(); 
    }

    updateCanvas();
}


gameInterval = setInterval(moveSnake, 100); 

newFood();
updateCanvas();
    
    
    return(
        <div className="App">
        <h1>Snake game</h1>
        <div id="canva">
            <div class="gamePad">
               <div class="screen">
            <canvas id="snakeBoard" width="400" height="400"></canvas></div>
        
            
            </div>
        </div>
        </div>
        
    )

};


export default Snakeg