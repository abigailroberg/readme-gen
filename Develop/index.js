// TODO: Include packages needed for this application
const { rejects } = require('assert');
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if(titleInput) {
                    return true
                } else {
                    console.log('Please enter the title of your project!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description for your project',
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true
                } else {
                    console.log('Please enter a description for your project!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage: Provide instructions and examples for use'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license would you like to use?',
            choices: ['MIT License', 'GNU GPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0']
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide examples of the tests for your application and how to run them'
        },
        {
            type: 'input',
            name: 'githubUser',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if(err) {
                reject(err)
                return
            }
            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(questionsData => {
        writeToFile('./README.md',generateMarkdown(questionsData))
    })
}

// Function call to initialize app
init();
