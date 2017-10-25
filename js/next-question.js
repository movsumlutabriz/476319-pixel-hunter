import show from "./show";
import getElemGame1 from "./elem/game/1";
import getElemGame2 from "./elem/game/2";
import getElemGame3 from "./elem/game/3";
import getElemStats from "./elem/stats";
import dataGame from "./data/game";

const questions = dataGame.questions;

export default () => {
  if (dataGame.getLives() === 0) {
    show(getElemStats());
  } else if (dataGame.currentQuestionIndex < questions.length) {
    const nextQuestion = questions[dataGame.currentQuestionIndex];
    switch (nextQuestion.type) {
      case 1:
        show(getElemGame1(questions[dataGame.currentQuestionIndex]));
        break;
      case 2:
        show(getElemGame2(questions[dataGame.currentQuestionIndex]));
        break;
      case 3:
        show(getElemGame3(questions[dataGame.currentQuestionIndex]));
        break;
    }
    dataGame.currentQuestionIndex++;
  } else {
    show(getElemStats());
  }
};
