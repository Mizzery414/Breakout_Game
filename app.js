const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeight = 20;

//create individual block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
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
console.log(blocks);

//draw all my blocks
function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.appendChild(block);
  }
}

addBlocks();

/*  over all construction of mechanics
    1. grab grid
    2. make function to store block creation in
    3. make a div element
    4. assign block class - including css - to block element
    5. style block to correct position
    6. add (append) new block element to grid element
    */
