import _ from "lodash";
import createSearchNavBar from "./components/SearchNav";
import createMainNavBar from "./components/MainNav";
// function component() {
//   const element = document.createElement("div");

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(["Hello", "webpack"], " ");

//   return element;
// }

document.body.appendChild(createSearchNavBar());
document.body.appendChild(createMainNavBar());
