import getElemFromTemplate from "../elem";
import reload from "../reload";
import getHtmlHeader from "../html/header";
import showNextQuestion from "../next-question";

const html = `<div>
  ${getHtmlHeader(3)}
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

const elem = getElemFromTemplate(html);
const elemSubmit = elem.querySelector(`.rules__button`);

elem.querySelector(`.header__back`).addEventListener(`click`, () => reload());

elem.querySelector(`.rules__input`).addEventListener(`input`, (e) => {
  elemSubmit.disabled = !e.target.value;
});

elem.querySelector(`.rules__form`).addEventListener(`submit`, (e) => {
  e.preventDefault();
  showNextQuestion();
});

export default elem;
