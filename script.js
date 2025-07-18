const container = document.querySelector(".container");
const changeGridBtn = document.querySelector("#change-grid-btn");

changeGridBtn.addEventListener("click", changeGridSize);

function createGrid(gridLength = 16) {
  const gridSize = gridLength * gridLength;

  // Container is a square.
  let containerLength = container.offsetWidth;
  let squareLength = containerLength/ gridLength;

  for (let i = 0; i < gridSize; i++) {
    let squareDiv = document.createElement("div");
    squareDiv.classList.toggle("square");
  
    squareDiv.style.height = `${squareLength}px`;
    squareDiv.style.width = `${squareLength}px`;

    squareDiv.addEventListener("mouseenter", (event) => {
      event.target.classList.add("hover");
    });
    container.appendChild(squareDiv);
  }
}

function changeGridSize() {
  let newGridLength = 0;

  do {
    newGridLength = prompt("How many squares per side do you want for the new grid? The maximum " +
                           "is 100.");

    // Don't change grid if no input/canceled.
    if (!newGridLength) {
      return;
    }
  } while (!Number.isInteger(+newGridLength) || +newGridLength > 100);

  // Remove current grid.
  container.innerHTML = "";

  // Generate new grid.
  createGrid(newGridLength);
}

createGrid();