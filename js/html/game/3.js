import getHtmlHeader from "../header";
import getHtmlGameStats from "./stats";

export default (question) => {
  return `<div>
    ${getHtmlHeader(2)}
    <div class="game">
      <p class="game__task">${question.question}</p>
      <form class="game__content  game__content--triple">
        <div class="game__option" data-type="${question.images[0].type}">
          <img src="${question.images[0].url}" alt="Option 1">
        </div>
        <div class="game__option  game__option--selected" data-type="${question.images[1].type}">
          <img src="${question.images[1].url}" alt="Option 1">
        </div>
        <div class="game__option" data-type="${question.images[2].type}">
          <img src="${question.images[2].url}" alt="Option 1">
        </div>
      </form>
      ${getHtmlGameStats()}
    </div>
  </div>`;
};
