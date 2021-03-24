//! setTimeout(function () {
//   console.log("Naber");
// }, 2000);

i = 0;
let value = setInterval(function () {
  i++;
  console.log(i);
}, 1000);

document.querySelector(".btn").addEventListener("click", function () {
  clearInterval(value);
});
