import { calcTileType } from "./utils.js";

export default class GamePlay {
  constructor() {
    this.boardSize = 8;
    this.container = null;
    this.boardEl = null;
    this.cells = [];
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error("container is not HTMLElement");
    }
    this.container = container;
  }

  drawUi() {
    this.checkBinding();

    this.container.innerHTML = `
      <div class="controls">
        <button data-id="action-restart" class="btn">New Game</button>
        <button data-id="action-save" class="btn">Save Game</button>
        <button data-id="action-load" class="btn">Load Game</button>
      </div>
      <div class="board-container">
        <div data-id="board" class="board"></div>
      </div>
    `;

    this.newGameEl = this.container.querySelector("[data-id=action-restart]");
    this.saveGameEl = this.container.querySelector("[data-id=action-save]");
    this.loadGameEl = this.container.querySelector("[data-id=action-load]");

    this.newGameEl.addEventListener("click", (event) =>
      this.onNewGameClick(event)
    );
    this.saveGameEl.addEventListener("click", (event) =>
      this.onSaveGameClick(event)
    );
    this.loadGameEl.addEventListener("click", (event) =>
      this.onLoadGameClick(event)
    );

    this.boardEl = this.container.querySelector("[data-id=board]");

    this.boardEl.classList.add(theme);
    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement("div");
      cellEl.classList.add(
        "cell",
        "map-tile",
        `map-tile-${calcTileType(i, this.boardSize)}`
      );
      cellEl.addEventListener("mouseenter", (event) => this.onCellEnter(event));
      cellEl.addEventListener("mouseleave", (event) => this.onCellLeave(event));
      cellEl.addEventListener("click", (event) => this.onCellClick(event));
      this.boardEl.appendChild(cellEl);
    }

    this.cells = Array.from(this.boardEl.children);
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error("GamePlay not bind to DOM");
    }
  }
}
