const tbody = document.querySelector("#employees");
const table = document.querySelector(".table.table-dark");
const addButton = document.querySelector("#add-employee");
const nameInput = document.querySelector("#name");
const departmentInput = document.querySelector("#department");
const salaryInput = document.querySelector("#salary");
const updateButton = document.querySelector("#update");

let updateState = null;

import { Request } from "./requests";
const request = new Request("http://localhost:3000/employees");

import { UI } from "./ui";
const ui = new UI(nameInput, departmentInput, salaryInput, tbody, updateButton);

function addEventListeners() {
  addButton.addEventListener("click", addEmployee);
  document.addEventListener("DOMContentLoaded", loadAllEmployees);
  table.addEventListener("click", deleteOrUpdate);
  updateButton.addEventListener("click", updateEmployee);
}

function deleteOrUpdate(e) {
  if (e.target.id === "delete-employee") {
    deleteEmployee(e.target);
    return;
  }
  if (e.target.id === "update-employee") {
    updateEmployeeController(e);
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

  ui.clearInputs();
}

function deleteEmployee(targetEmployee) {
  const id = targetEmployee.parentElement.parentElement.children[3].textContent;
  request.delete(id);

  ui.deleteElementFromUI(targetEmployee.parentElement.parentElement);
}

function updateEmployeeController(e) {
  const parentElement = e.target.parentElement.parentElement;
  const id = ui.getIdOfElement(parentElement);

  ui.showInfosInInputs(parentElement);
  ui.toggleUpdateButton();

  if (updateState === null) {
    updateState = {
      id: id,
      parentElement: parentElement,
    };
  } else updateState = null;
}

function updateEmployee() {
  if (updateState) {
    const data = {
      name: nameInput.value,
      department: departmentInput.value,
      salary: salaryInput.value,
    };
    request.put(data, updateState.id).then(updatedElement => {
      ui.updateEmployeeOnUI(updatedElement, updateState.parentElement);
    });
  }
}

addEventListeners();
