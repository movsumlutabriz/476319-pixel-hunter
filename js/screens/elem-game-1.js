import getElemFromTemplate from "../elem";
import reload from "../reload";
import getHtmlGame1 from "./html-game-1";
import showNextQuestion from "../next-question";

const getElemGame1 = (question) => {
  const html = getHtmlGame1(question);
  const elem = getElemFromTemplate(html);
  const form = elem.querySelector(`form.game__content`);

  elem.querySelectorAll(`.game__option > img`).forEach((img) => {
    img.style.maxWidth = `468px`;
    img.style.maxHeight = `458px`;
  });

  elem.querySelector(`.header__back`).addEventListener(`click`, () => reload());

  form.addEventListener(`change`, () => {
    if (form.question1.value && form.question2.value) {
      question.images[0].answer = form.question1.value;
      question.images[1].answer = form.question2.value;
      showNextQuestion();
    }
  });

  return elem;
};

export default getElemGame1;
