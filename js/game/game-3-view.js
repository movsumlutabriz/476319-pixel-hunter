import AbstractGameView from './abstract-game-view';

export default class Game3View extends AbstractGameView {
  get template() {
    return `<div>
      <div class="header"></div>
      <div class="game">
        <p class="game__task">${this.question.question}</p>
        <form class="game__content  game__content--triple">
          <div class="game__option" data-type="${this.question.images[0].type}">
            <img src="${this.question.images[0].url}" alt="Option 1">
          </div>
          <div class="game__option  game__option--selected" data-type="${this.question.images[1].type}">
            <img src="${this.question.images[1].url}" alt="Option 1">
          </div>
          <div class="game__option" data-type="${this.question.images[2].type}">
            <img src="${this.question.images[2].url}" alt="Option 1">
          </div>
        </form>
        <div class="stats"></div>
      </div>
    </div>`;
  }

  render() {
    const el = super.render();

    el.querySelectorAll(`.game__option > img`).forEach((img) => {
      img.style.maxWidth = `304px`;
      img.style.maxHeight = `455px`;
    });

    return el;
  }

  bind() {
    this.element.addEventListener(`mouseup`, (e) => {
      if (e.target.classList.contains(`game__option`)) {
        this.onAnswer({
          answer: e.target.dataset.type
        });
      }
    });
  }
}
