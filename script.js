const container = document.querySelector(".container");

function createGrid(gridLength = 16) {
  const gridSize = gridLength * gridLength;

  // Container is a square.
  let containerLength = container.offsetWidth;
  let squareLength = Math.floor((containerLength - 32)/ gridLength);

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

createGrid();