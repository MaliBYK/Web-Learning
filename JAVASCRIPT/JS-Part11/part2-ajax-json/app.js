document.querySelector("#ajax").addEventListener("click", getAllEmployees);

function getAllEmployees() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "employees.json", true);

  xhr.onload = function () {
    let list = document.querySelector("#employees");

    if (this.status === 200) {
      const employees = JSON.parse(this.responseText);
      employees.forEach(employee => {
        addListItem(list, employee.name, employee.department, employee.salary);
      });
    }
  };

  xhr.send();
}

function addListItem(list, name, department, salary) {
  list.innerHTML += `
  <tr>
    <td>${name}</td>
    <td>${department}</td>
    <td>${salary}</td>
  </tr>
  `;
}
