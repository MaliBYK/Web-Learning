const tbody = document.querySelector("#employees");
export class UI {
  addEmployee(employee) {
    tbody.innerHTML += `
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
}
