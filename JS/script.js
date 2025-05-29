let ename = document.getElementById('ename');
let salary = document.getElementById('salary');
let post = document.getElementById('post');
let manager = document.getElementById('manager');
let form = document.getElementById('form');
let empTable = document.querySelector('#empTable tbody');
let employees = JSON.parse(localStorage.getItem('employees')) || [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let emp = {
        id: Date.now(),
        ename: ename.value.trim(),
        salary: salary.value.trim(),
        post: post.value,
        manager: manager.value.trim()
    };

    employees.push(emp);
    localStorage.setItem('employees', JSON.stringify(employees));
    alert("Employee added successfully!");
    form.reset();
});
