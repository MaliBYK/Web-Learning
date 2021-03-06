const filter = document.querySelector("#filter");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const todoForm = document.querySelector("#todo-form");
const clearButton = document.querySelector("#clear-todos");

addEvents();

function addEvents() {
  todoList.addEventListener("click", deleteTodo);
  todoForm.addEventListener("submit", addTodo);
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
  filter.addEventListener("keyup", filterTodos);
  clearButton.addEventListener("click", clearTodos);
}

function clearTodos(e) {
  if (confirm("Are You Sure To Remove All Todos ? ")) {
    Array.from(todoList.children).forEach(function (listItem) {
      if (listItem.tagName === "LI") listItem.remove();
    });
    localStorage.removeItem("todos");
  }
}

function filterTodos(e) {
  const text = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");
  listItems.forEach(function (listItem) {
    if (listItem.textContent.toLowerCase().indexOf(text) === -1) {
      listItem.setAttribute("style", "display:none !important");
    } else {
      listItem.setAttribute("style", "display:block;");
    }
  });
}

function loadAllTodosToUI() {
  todos = JSON.parse(localStorage.getItem("todos"));
  if (todos != []) {
    todos.forEach(function (todo) {
      addTodoToUI(todo);
    });
  }
}

function deleteTodo(e) {
  if (e.target.className == "fa fa-remove") {
    e.target.parentElement.parentElement.remove();

    todoContent = e.target.parentElement.parentElement.textContent;
    deleteTodoFromStorage(todoContent);
  }
}
function deleteTodoFromStorage(todoName) {
  let todos = getTodosFromStorage();
  console.log(todos);
  todos.forEach(function (todo, index) {
    if (todo === todoName) todos.splice(index, 1);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(e) {
  const newTodo = todoInput.value.trim();
  todoInput.value = "";
  if (newTodo != "") {
    addTodoToStorage(newTodo);
    addTodoToUI(newTodo);
    alertInput("success", "Todo Succesfully Added!");
  } else {
    console.log(typeof localStorage.getItem("todos"));
    alertInput("danger", "Please Enter a Todo!!");
  }
  e.preventDefault();
}

function addTodoToStorage(newTodo) {
  let todos = getTodosFromStorage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
function getTodosFromStorage() {
  let todos;
  if (localStorage.getItem("todos") == null) {
    console.log("yok");
    todos = [];
  } else {
    console.log("var");

    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

function alertInput(alertType, text) {
  const alertElement = document.createElement("div");
  alertElement.className = `alert alert-${alertType}`;
  alertElement.id = "alert-input";
  alertElement.textContent = text;
  firstCardBody.appendChild(alertElement);

  setTimeout(function () {
    alertElement.remove();
  }, 1000);
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
  // console.log(listItem);
}
