const cardBody = document.querySelectorAll(".card-body")[1];
const todos = document.querySelector(".list-group");

cardBody.addEventListener("click", clicked);

function clicked(e) {
  if (e.target.className === "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
  }
  console.log(e.target.parentElement.children);
  if (e.target.id === "clear-todos") {
    Array.from(todos.children).forEach(function (el) {
      console.log(el.tagName);
      if (el.tagName == "LI") {
        console.log(el);
        el.remove();
      }
    });
  }
}
