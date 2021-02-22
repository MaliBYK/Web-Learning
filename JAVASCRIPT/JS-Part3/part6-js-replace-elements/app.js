//!REPLACE

const todoList = document.querySelectorAll(".card-body")[1];
let oldElement = todoList.children[1];

const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.appendChild(document.createTextNode("Yeni Todolar"));

todoList.replaceChild(newElement, oldElement);
console.log(newElement);
