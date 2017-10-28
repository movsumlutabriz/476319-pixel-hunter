import AbstractView from '../abstract-view';
import {isFastAnswer, isSlowAnswer} from './questions';

export default class Game1View extends AbstractView {
  constructor(questions) {
    super();
    this.questions = questions;
  }

  get template() {
    let html = `<ul class="stats">`;
    this.questions.forEach((question) => {
      switch (question.type) {
        case 1:
          if (question.images[0].answer === null || question.images[1].answer === null) {
            html += `<li class="stats__result stats__result--unknown"></li>`;
          } else if (question.images[0].answer === question.images[0].type && question.images[1].answer === question.images[1].type) {
            if (isFastAnswer(question)) {
              html += `<li class="stats__result stats__result--fast"></li>`;
            } else if (isSlowAnswer(question)) {
              html += `<li class="stats__result stats__result--slow"></li>`;
            } else {
              html += `<li class="stats__result stats__result--correct"></li>`;
            }
          } else {
            html += `<li class="stats__result stats__result--wrong"></li>`;
          }
          break;
        case 2:
          if (question.image.answer === null) {
            html += `<li class="stats__result stats__result--unknown"></li>`;
          } else if (question.image.answer === question.image.type) {
            if (isFastAnswer(question)) {
              html += `<li class="stats__result stats__result--fast"></li>`;
            } else if (isSlowAnswer(question)) {
              html += `<li class="stats__result stats__result--slow"></li>`;
            } else {
              html += `<li class="stats__result stats__result--correct"></li>`;
            }
          } else {
            html += `<li class="stats__result stats__result--wrong"></li>`;
          }
          break;
        case 3:
          if (question.answer === null) {
            html += `<li class="stats__result stats__result--unknown"></li>`;
          } else if (question.answer === question.rightAnswer) {
            if (isFastAnswer(question)) {
              html += `<li class="stats__result stats__result--fast"></li>`;
            } else if (isSlowAnswer(question)) {
              html += `<li class="stats__result stats__result--slow"></li>`;
            } else {
              html += `<li class="stats__result stats__result--correct"></li>`;
            }
          } else {
            html += `<li class="stats__result stats__result--wrong"></li>`;
          }
          break;
      }
    });

    html += `</ul>`;

    return html;
  }

  refresh() {
    this.element.innerHTML = this.template;
  }

  bind() {}
}
