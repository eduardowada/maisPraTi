/*
18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.
*/
const prompt = require('prompt-sync')();

function readEmployeeData (employee) {
    employee = {
        name: '',
        position: '',
        salary: ''
    };

    employee.name = prompt("Enter the employee's name: ");
    while (employee.name.trim() === '') {
        console.log("Invalid name. Please, enter a valid name.");
        employee.name = prompt("Enter the employee's name: ");
    }

    employee.position = prompt("Enter the employee's position: ");
    while (employee.position.trim() === '') {
        console.log("Invalid position. Please, enter a valid position.");
        employee.position = prompt("Enter the employee's position: ");
    }

    employee.salary = parseFloat(prompt("Enter the employee's salary: "))
    while (isNaN(employee.salary) || employee.salary < 0) {
        console.log("Invalid salary. Please, enter a valid salary.");
        employee.salary = prompt("Enter the employee's salary: ");
    }

    console.log(`The employee ${employee.name} is a/an ${employee.position} and has a salary of $${employee.salary}`);

    return employee;
}

readEmployeeData();

module.exports = readEmployeeData;