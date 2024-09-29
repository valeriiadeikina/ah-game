export default class GamePanel {
  constructor() {
    this.points = 0;
    this.mistakes = 0;
    this.pointsContainer = null;
    this.mistakesContainer = null;
  }

  drawPanel() {
    const panel = document.createElement("div");
    panel.classList.add("game-panel");
    this.pointsContainer = document.createElement("div");
    this.pointsContainer.innerText = `Очки: ${this.points}`;
    this.mistakesContainer = document.createElement("div");
    this.mistakesContainer.innerText = `Промахи: ${this.mistakes}`;
    panel.appendChild(this.pointsContainer);
    panel.appendChild(this.mistakesContainer);

    return panel;
  }

  updatePanel() {
    this.pointsContainer.innerText = `Очки: ${this.points}`;
    this.mistakesContainer.innerText = `Промахи: ${this.mistakes}`;
  }
}
