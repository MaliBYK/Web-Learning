function Employee(name, age) {
  this.name = name;
  this.age = age;
}

Employee.prototype.showInfos = function () {
  console.log("Name : ", this.name);
  console.log("Age : ", this.age);
};

const emp1 = new Employee("Muhammet", 45);
const emp2 = new Employee("Ali", 15);

console.log(emp1);
console.log(emp2);

emp1.showInfos();
