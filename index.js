const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');


//! class SVG that sets the svg elements, and renders them in the svg string. 
class SvgFile{
    constructor(){
        this.textSvg = ""
        this.textColorSvg = ""
        this.colorSvg = ""
    }
    render(){
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.textSvg}${this.textColorSvg}${this.colorSvg}</svg>`
    }
    // ! data is pulled from the shapes.js
    setTextSvg(letters){
        this.textSvg = letters.render()
    }
    // ! data is pulled from the shapes.js
    setTextColorSvg(colorLetters){
        this.textColorSvg = colorLetters.render()
    }
    // ! data is pulled from the shapes.js
    setColorSvg(colorShape){
        this.colorSvg = colorShape.render()
    }
}

// ! Array of Questions
const questions = [
    {
        type: 'input',
        name: 'letters',
        message: 'Please enter up to 3 letters:',
    },
    {
        type: 'input',
        name: 'colorLetters',
        message: 'Please enter the color for your Letters:',
    },
    {
        type: 'input',
        name: 'colorShape',
        message: 'Please enter the color for your Logo:'
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'Please select the shape for your Logo:',
        choices: [
            'Circle',
            'Triangle',
            'Square',
        ],
    },
];

//! a function to initialize app
const init = () => {

    var svgString = "";
    
        return inquirer.prompt(questions)
        .then((answers) => {
    
         var  userTextInput = 
         (answers.letters.length > 0 && answers.letters.length < 4) ? answers.letters
         : (console.log("You entered incorrect number of character. The lenght of your input must be between 1 and 3 characters."), null);
            if (userTextInput === null) {
            return;
            }
        
        // ! user inputs 
            // userTextInput = answers.letters;
            userLettersColor = answers.colorLetters;
    	    userShapeColor = answers.colorShape;
            userFigureShape = answers["shapeType"];
    
        // ! user shape selection
            let userShape;
            userFigureShape === "Square" ? userShape = new Square()
            : userFigureShape === "Circle" ? userShape = new Circle()
            : userFigureShape === "Triangle" ? userShape = new Triangle()
            : console.log("Invalid selection");
    
            userShape.setProperties(userShapeColor, userLettersColor, userTextInput,);
    
        // !new svg file to store the user shape and text
            var svg = new SvgFile();
        
            svg.setColorSvg(userShape);
            svgString = svg.render();
        
            fs.writeFile("./logo.svg", svgString, 
                err => {
                    return (err) ? console.log('Could not save the file')
                    : console.log('Success: Generated logo.svg')
                    })
        })
        .catch((error) => {
            console.log(error)
        })
}

// Function call to initialize app
init();