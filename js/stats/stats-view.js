import AbstractView from '../abstract-view';
import showGameStats from '../game/game-stats';
import {getAnswersScoring, getLives, getLivesScoring, getFastAnswersCount, getFastAnswersScoring, getSlowAnswersCount, getSlowAnswersScoring, getTotalScoring} from '../game/questions';

export default class StatsView extends AbstractView {
  get template() {
    return `
      <div>
        <div class="header"></div>
        <div class="result">
          <h1>Победа!</h1>
          <table class="result__table">
            <tr>
              <td class="result__number"></td>
              <td colspan="2">
                <div class="stats"></div>
              </td>
              <td class="result__points">×&nbsp;100</td>
              <td class="result__total">${getAnswersScoring()}</td>
            </tr>
            <tr>
              <td></td>
              <td class="result__extra">Бонус за скорость:</td>
              <td class="result__extra">${getFastAnswersCount()}&nbsp;<span class="stats__result stats__result--fast"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${getFastAnswersScoring()}</td>
            </tr>
            <tr>
              <td></td>
              <td class="result__extra">Бонус за жизни:</td>
              <td class="result__extra">${getLives()}&nbsp;<span class="stats__result stats__result--alive"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${getLivesScoring()}</td>
            </tr>
            <tr>
              <td></td>
              <td class="result__extra">Штраф за медлительность:</td>
              <td class="result__extra">${getSlowAnswersCount()}&nbsp;<span class="stats__result stats__result--slow"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${getSlowAnswersScoring()}</td>
            </tr>
            <tr>
              <td colspan="5" class="result__total  result__total--final">${getTotalScoring()}</td>
            </tr>
          </table>
        </div>
      </div>`;
  }

  render() {
    const el = super.render();
    const statsView = showGameStats();
    statsView.refresh();
    el.querySelector(`.stats`).appendChild(statsView.element);

    return el;
  }

  bind() {}
}
