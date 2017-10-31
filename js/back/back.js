import BackView from './back-view';
import Application from '../application';

const view = new BackView();
view.onBack = () => {
  Application.showWelcome();
};

export default () => view;
