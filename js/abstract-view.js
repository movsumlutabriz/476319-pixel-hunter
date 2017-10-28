export default class AbstractView {
  get template() {
    throw new Error(`Геттер template должен быть переопределен`);
  }

  render() {
    const el = document.createElement(`div`);
    el.innerHTML = this.template;
    return el;
  }

  bind() {
    throw new Error(`Метод bind должен быть переопределен`);
  }

  get element() {
    if (!this._el) {
      this._el = this.render();
      this.bind();
    }
    return this._el;
  }
}
