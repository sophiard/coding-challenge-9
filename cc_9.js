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



