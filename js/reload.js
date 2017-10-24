import elemGreeting from "./screens/elem-greeting";
import show from "./show";
import dataGame from "./data/game";

export default () => {
  dataGame.reset();
  show(elemGreeting);
};
