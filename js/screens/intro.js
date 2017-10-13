import getElemFromTemplate from "../elem";
import show from "../show";
import screenGreeting from "./greeting";

const html = `<div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</div>`;


const elem = getElemFromTemplate(html);

elem.querySelector(`.intro__asterisk`).addEventListener(`click`, () => show(screenGreeting));

export default elem;
