function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.talk = function () {
  console.log("Hey How Chu Doing ?");
};

function Employee(name, age, salary) {
  Person.call(this, name, age);
  this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

const person1 = new Person("Muhammet", 25);
const emp1 = new Employee("Ali", 15);

console.log(person1);
console.log(emp1);
emp1.talk();
