const addBtn = document.getElementById("add");
const dellBtn = document.getElementById("delete");
const clearBtn = document.getElementById("clear");

const addKey = document.querySelector("#addkey");
const addValue = document.querySelector("#addvalue");
const deleteKey = document.querySelector("#deletekey");

window.addEventListener("click", clicked);

function clicked(e) {
  if (e.target.id == "add") {
    const key = addKey.value;
    const value = addValue.value;
    sessionStorage.setItem(key, value);

    // console.log(key);
  } else if (e.target.id == "delete") {
    const key = deleteKey.value;
    sessionStorage.removeItem(key);
  } else if (e.target.id == "clear") {
    sessionStorage.clear();
  }
}
