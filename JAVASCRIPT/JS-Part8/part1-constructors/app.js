const employees = [];

let addAgain = true;
while (addAgain) {
  let name = prompt('Enter the name of the employee ! [Press "Q" to quit]');
  if (name != null) {
    if (name.toLowerCase() === "q") {
      AppOver();
    } else {
      let age = parseInt(prompt("Enter the Age of the employee !"));
      let salary = parseInt(prompt("Enter the salary of the employee !"));
      Employ(name, age, salary);
      addAgain = confirm("Do you want to add a new employee ? ");
      if (addAgain == false) AppOver();
    }
  } else {
    AppOver();
  }
}

function AppOver() {
  addAgain = false;
  console.log("Goodbye...");
  console.log("Employees End Of The App : ");
  employees.forEach(function (employee) {
    console.log("-----------------------------------------");
    console.log("Employee " + (employees.indexOf(employee) + 1));
    console.log("Name : ", employee.name);
    console.log("Age : ", employee.age);
    console.log("Salary : ", employee.salary);
    console.log("-----------------------------------------");
  });
}

function Employ(name = "tanımsız", age = -1, salary = -1) {
  const Employer = new Employee(name, age, salary);
  employees.push(Employer);
}

function Employee(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
}
