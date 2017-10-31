import AbstractView from '../abstract-view';
import BackView from './back-view';

export default class HeaderView extends AbstractView {
  constructor() {
    super();
    this.backView = new BackView();
  }

  get template() {
    return `
      <header class="header">
        <div class="back"></div>
        <h1 class="game__timer"></h1>
        <div class="game__lives">${this.livesTemplate}</div>
      </header>
    `;
  }

  getLivesTemplate(lives) {
    let lostLives = 3 - lives;
    let template = ``;
    for (let i = 1; i <= lostLives; i++) {
      template += `<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`;
    }
    for (let i = 1; i <= lives; i++) {
      template += `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`;
    }
    return template;
  }

  render() {
    const el = super.render();
    el.querySelector(`.back`).appendChild(this.backView.element);
    this.timeElement = el.querySelector(`.game__timer`);
    this.livesElement = el.querySelector(`.game__lives`);
    return el;
  }

  setLives(lives) {
    this.livesElement.innerHTML = this.getLivesTemplate(lives);
  }

  bind() {}
}
