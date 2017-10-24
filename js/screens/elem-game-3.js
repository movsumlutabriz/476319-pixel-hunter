import getElemFromTemplate from "../elem";
import reload from "../reload";
import showNextQuestion from "../next-question";
import getHtmlGame3 from "./html-game-3";

const getElemGame2 = (question) => {
  const html = getHtmlGame3(question);
  const elem = getElemFromTemplate(html);
  elem.querySelectorAll(`.game__option > img`).forEach((img) => {
    img.style.maxWidth = `304px`;
    img.style.maxHeight = `455px`;
  });

  elem.querySelector(`.header__back`).addEventListener(`click`, () => reload());

  elem.addEventListener(`click`, (e) => {
    if (e.target.classList.contains(`game__option`)) {
      question.answer = e.target.dataset.type;
      showNextQuestion();
    }
  });

  return elem;
};

export default getElemGame2;
