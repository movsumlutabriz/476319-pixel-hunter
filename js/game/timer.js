export default class Timer {
  constructor(time = 0, maxTime = 20) {
    this.maxTime = maxTime;
    this.time = time;

    this._interval = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.time++;
    if (this.time >= this.maxTime) {
      this.onClearInterval();
    }
    this.onTick();
  }

  onClearInterval() {
    clearInterval(this._interval);
  }

  onTick() {}
}
