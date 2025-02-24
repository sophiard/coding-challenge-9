//Task 1 - Created Employee Class

class Employee {
    constructor(name, id, department, salary) {
      this.name = name;
      this.id = id;
      this.department = department;
      this.salary = salary;
    }
  // made a class called employee and made propertie and set these properties 

    getDetails() {
      return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }
  //made a string with employee info
    calculateAnnualSalary() {
      return this.salary * 12;
    }
  }
  //calculated annual salary
  
  const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
  // created new employee and its details

  console.log("Task 1 part 1:", emp1.getDetails()); 
  console.log("Task 1 part 2:", emp1.calculateAnnualSalary()); 
//logged my results 


// Task 2 - Created Manager Class with Inheritance
class Manager extends Employee { // created a class Manager that extends the employee class
    constructor(name, id, department, salary, teamSize) { 
        super(name, id, department, salary);//makes employee info
        this.teamSize = teamSize;
    }

    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }   
// helps describe the manager 
    calculateAnnualSalary() {
        return this.salary * 12 + this.calculateBonus();
    }
    //formula and fucntion that calculates the annual salary

    calculateBonus() {
        return this.salary * 0.10 * 12; //added bonus
    }
}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); //added a new manager
console.log("Task 2 part 1:", mgr1.getDetails());
console.log("Task 2 part 2:", mgr1.calculateBonus());
//logged results 


//Task 3 - Created Company Class

class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        this.employees.forEach(employee => console.log("Task 3:", employee.getDetails()));
    }
}
