const student = {
  name: "Muhammet Ali",
  langs: ["English", "Turkish"],
  department: "Computer Science",
  age: 15,

  adress: {
    city: "Kahramanmaraş",
    country: "Turkey",
    street: "Selçuklu",
  },

  study: function () {
    console.log("I am studying....!");
  },
};

let value;

value = student;
value = student.name;
value = student.age;

value = student;
value.study();

value.name = "Ahmet";

console.log(student);
console.log(value);
