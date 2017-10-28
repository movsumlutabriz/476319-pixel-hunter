import IntroView from './intro-view';
import {showNextScreen} from '../util';

const view = new IntroView();
view.onAsteriskClick = () => {
  showNextScreen();
};

export default () => view;
