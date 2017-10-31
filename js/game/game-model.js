import {state, getLives, reset, setNextQuestion, getCurrentQuestion, QuestionsTypes, getAnswersScoring, getLivesScoring, getFastAnswersCount, getFastAnswersScoring, getSlowAnswersCount, getSlowAnswersScoring, getTotalScoring, AnswersTime} from './questions';

class GameModel {
  get dead() {
    return getLives() === 0;
  }
  get noQuestions() {
    return !this.currentQuestion;
  }
  get QuestionsTypes() {
    return QuestionsTypes;
  }
  get AnswersTime() {
    return AnswersTime;
  }
  get currentQuestion() {
    return getCurrentQuestion();
  }
  get answersScoring() {
    return getAnswersScoring();
  }
  get fastAnswersCount() {
    return getFastAnswersCount();
  }
  get fastAnswersScoring() {
    return getFastAnswersScoring();
  }
  get lives() {
    return getLives();
  }
  get livesScoring() {
    return getLivesScoring();
  }
  get slowAnswersCount() {
    return getSlowAnswersCount();
  }
  get slowAnswersScoring() {
    return getSlowAnswersScoring();
  }
  get totalScoring() {
    return getTotalScoring();
  }
  get state() {
    return state;
  }
  set state(newState) {
    state.questionNumber = newState.questionNumber;
    state.lives = newState.lives;
    state.questionTime = newState.questionTime;
  }
  setNextQuestion() {
    setNextQuestion();
  }
  reset() {
    reset();
  }
}

export default new GameModel();
