export class UI {
  constructor(nameInput, departmentInput, salaryInput, tbody, updateButton) {
    this.updateButton = updateButton;
    this.nameInput = nameInput;
    this.departmentInput = departmentInput;
    this.salaryInput = salaryInput;
    this.tbody = tbody;
  }

  addEmployee(employee) {
    this.tbody.innerHTML += `
    <tr>
        <td>${employee.name}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>
        <td class = "employee-id">${employee.id}</td>
        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
    </tr>
    `;
  }

  deleteElementFromUI(targetElement) {
    targetElement.remove();
  }

  getIdOfElement(targetElement) {
    const id = targetElement.children[3].textContent;
    return id;
  }

  showInfosInInputs(targetElement) {
    const children = targetElement.children;
    this.nameInput.value = children[0].textContent;
    this.departmentInput.value = children[1].textContent;
    this.salaryInput.value = children[2].textContent;
  }

  toggleUpdateButton() {
    if (this.updateButton.style.display === "none") {
      this.updateButton.style.display = "block";
      return;
    }
    this.updateButton.style.display = "none";
    this.clearInputs();
  }

  clearInputs() {
    this.nameInput.value = "";
    this.departmentInput.value = "";
    this.salaryInput.value = "";
  }

  getInputInfos() {
    const employee = {
      name: this.nameInput.value.trim(),
      department: this.departmentInput.value.trim(),
      salary: this.salaryInput.value.trim(),
    };
    return employee;
  }

  updateEmployeeOnUI(updatedElement, parentElement) {
    parentElement.innerHTML = `
    <tr>
      <td>${updatedElement.name}</td>
      <td>${updatedElement.department}</td>
      <td>${updatedElement.salary}</td>
      <td class = "employee-id">${updatedElement.id}</td>
      <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
      <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
    </tr>
    `;

    this.clearInputs();
    this.toggleUpdateButton();
  }
}
