import BackView from './back-view';
import {reload} from '../util';

const view = new BackView();
view.onBack = () => {
  reload();
};

export default () => view;
