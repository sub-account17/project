import {mainTeg} from "./components/mainPage.js";

document.querySelector('.MainPage').innerHTML = mainTeg;

let content = {morning: "", working: ""};
document.getElementById('morning').onchange = (e) => {
  content.morning = e.target.value;
}
document.getElementById('working').onchange = (e) => {
  content.working = e.target.value;
}

