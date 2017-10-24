import getHtmlHeader from "./html-header";
import getHtmlGameStats from "./html-game-stats";
import dataGame from "../data/game";

export default () => {
  return `
    <div>
      ${getHtmlHeader()}
      <div class="result">
        <h1>Победа!</h1>
        <table class="result__table">
          <tr>
            <td class="result__number">1.</td>
            <td colspan="2">
              ${getHtmlGameStats()}
            </td>
            <td class="result__points">×&nbsp;100</td>
            <td class="result__total">${dataGame.getAnswersScoring()}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Бонус за скорость:</td>
            <td class="result__extra">0&nbsp;<span class="stats__result stats__result--fast"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">0</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">${dataGame.getLives()}&nbsp;<span class="stats__result stats__result--alive"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${dataGame.getLivesScoring()}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Штраф за медлительность:</td>
            <td class="result__extra">0&nbsp;<span class="stats__result stats__result--slow"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">0</td>
          </tr>
          <tr>
            <td colspan="5" class="result__total  result__total--final">${dataGame.getTotalScoring()}</td>
          </tr>
        </table>
      </div>
    </div>`;
};
