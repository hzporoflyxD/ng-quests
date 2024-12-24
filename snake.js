const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = {};
let score = 0;
let direction = "right";
let speed = 0.22; // Базовая скорость 0.2х (Easy)
let gameOver = false;
let currentLevel = "easy"; // Начальный уровень 

// Загрузка рекорда и общего количества фруктов из localStorage
let highScore = localStorage.getItem("highScore") | 0;
let totalFruitsStorage = localStorage.getItem("totalFruits") | 0;
totalFruits = parseInt(totalFruitsStorage); // Преобразование в число

// Функция для генерации случайного положения еды
function generateFood() {
  food = {
    x: Math.floor(Math.random() * (canvas.width / gridSize)),
    y: Math.floor(Math.random() * (canvas.height / gridSize))
  };
}

// Функция для рисования змейки
function drawSnake() {
  ctx.fillStyle = "green";
  snake.forEach((segment, index) => {
    ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
  });
}

// Функция для рисования еды
function drawFood() {
  ctx.fillStyle = "orange";
  ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

// Функция для обновления игры
function update() {
  if (gameOver) return;

  // Движение змейки
  const head = { x: snake[0].x, y: snake[0].y };
  switch (direction) {
    case "up": head.y--; break;
    case "down": head.y++; break;
    case "left": head.x--; break;
    case "right": head.x++; break;
  }

  // Телепортация через стену
  if (head.x < 0) head.x = canvas.width / gridSize - 1;
  if (head.x >= canvas.width / gridSize) head.x = 0;
  if (head.y < 0) head.y = canvas.height / gridSize - 1;
  if (head.y >= canvas.height / gridSize) head.y = 0;

  // Проверка на столкновение с самой собой (с Hard и выше)
  if (currentLevel === "пройдено" || currentLevel === "crazy" || currentLevel === "hard" ) {
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        gameOver = true;
        restartButton.classList.remove('hidden'); // Показать кнопку
        return;
      }
    }
  }


  restartButton.addEventListener('click', restartGame);


  function restartGame() {
    restartButton.classList.add('hidden'); // Скрыть кнопку после перезапуска
  }
  // Добавление головы змейки
  snake.unshift(head);

  // Проверка на съедание еды
  if (head.x === food.x && head.y === food.y) {
    score++;
    totalFruits++;
    generateFood();
  } else {
    snake.pop(); // Удаление хвоста, если еда не съедена
  }

  // Проверка на повышение уровня
  if (currentLevel === "easy" && score >= 8) {
    currentLevel = "normal";
    speed = 0.34;
    console.log("Переход на уровень Normal");
  } else if (currentLevel === "normal" && score >= 16) {
    currentLevel = "hard";
    speed = 0.48;
    console.log("Переход на уровень Hard");
  } else if (currentLevel === "hard" && score >= 28) {
    currentLevel = "crazy";
    speed = 0.6;
    console.log("Переход на уровень Crazy");
  } else if (currentLevel === "crazy" && score >= 40) {
    currentLevel = "пройдено";
    speed = 0.7;
    console.log("Переход на уровень max");
  }

  

  // Очистка canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Рисование бордера
  ctx.strokeStyle = "white";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  // Рисование змейки и еды
  drawSnake();
  drawFood();

  // Отображение информации сверху поля
  ctx.fillStyle = "white";
  ctx.font = "bold 20px Arial";
  ctx.fillText(score, 10, 20);
  ctx.fillText(currentLevel, 10, 40);

 
  // Задержка для анимации
  setTimeout(update, 1000 / (speed * 60));
} 
// Обработка нажатий клавиш
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp": 
      if (direction !== "down") direction = "up"; 
      break;
    case "ArrowDown": 
      if (direction !== "up") direction = "down"; 
      break;
    case "ArrowLeft": 
      if (direction !== "right") direction = "left"; 
      break;
    case "ArrowRight": 
      if (direction !== "left") direction = "right"; 
      break;
  }
});


// Изменение размеров canvas
canvas.width = 1500; // Ширина поля
canvas.height = 800; // Высота поля

// Запуск игры
generateFood();
update();




document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.querySelector('.overlay-before-game');
  const closeButton = document.getElementById('play-button');
  // показать оверлей сразу после загрузки страницы
  overlay.style.display = 'flex';

  // закрыть оверлей
  closeButton.addEventListener('click', function() {
      overlay.style.display = 'none';
  });
});










setTimeout(() => {
  document.getElementById("daleeButton").style.display = "block";
}, 100000); 


