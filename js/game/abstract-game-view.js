import AbstractView from '../abstract-view';
import HeaderView from './header-view';
import GameStatsView from './game-stats-view';

export default class AbstractGameView extends AbstractView {
  constructor(question) {
    super();
    this.question = question;
    this.headerView = new HeaderView();
    this.gameStatsView = new GameStatsView();
  }

  render() {
    const el = super.render();

    el.querySelector(`.header`).appendChild(this.headerView.element);

    el.querySelector(`.stats`).appendChild(this.gameStatsView.element);

    return el;
  }

  bind() {}

  setTime(time) {
    this.headerView.timeElement.innerHTML = time;
  }

  onAnswer() {}
}
