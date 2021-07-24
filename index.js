const inquirer = require("inquirer");
const mysql = require("mysql");
const figlet = require("figlet");

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