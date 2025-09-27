import {mainTeg} from "./components/mainPage.js";
import {resultTeg} from "./components/resultPage.js";

const url = new URL(window.location.href);
const params = url.searchParams;
window.history.replaceState({}, '', `${url.pathname}`);
function pageLoad(page) {
  document.querySelector('.MainPage').innerHTML = page == 0 ? mainTeg : "";
  document.querySelector('.ResultPage').innerHTML = page == 1 ? resultTeg : "";
}
pageLoad(0);

let content = {morning: "", working: ""};
document.getElementById('morning').onchange = (e) => {
  content.morning = e.target.value;
}
document.getElementById('working').onchange = (e) => {
  content.working = e.target.value;
}

document.getElementsByClassName('Post')[0].addEventListener("click", () => {
  pageLoad(1);
  
  params.set('page', 'result');
  window.history.replaceState({}, '', `${url.pathname}?${params}`);
});
