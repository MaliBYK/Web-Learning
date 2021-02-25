const filter = document.getElementById("filter");

document.addEventListener("DOMContentLoaded", loaded);

function loaded(e) {
  // filter.addEventListener("focus", run);
  // filter.addEventListener("blur", run);
  filter.addEventListener("paste", run);
}

function run(e) {
  console.log(e.type);
  console.log("Kopyalama Yasak!!");
}
