import getElemFromTemplate from "../elem";
import reload from "../reload";
import showNextQuestion from "../next-question";
import getHtmlGame2 from "./html-game-2";

const getElemGame2 = (question) => {
  const html = getHtmlGame2(question);
  const elem = getElemFromTemplate(html);
  const form = elem.querySelector(`form.game__content`);

  elem.querySelectorAll(`.game__option > img`).forEach((img) => {
    img.style.maxWidth = `705px`;
    img.style.maxHeight = `455px`;
  });

  elem.querySelector(`.header__back`).addEventListener(`click`, () => reload());

  elem.addEventListener(`change`, () => {
    question.image.answer = form.question1.value;
    showNextQuestion();
  });

  return elem;
};

export default getElemGame2;
