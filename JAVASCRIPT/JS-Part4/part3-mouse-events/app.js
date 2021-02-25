const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

// title.addEventListener("mousedown", run);
// title.addEventListener("dblclick", run);
// title.addEventListener("click", run);
// title.addEventListener("mouseover", run);
// title.addEventListener("mouseout", run);
// title.addEventListener("mouseup", run);

// cardBody.addEventListener("mouseover", run); //inner HTML problem
// cardBody.addEventListener("mouseout", run); //inner HTML problem

cardBody.addEventListener("mouseenter", run); //NP :D
cardBody.addEventListener("mouseleave", run); //NP :D

function run(e) {
  console.log(e.type);
}
