function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

let number = 5;

number = square(number);
console.log(number);

number = cube(number);
console.log(number);

(function (name = "User") {
  console.log("Hello", name);
})();

let langs = ["Python", "Java", "Javascript"];
langs.forEach(function (language) {
  console.log(language);
});

langs2 = langs.map(function (language) {
  return language;
});
console.log(typeof langs2, langs2);

for (let i = 0; i <= langs2.length - 1; i++) {
  console.log(langs2[i]);
}
