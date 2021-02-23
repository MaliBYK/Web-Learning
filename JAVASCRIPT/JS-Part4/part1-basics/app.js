const todoInput = document.querySelector("#filter");

// todoInput.addEventListener("focus", function (e) {
//   console.log(e);

//   e.target.style.color = "red";
//   e.target.placeholder = "Sa Ben Mali";
//   console.log(e.target);

// });

const todoForm = document.querySelector("#todo-form");

todoForm.addEventListener("submit", submited);

function submited(e) {
  console.log(e);

  e.preventDefault();
}
