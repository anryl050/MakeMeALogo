# MAKE-ME-A-LOGO

![Badge](https://img.shields.io/badge/license-MIT-green?style=plastic&logo=appveyor)

## Table of Content
#### * [Project Desctiption](#description)
#### * [Additional Requirement](#requirements)
#### * [Video Explanation](#video)
#### * [Installation](#installation)
#### * [Usage](#usage)
#### * [Tests](#tests)
#### * [License](#license)

## Project Description
The scope of project is to buikd a Node.js command command-line application that takes in user input to generate a logo and save it as an SVG file. he application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.

### User Story
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

### Acceptance Criteria
GIVEN a command-line application that accepts user input

- WHEN I am prompted for text, THEN I can enter up to three characters.

- WHEN I am prompted for the text color, THEN I can enter a color keyword (OR a hexadecimal number).

- WHEN I am prompted for a shape, THEN I am presented with a list of shapes to choose from: circle, triangle, and square.

- WHEN I am prompted for the shape's color, THEN I can enter a color keyword (OR a hexadecimal number).

- WHEN I have entered input for all the prompts, THEN an SVG file is created named `logo.svg` AND the output text "Generated logo.svg" is printed in the command line.

- WHEN I open the `logo.svg` file in a browser, THEN I am shown a 300x200 pixel image that matches the criteria I entered. 

## Additional Requirements
The application must use Jest for running the unit tests. 

## Video Exaplanation
https://watch.screencastify.com/v/1qKED08DzQr1SB5tVccS


## Installation
- Install the node.js 
- Then, install the npm package (type "npm init -y" in the VS terminal, press Enter and follow the prompts). It will generate the package.js file. 
- Then, install the Inquirer package (type "npm i inquirer@8.2.4" in the VS terminal press Enter and follow the prompts). It will generate package-lock.json.


## Usage
- To run the application, type "npm start" in the VS terminal. 
- Follow the prompts to input the information.
- Once the script is done running, a new README.md file with all user inputs is populated in the "example" folder. 


## Tests
Unit Testing must be comepleted to validated the code. 

## Contribution
None

## License
Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.

  
