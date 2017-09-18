var employees = [];

function Employee(name, title, salary, status) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;
}


var employeeOne = new Employee("Jason", "Assistant-Manager", "$3,500", "Full Time");
employees.push(employeeOne);

var employeeTwo = new Employee("Steph", "Manager", "$5,000", "Full Time");
employees.push(employeeTwo);

var employeeThree = new Employee("Arin", "Freelancer", "$1,500", "Contract");
employees.push(employeeThree);



console.log(employees);
