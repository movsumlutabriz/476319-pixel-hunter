const elemScreen = document.getElementById(`main`);

export default (elem) => {
  elemScreen.innerHTML = ``;
  elemScreen.appendChild(elem);
};
