export const elemFromTemplate = (template) => {
  const elem = document.createElement(`div`);
  elem.innerHTML = template;
  return elem.firstElementChild;
};
