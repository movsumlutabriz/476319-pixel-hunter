import {elemFromTemplate} from "../elem";
import {show as showScreen} from "../screen";
import screenGreeting from "./greeting";

const html = `<div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</div>`;


const elem = elemFromTemplate(html);

elem.querySelector(`.intro__asterisk`).addEventListener(`click`, () => showScreen(screenGreeting));

export default elem;
