class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showInfos() {
    console.log("İsim : " + this.name + "Yaş : " + this.age);
  }
}

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  showInfos() {
    console.log("Employee");
  }

  raiseSalary(amount) {
    salary += amount;
    console.log("Salary successfully raised New Salary : " + salary);
  }
}

const person1 = new Person("Muhammet", 15);
const emp1 = new Employee("Ali", 25, 25000);

console.log(person1);
console.log(emp1);
emp1.showInfos();
