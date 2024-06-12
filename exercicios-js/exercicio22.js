/*
2. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, o maior salário e o percentual de pessoas com salário até R$ 350,00.
*/
const prompt = require('prompt-sync')();

function populationSurvey() {
    let totalSalary = 0;
    let nSalary = [];
    let totalChildren = 0;
    let nChildren = [];
    let stopPoint = '';
    let averageSalary = 0;
    let averageChildren = 0;
    let salaryUnder350 = 0
    let biggestSalary = 0

    do {
        let salary = parseFloat(prompt("What's your salary?: "));
        while (isNaN(salary) || salary < 0) {
            salary = parseFloat(prompt("Invalid salary. Please, enter a valid salary: "));
        }

        let childrenNumber = parseInt(prompt("How many kids do you have?: "));
        while (isNaN(childrenNumber) || childrenNumber < 0) {
            childrenNumber = parseInt(prompt("Please, enter a valid number of children: "));
        }
        console.log('------------------------------------------------')
        stopPoint = prompt("Do you want to continue (Enter 'n' to stop or any other key to continue)?: ").toUpperCase();
        totalSalary += salary;
        totalChildren += childrenNumber;
        nSalary.push(salary);
        nChildren.push(childrenNumber);

        if (salary <= 350) {
            salaryUnder350++;
        }

        if (salary > biggestSalary) {
            biggestSalary = salary;
        }
    } while (stopPoint !== 'N')
    
    averageSalary = totalSalary / nSalary.length;
    averageChildren = totalChildren / nChildren.length;

    let salaryUnder350Percentage = (salaryUnder350 / nSalary.length) * 100;

    console.log('------------------------------------------------')
    console.log(`Average salary of the population: R$${averageSalary.toFixed(2)}`)
    console.log(`Average number of children: ${averageChildren.toFixed(2)}`)
    console.log(`Biggest salary of the population: R$${biggestSalary.toFixed(2)}`)
    console.log(`Percentage of salary under R$350: ${salaryUnder350Percentage.toFixed(2)}`)
    console.log('------------------------------------------------')
}

populationSurvey();

module.exports = populationSurvey;