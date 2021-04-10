import { Request } from "./requests";
const request = new Request("http://localhost:3000/employees");

import { UI } from "./ui";
const ui = new UI();

const table = document.querySelector(".table.table-dark");
const addButton = document.querySelector("#add-employee");
const nameInput = document.querySelector("#name");
const departmentInput = document.querySelector("#department");
const salaryInput = document.querySelector("#salary");

function addEventListeners() {
  addButton.addEventListener("click", addEmployee);
  document.addEventListener("DOMContentLoaded", loadAllEmployees);
  table.addEventListener("click", deleteOrUpdate);
}

function deleteOrUpdate(e) {
  if (e.target.id === "delete-employee") {
    deleteEmployee(e.target);
    return;
  }
  if (e.target.id === "update-employee") {
    //Update Employee
  }
}

function loadAllEmployees() {
  request.get().then(employees => {
    employees.forEach(employee => {
      ui.addEmployee(employee);
    });
  });
}

function addEmployee() {
  console.log("Form submitted");
  request
    .post({
      name: nameInput.value,
      department: departmentInput.value,
      salary: salaryInput.value,
    })
    .then(employee => ui.addEmployee(employee));
}

function deleteEmployee(targetEmployee) {
  const id = targetEmployee.parentElement.parentElement.children[3].textContent;
  request.delete(id);

  ui.deleteElementFromUI(targetEmployee.parentElement.parentElement);
}

addEventListeners();
