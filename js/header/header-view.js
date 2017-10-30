import AbstractView from '../abstract-view';
import showBack from '../back/back';
import {getLives} from '../game/questions';

export default class HeaderView extends AbstractView {
  get template() {
    return `
      <header class="header">
        <div class="back"></div>
        <h1 class="game__timer"></h1>
        <div class="game__lives">${this.livesTemplate}</div>
      </header>
    `;
  }

  get livesTemplate() {
    let lives = getLives();
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

  refreshLives() {
    this.element.querySelector(`.game__lives`).innerHTML = this.livesTemplate;
  }

  render() {
    const el = super.render();
    el.querySelector(`.back`).appendChild(showBack().element);
    return el;
  }

  bind() {}
}
