//* use the following code provided in the 'Additional Resources" sections to design the Unit Tests:
//* const shape = new Triangle();
//* shape.setColor("blue");
//* expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// Imports the properties of the Circle, Triangle and Square shapes from the shape.js file located in the 'lib' folder. 
const {Circle, Triangle, Square} = require('../lib/shapes');

//Unit Test for the Circle logo: test verified that the Circle SVG logo can be generated with the specified parameters for logo color, text and text color. 
describe('Circle', () =>{
   it('The Logo.svg file for Circle renders correctly.', () =>{
    const shape = new Circle();
  
    shape.setProperties("blue", "white", "BYE");

    expect(shape.render()).toEqual('<rect width="100%" height="100%" fill="white"/><circle cx="150" cy="100" r="80" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="blue" /><text x="148" y="120" font-size="60" text-anchor="middle" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="white">BYE</text>');
   }) 
});

//Unit Test for the Triangle logo: test verified that the Triangle SVG logo can be generated with the specified parameters for logo color, text and text color.
describe('Triangle', () =>{
    it('The Logo.svg file for Triangle renders correctly.', () =>{
     const shape = new Triangle();
   
     shape.setProperties("red", "yellow", "OnE");
 
     expect(shape.render()).toEqual('<rect width="100%" height="100%" fill="white"/><polygon points="150, 18 244, 182 56, 182" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="red" /><text x="152" y="152" font-size="50" text-anchor="middle" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="yellow">OnE</text>');
    }) 
 });

 //Unit Test for the Square logo: test verified that the Square SVG logo can be generated with the specified parameters for logo color, text and text color.
 describe('Square', () =>{
    it('The Logo.svg file for Square renders correctly.', () =>{
     const shape = new Square();
   
     shape.setProperties("green", "purple", "SVG");
 
     expect(shape.render()).toEqual('<rect width="100%" height="100%" fill="white" /><rect x="70" y="28" width="150" height="150" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="green" /><text x="145" y="120" font-size="50" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" text-anchor="middle" fill="purple">SVG</text>');
    }) 
 });
