import getHtmlHeader from "../header";
import getHtmlGameStats from "./stats";

export default (question) => {
  return `<div>
    ${getHtmlHeader()}
    <div class="game">
      <p class="game__task">${question.question}</p>
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img src="${question.image.url}" alt="Option 1">
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
      ${getHtmlGameStats()}
    </div>
  </div>`;
};
