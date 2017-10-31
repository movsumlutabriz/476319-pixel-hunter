import IntroView from "./intro-view";
import GreetingView from "./greeting-view";
import RulesView from "./rules-view";
import {changeView} from '../util';
import Application from '../application';

class WelcomeScreen {
  init() {
    this.introView = new IntroView();
    this.greetingView = new GreetingView();
    this.rulesView = new RulesView();

    changeView(this.introView);

    this.introView.onAsteriskClick = () => {
      changeView(this.greetingView);
    };

    this.greetingView.onContinueClick = () => {
      changeView(this.rulesView);
    };

    this.rulesView.onSubmit = () => {
      Application.showGame();
    };
  }
}

export default new WelcomeScreen();
