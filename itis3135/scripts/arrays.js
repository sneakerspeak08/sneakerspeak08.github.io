let persons = [];
let salaries = [];

function displayResults() {
    const resultsDiv = document.getElementById("results");
    let totalSalary = salaries.reduce((acc, curr) => acc + curr, 0);
    let averageSalary = (salaries.length > 0) ? (totalSalary / salaries.length).toFixed(2) : 0;
    let highestSalary = Math.max(...salaries).toFixed(2);
    resultsDiv.innerHTML = `
        <h2>Salary Analysis</h2>
        <p>Average Salary: $${averageSalary}</p>
        <p>Highest Salary: $${highestSalary}</p>
    `;
}

function addSalary() {
    const employeeDropdown = document.getElementById("employeeDropdown");
    const salaryInput = document.getElementById("salaryInput");
    const name = employeeDropdown.value;
    const salary = parseFloat(salaryInput.value);
    if (name && !isNaN(salary)) {
        persons.push(name);
        salaries.push(salary);
        salaryInput.value = '';
        employeeDropdown.focus();
    } else {
        alert("Invalid entry.");
    }
}
function displaySalary() {
    const tableBody = document.getElementById("results_table").querySelector("tbody");
    tableBody.innerHTML = '';

    persons.forEach((person, index) => {
        const row = `<tr><td>${person}</td><td>${salaries[index]}</td></tr>`;
        tableBody.innerHTML += row;
    });
}


window.onload = () => {
    document.getElementById("employeeDropdown").focus();
};
