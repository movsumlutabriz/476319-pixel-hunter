import dataGame from "../../data/game";

export default () => {
  let html = `<div class="stats"><ul class="stats">`;
  dataGame.questions.forEach((question) => {
    switch (question.type) {
      case 1:
        if (question.images[0].answer === null || question.images[1].answer === null) {
          html += `<li class="stats__result stats__result--unknown"></li>`;
        } else if (question.images[0].answer === question.images[0].type && question.images[1].answer === question.images[1].type) {
          html += `<li class="stats__result stats__result--correct"></li>`;
        } else {
          html += `<li class="stats__result stats__result--wrong"></li>`;
        }
        break;
      case 2:
        if (question.image.answer === null) {
          html += `<li class="stats__result stats__result--unknown"></li>`;
        } else if (question.image.answer === question.image.type) {
          html += `<li class="stats__result stats__result--correct"></li>`;
        } else {
          html += `<li class="stats__result stats__result--wrong"></li>`;
        }
        break;
      case 3:
        if (question.answer === null) {
          html += `<li class="stats__result stats__result--unknown"></li>`;
        } else if (question.answer === question.rightAnswer) {
          html += `<li class="stats__result stats__result--correct"></li>`;
        } else {
          html += `<li class="stats__result stats__result--wrong"></li>`;
        }
        break;
    }
  });

  html += `</ul></div>`;

  return html;
};
