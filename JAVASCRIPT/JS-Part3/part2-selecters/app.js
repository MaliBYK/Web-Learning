// console.log(document.querySelector("#todo-form"));
// lists = document.querySelectorAll("li");
// console.log(lists);
// lists.forEach(function (liitem) {
//   console.log(liitem);
// });

let element = document.querySelector("#clear-todos");

// console.log(element);
// console.log(element.textContent);
// console.log(element.className);
// element.classList.forEach(function (el) {
//   console.log(el);
// });
// console.log(element.innerHTML);

// element.href = "https://www.google.com.tr";
// element.target = "_blank";
// element.className = "btn btn-primary";
// element.textContent = "Silin";
// element.innerHTML = `<span style ='color :white'>Silinmek </span>`;
// console.log(element);

element = document.querySelectorAll(".list-group-item:nth-child(2)");

element.forEach(function (el) {
  el.style.fontWeight = "bolder";
});
