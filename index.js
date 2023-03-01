const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./lib/generateLogo');
const questions = [
    {
        type: 'input',
        name: 'letters',
        message: 'Please enter up to 3 letters:',
    },
    {
        type: 'input',
        name: 'colorLetter',
        message: 'Please enter the color for your Letters:',
    },
    {
        type: 'input',
        name: 'shape',
        message: 'Please select the shape for your Logo:',
        choices: [
            'Circle',
            'Triangle',
            'Square',
        ],
    },
    {
        type: 'input',
        name: 'colorShape',
        message: 'Please enter the color for your Logo:'
    },
];

// a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((answers) => {
            // console.log(answers)
            fs.writeFile('logo.svg', generateLogo(answers), err => {
                if (err) {
                    console.log('Could not save the file')
                } else {
                    console.log('Success; SVG file is added to the project!')
                }
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

// Function call to initialize app
init();