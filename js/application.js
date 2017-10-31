import welcomeScreen from './welcome/welcome-screen';
import gameScreen from './game/game-screen';
import statsScreen from './stats/stats-screen';
import {initialGame} from './game/questions';

const loadState = (stateStr) => {
  try {
    return JSON.parse(stateStr);
  } catch (e) {
    return initialGame;
  }
};

const ControllerId = {
  WELCOME: ``,
  GAME: `game`,
  STATS: `stats`
};

export default class Application {
  static init() {
    Application.routes = {
      [ControllerId.WELCOME]: welcomeScreen,
      [ControllerId.GAME]: gameScreen,
      [ControllerId.STATS]: statsScreen
    };

    window.onhashchange = () => {
      Application.onHashChange();
    };
    Application.onHashChange();
  }

  static onHashChange() {
    const hashValue = location.hash.replace(`#`, ``);
    const [id, stateStr] = hashValue.split(`?`);
    const controller = Application.routes[id];
    if (controller) {
      controller.init(loadState(stateStr));
    }
  }

  static showWelcome() {
    welcomeScreen.init();
  }

  static showGame() {
    gameScreen.init(initialGame);
  }

  static showStats() {
    statsScreen.init();
  }
}
