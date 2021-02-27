const addTodoBtn = document.querySelector("#addTodoBtn");
const clearTodosBtn = document.querySelector("#clear-todos");

const addTodoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");

addTodoBtn.addEventListener("click", AddTodo);
todoList.addEventListener("click", DeleteTodo);
clearTodosBtn.addEventListener("click", ClearTodos);

function AddTodo(e) {
  const input = addTodoInput.value;
  const todoElement = document.createElement("li");

  todoList.innerHTML += `<li class="list-group-item d-flex justify-content-between"> ${input}
  <a href="#" class="delete-item">
    <i class="fa fa-remove"></i>
  </a>
</li>`;
  addTodoInput.value = "";

  e.preventDefault();
}

function DeleteTodo(e) {
  if (e.target.className === "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
  }
}

function ClearTodos(e) {
  Array.from(todoList.children).forEach(function (el) {
    if (el.tagName === "LI") {
      el.remove();
    }
  });
}
