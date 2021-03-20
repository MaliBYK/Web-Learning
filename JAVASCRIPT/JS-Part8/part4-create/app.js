function Employee(name, age) {
  this.name = name;
  this.age = age;
}
Employee.prototype.test1 = function () {
  console.log("Test 1");
};

function Person() {
  this.name = "ali";
}

Person.prototype = Object.create(Employee.prototype);
Person.prototype.test2 = function () {
  console.log("Test 2");
};
const person1 = new Person();
console.log(person1);
