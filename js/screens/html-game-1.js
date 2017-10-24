import getHtmlHeader from "./html-header";
import getHtmlGameStats from "./html-game-stats";

export default (question) => {
  return `<div>
    ${getHtmlHeader()}
    <div class="game">
      <p class="game__task">${question.question}</p>
      <form class="game__content">
        <div class="game__option">
          <img src="${question.images[0].url}" alt="Option 1">
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
          <img src="${question.images[1].url}" alt="Option 2">
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
      ${getHtmlGameStats()}
    </div>
  </div>`;
};
