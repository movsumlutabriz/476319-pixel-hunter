import AbstractView from '../abstract-view';
import showHeader from '../header/header';

export default class RulesView extends AbstractView {
  get template() {
    return `<div>
      <div class="rules">
        <h1 class="rules__title">Правила</h1>
        <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
          src="img/photo_icon.png" width="16" height="16"> или рисунок <img
          src="img/paint_icon.png" width="16" height="16" alt="">.<br>
          Фотографиями или рисунками могут быть оба изображения.<br>
          На каждую попытку отводится 30 секунд.<br>
          Ошибиться можно не более 3 раз.<br>
          <br>
          Готовы?
        </p>
        <form class="rules__form">
          <input class="rules__input" type="text" placeholder="Ваше Имя">
          <button class="rules__button  continue" type="submit" disabled>Go!</button>
        </form>
      </div>
    </div>`;
  }

  render() {
    const el = super.render();
    el.appendChild(showHeader().element);
    return el;
  }

  bind() {
    const elSubmit = this.element.querySelector(`.rules__button`);

    this.element.querySelector(`.rules__input`).addEventListener(`input`, (e) => {
      elSubmit.disabled = !e.target.value;
    });

    this.element.querySelector(`.rules__form`).addEventListener(`submit`, (e) => {
      e.preventDefault();
      this.onSubmit();
    });
  }

  onSubmit() {}
}
