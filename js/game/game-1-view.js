import AbstractGameView from './abstract-game-view';

export default class Game1View extends AbstractGameView {
  get template() {
    return `<div>
      <div class="header"></div>
      <div class="game">
        <p class="game__task">${this.question.question}</p>
        <form class="game__content">
          <div class="game__option">
            <img src="${this.question.images[0].url}" alt="Option 1">
            <label class="game__answer game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer game__answer--paint">
              <input name="question1" type="radio" value="paint">
              <span>Рисунок</span>
            </label>
          </div>
          <div class="game__option">
            <img src="${this.question.images[1].url}" alt="Option 2">
            <label class="game__answer  game__answer--photo">
              <input name="question2" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--paint">
              <input name="question2" type="radio" value="paint">
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
      img.style.maxWidth = `468px`;
      img.style.maxHeight = `458px`;
    });

    return el;
  }

  bind() {
    const form = this.element.querySelector(`form.game__content`);
    form.addEventListener(`change`, () => {
      if (form.question1.value && form.question2.value) {
        this.question.images[0].answer = form.question1.value;
        this.question.images[1].answer = form.question2.value;
        this.onAnswer({
          answer1: form.question1.value,
          answer2: form.question2.value,
          answerTime: this.timer.passedTime
        });
      }
    });
  }
}
