const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
  const div1 = document.createElement("div");
  div1.textContent = [i + 1];
  div1.style.border = "2px solid green";
  container.style.gridTemplateColumns = "repeat(16, 1fr)";
  container.style.gridTemplateRows = "repeat(16, 1fr)";
  div1.classList.add("box");
  container.appendChild(div1);
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
