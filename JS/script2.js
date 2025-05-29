let empTable = document.querySelector('#empTable tbody');
let employees = JSON.parse(localStorage.getItem('employees')) || [];

function renderTable() {
    empTable.innerHTML = '';

    employees.forEach((emp, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${emp.ename}</td>
            <td>${emp.salary}</td>
            <td>${emp.post}</td>
            <td>${emp.manager}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteEmployee(${emp.id})">Delete</button>
            </td>
        `;
        empTable.appendChild(row);
    });
}

function deleteEmployee(id) {
    employees = employees.filter(emp => emp.id !== id);
    localStorage.setItem('employees', JSON.stringify(employees));
    renderTable();
}

renderTable();
