const person = {
  name: "Muhammet Ali",
  age: 25,
  salary: 5000,
};

const langs = ["Python", "C#", "Javascript"];

const name = "Muhammet Ali";

// for (let prop in person) {
//   console.log(person[prop]);
// }

// for (let langIndex in langs) {
//   console.log(langs[langIndex]);
// }

//!ERROR HERE
// for (let property of person) {
//   console.log(property);
// }

for (let lang of langs) {
  console.log(typeof lang, lang);
}
