const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter instructions for installation:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter instructions for how to use app:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Pick project license:',
        choices: ['None', 'MIT', 'BSD','GPL', 'Apache']

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter the testing instructions:'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];

function writeToFile(data) {
    var fileName = './output/README.md';

    fs.writeFile(fileName, data, function (err) {
        err ? console.log(err) : console.log(fileName + ' created!')
    });
}

function init() {
    inquirer.prompt(questions)
    .then (answers => writeToFile(generateMarkdown(answers)))
}

init();
