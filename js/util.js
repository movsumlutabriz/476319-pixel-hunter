const elMain = document.getElementById(`main`);

export const changeView = (view) => {
  elMain.innerHTML = ``;
  elMain.appendChild(view.element);
};

import showIntro from "./intro/intro";
import showGreeting from "./greeting/greeting";
import showRules from "./rules/rules";
import showGame from "./game/game";
import showStats from "./stats/stats";

const screensOrder = [showIntro, showGreeting, showRules, showGame, showStats];
let currentScreenIndex = null;

export const showNextScreen = () => {
  if (currentScreenIndex === null) {
    currentScreenIndex = 0;
  } else {
    currentScreenIndex++;
  }
  changeView(screensOrder[currentScreenIndex]());
};

// import elemGreeting from "./elem/greeting";
import {reset} from "./game/questions";

export const reload = () => {
  reset();
  currentScreenIndex = 1;
  showNextScreen();
};
