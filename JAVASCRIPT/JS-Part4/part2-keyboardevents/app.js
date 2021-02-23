// document.addEventListener("keypress", run);
// document.addEventListener("keydown", run);
// document.addEventListener("keyup", run);

// function run(e) {
//   // console.log(e.which);
//   console.log(e.key);
// }

const todoInput = document.querySelector("#filter");
const todoHeader = document.getElementById("tasks-title");

todoInput.addEventListener("keyup", run);
function run(e) {
  todoHeader.textContent = e.target.value;
}
