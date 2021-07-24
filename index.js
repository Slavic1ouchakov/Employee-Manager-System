const inquirer = require("inquirer");
const mysql = require("mysql");
const figlet = require("figlet");
const { runMain } = require("module");

require("console.table");

let connection = mysql.createConnection({
    host: "localhost",

    port: 3301,

    // User
    user: 'root',

    // Password
    password: "",
    database: "employment",
});

connection.connect((err) => {
    if (err) throw (err);
    console.log(err);
    console.log("Successful connection!");
    runMenu();
});

const runMenu = () => {
    inquirer
        .prompt({
            name: "main",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Add employee",
                "View employees",
                "Add role",
                "View roles",
                "Add department",
                "View departments",
                "Done",
            ],
        })
        .then((answer) => {
            switch (answer.choice) {
                case "Add employee":
                    return addEmployee();

                case "View employees":
                    return showEmployees();

                case "Add role":
                     return addRole();

                case "View roles":
                    return showRoles();

                case "Add department":
                    return addDepartment();

                case "View departments":
                    return showDepartments();

                case "Done":
                    return done();

                default:
                    console.log(`Invalid action: ${answer.choice}`);
                    break;
            }
        });
};

const showEmployees = () => {
    let query = "SELECT employee.employee_id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.role_id LEFT JOIN department ON role.department_id = department.department_id LEFT JOIN employee manager ON manager.role_id = employee.manager_id";
    connection.query(query, (err, employees) => {
      console.log(err);
      if (err) throw (err);
      console.log(employees);
      console.log("\n");
      console.table("Employees", employees); 
      runMain(); 
    });
  }

  const addEmployee = () => {
    inquirer
      prompt(
        {
          name: "newEmpFirstName",
          type: "input",
          message: "Employee first name?"
        },
        {
          name: "newEmpLastName",
          type: "input",
          message: "Employee last name?"
        },
        {
          name: "newEmpRole",
          type: "list",
          message: "Employee role.",
          choice: [
            "Receptionist",
            "Graphic Designer",
            "Market Research Analyst",
            "Network Analyst",
            "Software Engineer",
            "Mechanical Engineer",
            "Financial Advisor",
            "Financial Manager",
            "Accountant",
          ]
        },
        {
          name: "newEmpManager",
          type: "list",
          message: "Who is the manager?",
          choice: [
            "Elon Musk",
            "Bill Gates",
            "Jeff Bez",
            "Mark Zuk"
          ]
        }
      )
    };
    
    const showRoles = () => {
    
    };
    
    const addRole = () => {
    
    };
    
    const showDepartments = () => {
    
    };
    
    const addDepartment = () => {
    
    };
    
    const done = () => {
      console.log("Done!");
      process.exit(); 
    }