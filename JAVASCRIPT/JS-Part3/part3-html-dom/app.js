let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardRow = document.querySelector(".card.row");

value = todoList.childNodes;
value = todoList.children[0];

value = cardRow;
value = cardRow.children;
value = cardRow.children[1].children;
value = cardRow.children[1].children[0].parentElement;
// value = value.tagName;
// value = cardRow.children[0].textContent = "Değişti";

value = todoList;
value = todoList.childElementCount;
value = todoList.children.length;

value = todo;
value = todo.previousElementSibling.textContent;
value = todo.nextElementSibling.nextElementSibling.style.color = "red";
console.log(value);
