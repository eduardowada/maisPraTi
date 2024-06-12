/*
20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na tela),cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS)
*/

function getPayroll() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomName() {
        let names = ['Ana', 'Bruna', 'Bruno', 'Carlos', 'André', 'Maria', 'Julia', 'Eduardo', 'Fernada', 'Cleber', 'Antonio', 'Edgar', 'Lucia', 'Leticia', 'Gabriel'];
        let lastNames = ['CMartins', 'Silva', 'Rodrigues', 'Nicolau', 'Wada', 'Pereira', 'Oliveira', 'Jackson', 'Lima', 'Soares', 'Santos', 'Ferreira']
        let name = names[getRandomInt(0, names.length -1)];
        let lastName = lastNames[getRandomInt(0, lastNames.length - 1)];
        return `${name} ${lastName}`
    }

    function getGrossSalary() {
        return getRandomInt(1000, 12000);
    }

    function getINSSDeduction(GrossSalary) {
        return GrossSalary * 0.12
    }

    function getNetSalary(GrossSalary, inssDeduction) {
        return GrossSalary - inssDeduction
    }

    let employeers = [];
    for (let i = 1; i <= 80; i++) {
        let id = i;
        let name = getRandomName();
        let GrossSalary = getGrossSalary();
        employeers.push({id, name, GrossSalary})
    }

    employeers.forEach(employee => {
        let {id, name, GrossSalary} = employee;
        let inssDeduction = getINSSDeduction(GrossSalary);
        let netSalary = getNetSalary(GrossSalary, inssDeduction)

        console.log(`id: ${id}`)
        console.log(`Name: ${name}`)
        console.log(`GrossSalay: ${GrossSalary.toFixed(2)}`)
        console.log(`INSS Deduction: ${inssDeduction.toFixed(2)}`)
        console.log(`Net Salary: ${netSalary.toFixed(2)}`)
        console.log('--------------------------------------')
    })
}

getPayroll();

module.exports = getPayroll;
