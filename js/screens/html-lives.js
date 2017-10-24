import dataGame from "../data/game";

export default () => {
  let lives = dataGame.getLives();
  let lostLives = 3 - lives;
  let template = ``;
  for (let i = 1; i <= lostLives; i++) {
    template += `<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`;
  }
  for (let i = 1; i <= lives; i++) {
    template += `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`;
  }
  return template;
};
