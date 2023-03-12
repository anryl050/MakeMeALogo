// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');


const {Circle} = require('../lib/shapes');

describe('Circle', () =>{
   it('the Logo.svg file for Circle renders in blue color.', () =>{
    const shape = new Circle();
    var color = ('blue');
    var bg = ('white');
    var text = ("BYE");

    shape.setProperties(color);
    shape.setProperties(bg);
    shape.setProperties(text);

    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="${color}" /><text x="148" y="120" font-size="60" text-anchor="middle" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="${bg}">${text}</text>');
   }) 
});



