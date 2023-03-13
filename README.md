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
[Demo Video](https://drive.google.com/file/d/13TIT1ZSCyBXLcWkdMefNdlPF_4Z96-W9/view)


## Installation
- User needs to install [node.js (version 18.15.0 LTS](https://nodejs.org/en/).
- To use the application user has to list [inquirer (version 8.2.4)](https://www.npmjs.com/package/inquirer/v/8.2.4) and [jest (version 29.4.3)](https://jestjs.io/docs/29.4/getting-started) as dependencies in the package.json file.
- To install inquirer and jest, the user needs to open the intergrated terminal and type npm install or npm i. This will isntall the inquirer and jest based on the specified version in the package.json file. 
- Once inquirer and jest are installed, the user can run the application. 


## Usage
- To run the application, type "npm start" in the VS terminal. 
- Follow the prompts to input the information.
- Once the script is done running, a new logo.svg file with all user inputs is populated. To view the newly generated logo, the user must open it with a live server. 

## Example SVG files
![image](https://user-images.githubusercontent.com/118693401/224606719-d3a0cbe4-52e3-4dcf-ac06-356cf8240da0.png)
![image](https://user-images.githubusercontent.com/118693401/224606748-742fca12-ef80-41e3-a255-035e20fb7600.png)
![image](https://user-images.githubusercontent.com/118693401/224606764-6a977b32-3f11-4258-a3e6-a4a4e3b56b8a.png)


## Tests
- Unit Testing must be comepleted to validated the code. Three test were created to verify that the SVG logo can be correctly rendered based for each shape 9Circle, triangle and Square) based on the inputs for logo's color, text and text's color.
- To run the test, user must open intergrated terminal and type npm test. 


## Contribution
ASK BCS (for assisting with troubleshooting) 

## License
Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.
