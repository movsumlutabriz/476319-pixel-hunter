const screenMain = document.querySelector(`main.central`);

const screens = Array.from(document.getElementsByTagName(`template`)).map((template) => {
  const div = document.createElement(`div`);
  div.appendChild(template.content);
  return div;
});

let currentScreenIndex = null;

const showScreen = (screenIndex) => {
  if (!screens[screenIndex]) {
    return;
  }

  screenMain.innerHTML = ``;
  screenMain.appendChild(screens[screenIndex]);

  currentScreenIndex = screenIndex;
};

const screenForward = () => {
  showScreen(currentScreenIndex + 1);
};

const screenBack = () => {
  showScreen(currentScreenIndex - 1);
};

showScreen(0);

document.addEventListener(`keydown`, (e) => {
  const keyRight = 39;
  const keyLeft = 37;

  if (e.altKey) {
    switch (e.keyCode) {
      case keyRight:
        screenForward();
        break;
      case keyLeft:
        screenBack();
        break;
    }
  }
});
