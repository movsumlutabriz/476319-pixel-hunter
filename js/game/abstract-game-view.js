import AbstractView from '../abstract-view';
import showHeader from '../header/header';
import showGameStats from './game-stats';
import showTimer from '../timer/timer';

export default class AbstractGameView extends AbstractView {
  constructor(question) {
    super();
    this.question = question;
  }

  render() {
    const el = super.render();

    const headerView = showHeader();
    headerView.refreshLives();
    el.querySelector(`.header`).appendChild(headerView.element);

    const timerView = showTimer();
    this.timer = timerView.timer;
    headerView.element.querySelector(`.game__timer`).appendChild(timerView.element);

    const statsView = showGameStats();
    statsView.refresh();
    el.querySelector(`.stats`).appendChild(statsView.element);

    return el;
  }

  onAnswer() {}
}
