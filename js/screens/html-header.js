import getLives from "./html-lives";
import getHtmlBack from "./html-back";

export default () => `
  <header class="header">
    ${getHtmlBack()}
    <h1 class="game__timer">100</h1>
    <div class="game__lives">${getLives()}</div>
  </header>
`;
