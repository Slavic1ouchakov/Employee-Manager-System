INSERT INTO department (department_id, name)
VALUES (1, "Engineering");

INSERT INTO department (department_id, name)
VALUES (2, "Sales");

INSERT INTO department (department_id, name)
VALUES (3, "Analyist");

INSERT INTO department (department_id, name)
VALUES (4, "Customer Service");

INSERT INTO role (role_id, title, salary, department_id)
VALUES (1, "Software Engineer", 180000, 1);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (2, "Mechanical Engineer", 90000, 1);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (3, "Financial Advisor", 150000, 2);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (4, "Accountant", 75000, 2);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (5, "Finance Manager", 130000, 3);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (6, "Graphic Designer", 85000, 3);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (7, "Receptionist", 170000, 4);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (1, "Jake", "Kelly", 1, NULL);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (2, "Allen", "Cam", 2, 1);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (3, "Mellisa", "Eve", 3, NULL);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (4, "Slavic", "Ouch", 4, 3);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (5, "Julian", "Anto", 5, NULL); 

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (6, "Tim", "Dale", 6, 5);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (7, "James", "Hill", 7, NULL);

