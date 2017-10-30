import TimerView from './timer-view';
import {AnswersTime} from '../game/questions';

class Timer {
  constructor(time) {
    this.startTime = time;
    this.remainingTime = time;
    this.passedTime = 0;

    this._interval = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.remainingTime--;
    this.passedTime = this.startTime - this.remainingTime;
    if (this.remainingTime <= 0) {
      this.onClearInterval();
      this.onEnd();
    }
    this.onTick();
  }

  onClearInterval() {
    clearInterval(this._interval);
  }

  onTick() {}

  onEnd() {}
}

export default () => {
  const view = new TimerView(new Timer(AnswersTime.START));
  return view;
};
