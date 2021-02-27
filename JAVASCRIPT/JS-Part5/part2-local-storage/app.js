// localStorage.clear();
// localStorage.setItem("pushup", 50);
// // console.log(typeof localStorage.getItem("pushup
//! ARRAYS
const todos = ["Todo 1", "Todo 2", "todo 3"];

// localStorage.setItem("todos", todos);
localStorage.setItem("todos", JSON.stringify(todos)); //TODO
let value = JSON.parse(localStorage.getItem("todos")); //TODO
console.log(typeof value, value);
