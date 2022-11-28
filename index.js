const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const template = require('/src/template');

const employeeArray = [];

promptEmployee = () => {

  return inquirer.prompt([
    {
      type: 'list',
      name: 'employeeType',
      message: 'Which type of employee would you like to add?',
      choices: ['Manager', 'Engineer', 'Intern']
    },
    {// ask for name
      type: 'input',
      name: 'name',
      message: "What is this employee's first name?",
      validate: name => {
        if (name) {
          return true;
        } else if (!name) {
          console.log(" _Please Enter a Name")
          return false;
        }
      }
    },
    // If a manager?
    {
      type: 'input',
      name: 'officeNum',
      message: "What is the office number of this Manager?",
      when: ({ employeeType }) => employeeType === 'Manager',
      validate: officeNum => {
        if (officeNumRegex.test(officeNum)) {
          return true;
        } else {
          console.log(" _Please enter in this format (123) 456-7890 or 123-456-7890");
          return false;
        }
      }
    },
    //If an Engineer?
    {
      type: 'input',
      name: 'github',
      message: "What is this Engineer's github user name?",
      when: ({ employeeType }) => employeeType === 'Engineer'
    },
    //If an Intern?
    {
      type: 'input',
      name: 'school',
      message: 'Which school/university is this Intern from?',
      when: ({ employeeType }) => employeeType === 'Intern'
    },
    //Employee ID?
    {
      type: 'input',
      name: 'id',
      message: "What is this employee's id number?",
      validate: id => {
        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
          console.log(" _Please enter a number");
          return false;
        } else {
          return true;
        }
      }
    },
    //Employee email?
    {
      type: 'input',
      name: 'email',
      message: "What is this employee's email?",
      validate: email => {
        if (emailRegex.test(email)) {
          return true;
        } else {
          console.log(" \n_Please enter an email in this format example@email.com, .net, or .org")
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add another Employee?',
      default: false
    }
  ])
  .then(employeeData => {
    //console.log(employeeData);
    //if created employee data is Manager name, id, email, officeNum
    if (employeeData.employeeType === 'Manager') {
      const manager = new Manager(employeeData.name, employeeData.id, employeeData.email, employeeData.officeNum);
      employeeArray.push(manager);
    }
    //if created employee data is Engineer, name, id, email, github
    if (employeeData.employeeType === 'Engineer') {
      const engineer = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github);
      employeeArray.push(engineer);
    }
    //if created employee data is Intern, name, id, email, school
    if (employeeData.employeeType === 'Intern') {
      const intern = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school);
      employeeArray.push(intern);
    }
    //console.table(employeeArray);
    if(employeeData.confirmAddEmployee) {
      delete employeeData.confirmAddEmployee;
      return promptEmployee();
    } else {
      delete employeeData.confirmAddEmployee;
      employeeData.employees = employeeArray;
      module.exports = {
        employees: employeeData.employees
      };
      return employeeData;
    }
  })
}
const writeHTML = require('./src/write-html.js');

promptEmployee()
.then(employeeData => employeeData)
.then(employeeData2 => {
  //console.log(employeeData2);
  const generateHTML = require('./src/html-template.js');
  return (generateHTML.generateFile(employeeData2));
})
.then(html => {
  return writeHTML.writeFile(html);
})
.catch(err => console.log(err));