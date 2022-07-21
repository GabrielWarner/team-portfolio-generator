const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHtml = require('./util/generateHtml')
const Employee = require('./lib/Employee')
const generate = require("./util/generateHtml")
const fs = require('fs')

const team = []
const engineers = []
const interns = []

const start = () => {
    inquirer.prompt([
        {
        type: 'input',
        message: 'Please enter Managers name: ',
        name: 'managerName'
        },
        {
            type: 'input',
            message: 'Please enter Managers employee ID: ',
            name: 'managerId'
        },
        {
            type: 'input',
            message: 'Please enter Managers email: ',
            name: 'managerEmail'
        },
        {
        type: 'input',
        message: 'Please enter office number: ',
        name: 'officeNumber'
        },
    ]).then(ans=>{
        const manager = new Manager(ans.managerName, ans.managerId, ans.managerEmail, ans.officeNumber)
        team.push(manager)
        askQuestion();
    })
}

const askQuestion = () =>{
    inquirer.prompt([
        {
            type: 'list',
            choices: ['Add Engineer', 'Add Intern', 'Finish Building Team'],
            message: 'Please an option: ',
            name: 'userChoice'
        },
    ]).then(ans=>{
        switch (ans.userChoice) {
            case "Add Engineer":
                createEngineer();
                break;

            case "Add Intern":
                createIntern();
                break;

            case "Finish Building Team":
                createHtml();
                break;

            default:
                console.log("thanks for playing!")
                break;
        }
    })
}

const createEngineer = () => {
    inquirer.prompt([
        {
        type: 'input',
        message: 'Enter Engineers name: ',
        name: 'engineerName'
        },
        {
            type: 'input',
            message: 'Enter Engineers ID: ',
            name: 'engineerId'
        },
        {
            type: 'input',
            message: 'Enter Engineers email: ',
            name: 'engineerEmail'
        },
        {
        type: 'input',
        message: 'Enter github: ',
        name: 'engineerGithub'
        },
    ]).then(ans=>{
        const engineer = new Engineer(ans.engineerName, ans.engineerId, ans.engineerEmail, ans.engineerGithub)
        team.push(engineer)
        askQuestion();
    })
}

const createIntern = () => {
    inquirer.prompt([
        {
        type: 'input',
        message: 'Enter Interns name: ',
        name: 'internName'
        },
        {
            type: 'input',
            message: 'Enter Interns ID: ',
            name: 'internId'
        },
        {
            type: 'input',
            message: 'Enter Interns email: ',
            name: 'internEmail'
        },
        {
        type: 'input',
        message: 'Enter github: ',
        name: 'internGithub'
        },
    ]).then(ans=>{
        const intern = new Intern(ans.internName, ans.internId, ans.internEmail, ans.internGithub)
        team.push(intern)
        askQuestion();
    })
}

const createHtml = () => {
    const HTML = generate(team)
    fs.writeFileSync('test.html', HTML);
    
}

start()