// Imports the properties of inquirer, File System (fs), and shapes.js.
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes');


// class with a contractor that has 4 methods (render(), setTextSvg(letters), setTextColorSvg(colorLetters), and  setColorSvg(colorShape)) for setting and rendering the logo color, text and text color.
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
    // data for the 'letters' input to be populated in the SVG. 
    setTextSvg(letters){
        this.textSvg = letters.render()
    }
    // data for the 'colorLetters' input to be populated in the SVG. 
    setTextColorSvg(colorLetters){
        this.textColorSvg = colorLetters.render()
    }
    // data for the answers.letters to be populated in the SVG. 
    setColorSvg(colorShape){
        this.colorSvg = colorShape.render()
    }
}

// Array of Questions
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

// a function to initialize app
const init = () => {

    // a variable for empty SVG string.
    var svgString = "";
    
    // a function to trigger the questions to promp 
        return inquirer.prompt(questions)
        .then((answers) => {
    
        //a ternary if statement to verify the lenght of the character input. If the length is outside defined range, the application will stop running. 
         var  userTextInput = 
         (answers.letters.length > 0 && answers.letters.length < 4) ? answers.letters
         : (console.log("You entered incorrect number of character. The lenght of your input must be between 1 and 3 characters."), null);
            if (userTextInput === null) {
            return;
            }
        
        // converted user inputs
            userLettersColor = answers.colorLetters;
    	    userShapeColor = answers.colorShape;
            userFigureShape = answers["shapeType"];
    
        // user shape selection. once the shape is selected, it will create a new object instace for that shape.
            let userShape;
            userFigureShape === "Square" ? userShape = new Square()
            : userFigureShape === "Circle" ? userShape = new Circle()
            : userFigureShape === "Triangle" ? userShape = new Triangle()
            : console.log("Invalid selection");
    
            userShape.setProperties(userShapeColor, userLettersColor, userTextInput,);
    
        // a new svg objects to store the user selections 
            var svg = new SvgFile();
        
            svg.setColorSvg(userShape);
            svgString = svg.render();
        
            // function to write the information from  the new svg string into a logo.svg file
            fs.writeFile("./logo.svg", svgString, 
                err => {
                    return (err) ? console.log('Could not save the file')
                    : console.log('Success: Generated logo.svg')
                    })
        })
        // if the init() function does not run correctly, an error will appear in the console log. 
        .catch((error) => {
            console.log(error)
        })
}

// Function call to initialize app
init();