import Game1View from './game-1-view';
import Game2View from './game-2-view';
import Game3View from './game-3-view';
import {changeView} from '../util';
import gameModel from './game-model';
import Application from '../application';
import Timer from './timer';

class GameScreen {
  constructor() {
    this.model = gameModel;
  }

  init(state) {
    this.model.reset();
    this.model.state = state;
    this.showQuestion();
  }

  showQuestion() {
    const QuestionsTypes = this.model.QuestionsTypes;
    const question = this.model.currentQuestion;

    let gameView;

    switch (question.type) {
      case QuestionsTypes.TWO_PHOTO:
        gameView = new Game1View(question);
        break;
      case QuestionsTypes.ONE_PHOTO:
        gameView = new Game2View(question);
        break;
      case QuestionsTypes.THREE_PHOTOS:
        gameView = new Game3View(question);
        break;
    }


    changeView(gameView);

    gameView.headerView.setLives(this.model.lives);
    const timer = new Timer(this.model.state.questionTime);
    timer.onTick = () => {
      gameView.setTime(timer.time);
    };

    gameView.headerView.backView.onBack = () => {
      Application.showWelcome();
    };

    gameView.onAnswer = (params) => {
      const currentQuestion = this.model.currentQuestion;
      switch (currentQuestion.type) {
        case QuestionsTypes.TWO_PHOTO:
          currentQuestion.images[0].answer = params.answer1;
          currentQuestion.images[1].answer = params.answer2;
          currentQuestion.answerTime = timer.time;
          break;
        case QuestionsTypes.ONE_PHOTO:
          currentQuestion.image.answer = params.answer;
          currentQuestion.answerTime = timer.time;
          break;
        case QuestionsTypes.THREE_PHOTOS:
          currentQuestion.answer = params.answer;
          currentQuestion.answerTime = timer.time;
          break;
      }

      this.model.setNextQuestion();
      if (this.model.dead || this.model.noQuestions) {
        Application.showStats();
      } else {
        this.showQuestion(this.model.nextQuestion);
      }
    };
  }
}

export default new GameScreen();
