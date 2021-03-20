class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  showInfos() {
    console.log(`İsim : ${this.name} Yaş : ${this.age} Maaş : ${this.salary}`);
  }
}

Employee.prototype.test = function () {
  console.log("test");
};

const emp1 = new Employee("Muhammet Ali", 15, 20000);
console.log(emp1);
emp1.test();
