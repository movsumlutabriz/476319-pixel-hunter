import AbstractView from '../abstract-view';

export default class TimerView extends AbstractView {
  constructor(timer) {
    super();
    this.timer = timer;
  }

  get template() {
    return ``;
  }

  bind() {
    this.timer.onTick = () => this.renderTime(this.timer.remainingTime);
  }

  renderTime(time) {
    this.element.innerHTML = time;
  }
}
