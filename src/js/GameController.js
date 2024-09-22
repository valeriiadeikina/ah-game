import goblinImage from "../img/goblin.png";

export default class GameController {
  constructor() {
    this.prevCellIndex = null;
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      const container = document.querySelector("#game-container");

      const field = document.createElement("div");
      field.classList.add("game-field");
      for (let i = 0; i < 16; i++) {
        const cell = document.createElement("div");
        cell.classList.add("game-cell");
        cell.setAttribute("data-index", i);
        field.appendChild(cell);
      }
      container.appendChild(field);

      const enemy = document.createElement("img");
      enemy.classList.add("img");
      enemy.setAttribute("src", goblinImage);
      const allCellsCollection = document.querySelectorAll(".game-cell");
      setInterval(() => {
        const randomCell = Math.floor(
          Math.random() * allCellsCollection.length
        );
        if (randomCell !== this.prevCellIndex) {
          const targetCell = document.querySelector(
            `[data-index="${randomCell}"]`
          );
          this.prevCellIndex = randomCell;
          targetCell.appendChild(enemy);
        }
      }, 2000);
    });
  }
}
