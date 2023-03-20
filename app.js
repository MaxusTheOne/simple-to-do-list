"use strict";

window.addEventListener("load", initApp);
const newToDo = document.querySelector("#input-new-to-do");
const list = document.querySelector("#to-do-list");
function initApp() {
  document.querySelector("#btn-add-item").addEventListener("click", addToDo);
}
function addToDo() {
  if (newToDo.value == "") {
    warning();
  } else {
    let cursedAF = /*HTML*/ `
        <li>
            <span>${newToDo.value}</span>
            <button class = "delete">Delete</button>
            <button class = "update">Update</button>
        </li>
    `;
    list.insertAdjacentHTML("beforeend", cursedAF);
    list.querySelector("li:last-child button.delete").addEventListener("click", removeToDo);
    list.querySelector("li:last-child button.update").addEventListener("click", updateToDo);
    newToDo.value = "";
  }
}
function removeToDo() {
  const selectedElement = this;
  this.parentNode.remove();
}
function updateToDo() {
  const parent = this.parentNode;
  if (newToDo.value != "") {
    console.log(this.parentNode);
    const newText = document.createElement("span");
    newText.textContent = newToDo.value;
    parent.replaceChild(newText, parent.childNodes[1]);
  } else warning();
}
function warning() {
  newToDo.classList.add("warning");
  newToDo.placeholder = "Don't do that";
  setTimeout(removeWarning, 2000);
}
function removeWarning() {
  console.log("removeWarning");
  if (newToDo.placeholder == "Don't do that") {
    newToDo.placeholder = "Enter a new item";
    console.log("Warning removed");
  }
  newToDo.classList.remove("warning");
}
