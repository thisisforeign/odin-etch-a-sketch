const board = document.querySelector("#container");
const slider = document.getElementById("myRange");
const button = document.querySelector("button");
const size = document.querySelector("#size");
const resetBtn = document.querySelector("#reset");
/*const rainbowBtn = document.querySelector("#rgb");
const eraserBtn = document.querySelector("#eraser");*/

function createGrid(length) {
  let area = length * length;
  board.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${length}, 1fr)`;

  for (let i = 0; i < area; i++) {
    let div1 = document.createElement("div");
    div1.classList.add("box");
    board.appendChild(div1);
    div1.style.border = "1px solid green";
    div1.addEventListener("mouseover", black);
  }
}

function black() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) =>
    box.addEventListener("mouseover", () => {
      box.style.background = "black";
    })
  );
  console.log("black");
}

/*function rainbow() {
  let red = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  console.log(`${red}, ${blue}, ${green}`);
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) =>
    box.addEventListener("mouseover", () => {
      box.style.background = `rgb(${red}, ${blue}, ${green})`;
    })
  );
  console.log("rainbow");
}

function eraser() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) =>
    box.addEventListener("mouseover", () => {
      box.style.background = "background-color: white;";
    })
  );
  console.log("erased");
}*/

function replaceGrid() {
  let grid = board.querySelectorAll("div");
  grid.forEach((grids) => grids.remove());
  size.innerHTML = `${slider.value} x ${slider.value}`;
  createGrid(slider.value);
}

function startUp() {
  createGrid(8);
  size.innerHTML = `${slider.value} x ${slider.value}`;
  console.log(size.innerHTML);
}
startUp();

slider.addEventListener("mouseup", replaceGrid);
slider.addEventListener("mousemove", () => {
  size.innerHTML = `${slider.value} x ${slider.value}`;
});
resetBtn.addEventListener("click", replaceGrid);
//eraserBtn.addEventListener("click", eraser);
