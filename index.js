const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gridSize = 20;
const tileCount = canvas.width / gridSize;

let snake = [{ x: 10, y: 10 }];
let direction = { x: 0, y: 0 };
let food = { x: 5, y: 5 };
let score = 0;
let gameStarted = false;

function gameLoop() {
  update();
  draw();
}

function update() {
  if (!gameStarted) return; // wait until first key press

  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

  // Game over conditions
  if (
    head.x < 0 || head.x >= tileCount ||
    head.y < 0 || head.y >= tileCount ||
    snake.some(segment => segment.x === head.x && segment.y === head.y)
  ) {
    alert("Game Over! Final Score: " + score);
    resetGame();
    return;
  }

  snake.unshift(head);

  // Eat food
  if (head.x === food.x && head.y === food.y) {
    score++;
    food = {
      x: Math.floor(Math.random() * tileCount),
      y: Math.floor(Math.random() * tileCount)
    };
  } else {
    snake.pop();
  }
}

function draw() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Snake
  ctx.fillStyle = "lime";
  snake.forEach(segment => {
    ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 1, gridSize - 1);
  });

  // Food
  ctx.fillStyle = "red";
  ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 1, gridSize - 1);

  // Score
  ctx.fillStyle = "white";
  ctx.font = "16px Arial";
  ctx.fillText("Score: " + score, 10, canvas.height - 10);
}

function resetGame() {
  snake = [{ x: 10, y: 10 }];
  direction = { x: 0, y: 0 };
  score = 0;
  gameStarted = false;
  food = {
    x: Math.floor(Math.random() * tileCount),
    y: Math.floor(Math.random() * tileCount)
  };
}

document.addEventListener("keydown", e => {
  switch (e.key) {
    case "ArrowUp":
      if (direction.y === 1) break;
      direction = { x: 0, y: -1 };
      gameStarted = true;
      break;
    case "ArrowDown":
      if (direction.y === -1) break;
      direction = { x: 0, y: 1 };
      gameStarted = true;
      break;
    case "ArrowLeft":
      if (direction.x === 1) break;
      direction = { x: -1, y: 0 };
      gameStarted = true;
      break;
    case "ArrowRight":
      if (direction.x === -1) break;
      direction = { x: 1, y: 0 };
      gameStarted = true;
      break;
  }
});

setInterval(gameLoop, 100);
