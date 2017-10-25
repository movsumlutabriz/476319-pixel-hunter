import getElemFromTemplate from "../elem";
import reload from "../reload";
import getHtmlStats from "../html/stats";

export default () => {
  const elem = getElemFromTemplate(getHtmlStats());
  elem.querySelector(`.header__back`).addEventListener(`click`, () => reload());
  return elem;
};
