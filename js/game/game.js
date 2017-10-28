import Game1View from './game-1-view';
import Game2View from './game-2-view';
import Game3View from './game-3-view';
import {changeView} from '../util';
import {showNextScreen} from '../util';
import {getNextQuestion, getCurrentQuestion, QuestionsTypes} from './questions';

const onAnswer = (params) => {
  const currentQuestion = getCurrentQuestion();

  switch (currentQuestion.type) {
    case QuestionsTypes.TWO_PHOTO:
      currentQuestion.images[0].answer = params.answer1;
      currentQuestion.images[1].answer = params.answer2;
      currentQuestion.answerTime = params.answerTime;
      break;
    case QuestionsTypes.ONE_PHOTO:
      currentQuestion.image.answer = params.answer;
      currentQuestion.answerTime = params.answerTime;
      break;
    case QuestionsTypes.THREE_PHOTOS:
      currentQuestion.answer = params.answer;
      currentQuestion.answerTime = params.answerTime;
      break;
  }

  const nextQuestion = getNextQuestion();

  if (!nextQuestion) {
    showNextScreen();
    return;
  }

  let gameView;

  switch (nextQuestion.type) {
    case QuestionsTypes.TWO_PHOTO:
      gameView = new Game1View(nextQuestion);
      break;
    case QuestionsTypes.ONE_PHOTO:
      gameView = new Game2View(nextQuestion);
      break;
    case QuestionsTypes.THREE_PHOTOS:
      gameView = new Game3View(nextQuestion);
      break;
  }

  gameView.onAnswer = onAnswer;
  changeView(gameView);
};

export default () => {
  const game1View = new Game1View(getNextQuestion());
  game1View.onAnswer = onAnswer;
  return game1View;
};
