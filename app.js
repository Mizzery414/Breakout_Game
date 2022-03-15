const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector("#score");
const blockWidth = 100;
const blockHeight = 20;
const ballDiameter = 20;
const boardWidth = 560;
const boardHeight = 300;
let xDirection = -2;
let yDirection = 2;

const userStart = [230, 10];
let currentPosition = userStart;

const ballStart = [270, 40];
let ballCurrentPosition = ballStart;

let timerId;

//create individual block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    this.topLeft = [xAxis, yAxis + blockHeight];
  }
}

/* have to set where blocks begin, can do that with designated height and width set in css and adjust each corner */

// all the blocks
const blocks = [
  new Block(10, 270), //10 is set to xAxis, 270 to yAxis
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
];

//draw all my blocks
function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.appendChild(block);
    console.log(blocks[i].bottomLeft);
  }
}

addBlocks();

//add user
const user = document.createElement("div");
user.classList.add("user");
grid.appendChild(user);
drawUser();

//add ball
const ball = document.createElement("div");
ball.classList.add("ball");
grid.appendChild(ball);
drawBall();

//move user
function moveUser(e) {
  switch (e.key) {
    case "ArrowLeft":
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10;
        console.log(currentPosition[0] > 0);
        drawUser();
      }
      break;
    case "ArrowRight":
      if (currentPosition[0] < boardWidth - blockWidth) {
        currentPosition[0] += 10;
        console.log(currentPosition[0]);
        drawUser();
      }
      break;
  }
}
document.addEventListener("keydown", moveUser);

//draw the user
function drawUser() {
  user.style.left = currentPosition[0] + "px";
  user.style.bottom = currentPosition[1] + "px";
}

//draw the ball
function drawBall() {
  ball.style.left = ballCurrentPosition[0] + "px";
  ball.style.bottom = ballCurrentPosition[1] + "px";
}

//move the ball
function moveBall() {
  ballCurrentPosition[0] += xDirection;
  ballCurrentPosition[1] += yDirection;
  drawBall();
  checkForCollisions();
}

timerId = setInterval(moveBall, 30);

// check for collisions
function checkForCollisions() {
  // check for wall collisions
  if (
    ballCurrentPosition[0] >= boardWidth - ballDiameter ||
    ballCurrentPosition[1] >= boardHeight - ballDiameter ||
    ballCurrentPosition[0] <= 0
  ) {
    changeDirection();
  }

  //check for game over
  if (ballCurrentPosition[1] <= 0) {
    clearInterval(timerId);
    scoreDisplay.innerHTML = "Game Over";
    document.removeEventListener("keydown", moveUser);
  }

  function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
      yDirection = -2;
      return;
    }
    if (xDirection === 2 && yDirection === -2) {
      xDirection = -2;
      return;
    }
    if (xDirection === -2 && yDirection === -2) {
      yDirection = 2;
      return;
    }
    if (xDirection === -2 && yDirection === 2) {
      xDirection = 2;
      return;
    }
  }
}

/*  over all construction of mechanics
    1. grab grid
    2. make function to store block creation in
    3. make a div element
    4. assign block class - including css - to block element
    5. style block to correct position
    6. add (append) new block element to grid element
    */
