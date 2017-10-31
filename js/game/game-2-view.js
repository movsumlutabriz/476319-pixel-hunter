import AbstractGameView from './abstract-game-view';

export default class Game2View extends AbstractGameView {

  get template() {
    return `<div>
      <div class="header"></div>
      <div class="game">
        <p class="game__task">${this.question.question}</p>
        <form class="game__content  game__content--wide">
          <div class="game__option">
            <img src="${this.question.image.url}" alt="Option 1">
            <label class="game__answer  game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--wide  game__answer--paint">
              <input name="question1" type="radio" value="paint">
              <span>Рисунок</span>
            </label>
          </div>
        </form>
        <div class="stats"></div>
      </div>
    </div>`;
  }

  render() {
    const el = super.render();

    el.querySelectorAll(`.game__option > img`).forEach((img) => {
      img.style.maxWidth = `705px`;
      img.style.maxHeight = `455px`;
    });

    return el;
  }

  bind() {
    this.element.addEventListener(`change`, () => {
      const form = this.element.querySelector(`form.game__content`);
      this.onAnswer({
        answer: form.question1.value
      });
    });
  }
}
