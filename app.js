const grid = document.querySelector(".grid");

const block = document.createElement("div");
block.classList.add("block");
block.style.left = "100px";
block.style.bottom = "50px";
grid.appendChild(block);

/*  1. grab grid
    2. make a div element
    3. assign block class - including css - to block element
    4. add (append) new block element to grid element
    */
