import goblinImage from "../img/goblin.png";
import GamePanel from "./GamePanel.js";

export default class GameController {
  constructor() {
    this.prevCellIndex = null;
    this.gamePanel = null;
    this.interval = null;
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      const container = document.querySelector("#game-container");

      this.gamePanel = new GamePanel();
      container.appendChild(this.gamePanel.drawPanel());
      const field = document.createElement("div");
      field.classList.add("game-field");
      for (let i = 0; i < 16; i++) {
        const cell = document.createElement("div");
        cell.classList.add("game-cell");
        cell.setAttribute("data-index", i);
        field.appendChild(cell);
        cell.addEventListener("mouseenter", (event) => this.onCellEnter(event));
        cell.addEventListener("click", (event) => this.onCellClick(event));
      }
      container.appendChild(field);

      const enemy = document.createElement("img");
      enemy.classList.add("img");
      enemy.setAttribute("src", goblinImage);
      const allCellsCollection = document.querySelectorAll(".game-cell");
      this.interval = setInterval(() => {
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
      }, 1000);
    });
  }

  onCellEnter(e) {
    if (e.target.children.length) {
      e.target.classList.add("custom-cursor");
    }
  }

  onCellClick(e) {
    if (e.currentTarget.children.length) {
      this.gamePanel.points += 1;
      const removedEnemy = document.querySelector(".img");
      removedEnemy.remove();
      this.gamePanel.updatePanel();
    } else {
      this.gamePanel.mistakes += 1;
      this.gamePanel.updatePanel();
    }
    this.gameOver();
  }

  gameOver() {
    if (this.gamePanel.mistakes >= 5) {
      const field = document.querySelector(".game-field");
      field.remove();
      const gameOverMessage = document.createElement("h1");
      gameOverMessage.textContent = "Игра окончена!";
      gameOverMessage.classList.add("game-over");
      const container = document.querySelector("#game-container");
      container.appendChild(gameOverMessage);
      clearInterval(this.interval);
    }
  }
}
