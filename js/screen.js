const elemScreen = document.getElementById(`main`);

export const show = (elem) => {
  elemScreen.innerHTML = ``;
  elemScreen.appendChild(elem);
};
