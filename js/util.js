const elMain = document.getElementById(`main`);

export const changeView = (view) => {
  elMain.innerHTML = ``;
  elMain.appendChild(view.element);
};
