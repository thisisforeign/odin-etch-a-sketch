const container = document.querySelector("#container");
const slider = document.getElementById("myRange");

function createGrid(length) {
  let area = length * length;
  for (let i = 0; i < area; i++) {
    const div1 = document.createElement("div");
    div1.classList.add("box");
    container.appendChild(div1);
    div1.style.border = "1px solid green";
    container.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${length}, 1fr)`;
  }
  let gridPixels = container.querySelectorAll("div");
  gridPixels.forEach((gridPixel) =>
    gridPixel.addEventListener("mouseover", highlighted)
  );
}

function highlighted() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) =>
    box.addEventListener("mouseover", () => {
      box.style.cssText = "background-color: black;";
      console.log("colored");
    })
  );
}
highlighted();

function replaceGrid() {
  let grid = container.querySelectorAll("div");
  grid.forEach((grids) => grids.remove());
  createGrid(slider.value);
  console.log(slider.value);
}

createGrid(4);

slider.addEventListener("mouseup", replaceGrid);
