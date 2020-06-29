import { Employee } from './employee';

export const EMPLOYEES: Employee[] = [
  {
      "employee_id": 1,
      "first_name": "Steven",
      "last_name": "King",
      "email": "steven.king@sqltutorial.org",
      "phone_number": "515.123.4567",
      "hire_date": new Date("1987-06-17T00:00:00"),
      "job_id": 4,
      "salary": 24000,
      "manager_id": null,
      "department_id": 9
  },
  {
      "employee_id": 2,
      "first_name": "Neena",
      "last_name": "Kochhar",
      "email": "neena.kochhar@sqltutorial.org",
      "phone_number": "515.123.4568",
      "hire_date": new Date("1989-09-21T00:00:00"),
      "job_id": 5,
      "salary": 17000,
      "manager_id": 1,
      "department_id": 9
  },
  {
      "employee_id": 3,
      "first_name": "Lex",
      "last_name": "De Haan",
      "email": "lex.de haan@sqltutorial.org",
      "phone_number": "515.123.4569",
      "hire_date": new Date("1993-01-13T00:00:00"),
      "job_id": 5,
      "salary": 17000,
      "manager_id": 1,
      "department_id": 9
  },
  {
      "employee_id": 4,
      "first_name": "Alexander",
      "last_name": "Hunold",
      "email": "alexander.hunold@sqltutorial.org",
      "phone_number": "590.423.4567",
      "hire_date": new Date("1990-01-03T00:00:00"),
      "job_id": 9,
      "salary": 9000,
      "manager_id": 3,
      "department_id": 6
  },
  {
      "employee_id": 5,
      "first_name": "Bruce",
      "last_name": "Ernst",
      "email": "bruce.ernst@sqltutorial.org",
      "phone_number": "590.423.4568",
      "hire_date": new Date("1991-05-21T00:00:00"),
      "job_id": 9,
      "salary": 6000,
      "manager_id": 4,
      "department_id": 6
  },
  {
      "employee_id": 6,
      "first_name": "David",
      "last_name": "Austin",
      "email": "david.austin@sqltutorial.org",
      "phone_number": "590.423.4569",
      "hire_date": new Date("1997-06-25T00:00:00"),
      "job_id": 9,
      "salary": 4800,
      "manager_id": 4,
      "department_id": 6
  },
  {
      "employee_id": 7,
      "first_name": "Valli",
      "last_name": "Pataballa",
      "email": "valli.pataballa@sqltutorial.org",
      "phone_number": "590.423.4560",
      "hire_date": new Date("1998-02-05T00:00:00"),
      "job_id": 9,
      "salary": 4800,
      "manager_id": 4,
      "department_id": 6
  },
  {
      "employee_id": 8,
      "first_name": "Diana",
      "last_name": "Lorentz",
      "email": "diana.lorentz@sqltutorial.org",
      "phone_number": "590.423.5567",
      "hire_date": new Date("1999-02-07T00:00:00"),
      "job_id": 9,
      "salary": 4200,
      "manager_id": 4,
      "department_id": 6
  },
  {
      "employee_id": 9,
      "first_name": "Nancy",
      "last_name": "Greenberg",
      "email": "nancy.greenberg@sqltutorial.org",
      "phone_number": "515.124.4569",
      "hire_date": new Date("1994-08-17T00:00:00"),
      "job_id": 7,
      "salary": 12000,
      "manager_id": 2,
      "department_id": 10
  },
  {
      "employee_id": 10,
      "first_name": "Daniel",
      "last_name": "Faviet",
      "email": "daniel.faviet@sqltutorial.org",
      "phone_number": "515.124.4169",
      "hire_date": new Date("1994-08-16T00:00:00"),
      "job_id": 6,
      "salary": 9000,
      "manager_id": 9,
      "department_id": 10
  },
  {
      "employee_id": 11,
      "first_name": "John",
      "last_name": "Chen",
      "email": "john.chen@sqltutorial.org",
      "phone_number": "515.124.4269",
      "hire_date": new Date("1997-09-28T00:00:00"),
      "job_id": 6,
      "salary": 8200,
      "manager_id": 9,
      "department_id": 10
  },
  {
      "employee_id": 12,
      "first_name": "Ismael",
      "last_name": "Sciarra",
      "email": "ismael.sciarra@sqltutorial.org",
      "phone_number": "515.124.4369",
      "hire_date": new Date("1997-09-30T00:00:00"),
      "job_id": 6,
      "salary": 7700,
      "manager_id": 9,
      "department_id": 10
  }
];