const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHtml = require('./util/generateHtml')

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
                generateHtml();
                break;

            default:
                console.log("thanks for playing!")
                break;
        }
    })
}

