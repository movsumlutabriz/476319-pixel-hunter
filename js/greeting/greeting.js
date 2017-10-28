import GreetingView from './greeting-view';
import {showNextScreen} from '../util';

const view = new GreetingView();
view.onContinueClick = () => {
  showNextScreen();
};

export default () => view;
