const filter = document.querySelector("#filter");
const firstCardBody = document.querySelector(".card-body")[0];
const secondCardBody = document.querySelector(".card-body")[1];
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const todoForm = document.querySelector("#todo-form");

addEvents();

function addEvents() {
  todoForm.addEventListener("submit", addTodo);
}

function addTodo(e) {
  const newTodo = todoInput.value.trim();
  todoInput.value = "";
  if (newTodo != "") addTodoToUI(newTodo);

  e.preventDefault();
}
function addTodoToUI(newTodo) {
  const listItem = document.createElement("li");
  listItem.className = "list-group-item d-flex justify-content-between";

  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";

  const icon = document.createElement("i");
  icon.className = "fa fa-remove";
  link.appendChild(icon);

  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);

  todoList.appendChild(listItem);
}
