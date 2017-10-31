import {changeView} from '../util';
import StatsView from './stats-view';
import GameModel from '../game/game-model';
import Application from '../application';

class StatsScreen {
  init() {
    const view = new StatsView(GameModel);
    changeView(view);

    view.backView.onBack = () => {
      Application.showWelcome();
    };
  }
}

export default new StatsScreen();
