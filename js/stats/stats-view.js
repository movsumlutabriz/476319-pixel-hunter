import AbstractView from '../abstract-view';
import GameStatsView from '../game/game-stats-view';
import BackView from '../game/back-view';

export default class StatsView extends AbstractView {
  constructor(gameModel) {
    super();
    this.gameModel = gameModel;
    this.backView = new BackView();
  }

  get template() {
    return `
      <div>
        <div class="header"></div>
        <div class="result">
          <h1>${this.gameModel.dead ? `Поражение` : `Победа!`}</h1>
          <table class="result__table">
            <tr>
              <td class="result__number"></td>
              <td colspan="2">
                <div class="stats"></div>
              </td>
              <td class="result__points">×&nbsp;100</td>
              <td class="result__total">${this.gameModel.answersScoring}</td>
            </tr>
            <tr>
              <td></td>
              <td class="result__extra">Бонус за скорость:</td>
              <td class="result__extra">${this.gameModel.fastAnswersCount}&nbsp;<span class="stats__result stats__result--fast"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${this.gameModel.fastAnswersScoring}</td>
            </tr>
            <tr>
              <td></td>
              <td class="result__extra">Бонус за жизни:</td>
              <td class="result__extra">${this.gameModel.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${this.gameModel.livesScoring}</td>
            </tr>
            <tr>
              <td></td>
              <td class="result__extra">Штраф за медлительность:</td>
              <td class="result__extra">${this.gameModel.slowAnswersCount}&nbsp;<span class="stats__result stats__result--slow"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${this.gameModel.slowAnswersScoring}</td>
            </tr>
            <tr>
              <td colspan="5" class="result__total  result__total--final">${this.gameModel.totalScoring}</td>
            </tr>
          </table>
        </div>
      </div>`;
  }

  render() {
    const el = super.render();

    const statsView = new GameStatsView();
    el.querySelector(`.stats`).appendChild(statsView.element);

    el.querySelector(`.header`).appendChild(this.backView.element);

    return el;
  }

  bind() {}
}
