import RulesView from './rules-view';
import {showNextScreen} from '../util';

const view = new RulesView();
view.onSubmit = () => {
  showNextScreen();
};

export default () => view;
