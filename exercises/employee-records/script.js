var employees = [];

function Employee(name, title, salary, status) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status || "Full Time";
}

Employee.prototype.speak = function() {
        console.log("My name is " + this.name + ". I am a " + this.status + " " + this.title + " and make about " + this.salary + " per month.");
}


var employeeOne = new Employee("Jason", "Assistant-Manager", "$3,500", "Full Time");
employees.push(employeeOne);
employeeOne.speak();

var employeeTwo = new Employee("Steph", "Manager", "$5,000", "Full Time");
employees.push(employeeTwo);
employeeTwo.speak();

var employeeThree = new Employee("Arin", "Freelancer", "$1,500", "Contract");
employees.push(employeeThree);
employeeThree.speak();



console.log(employees);
