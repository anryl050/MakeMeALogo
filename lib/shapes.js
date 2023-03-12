class Shapes {
    constructor() {
        this.color = "";
    }

    setProperties(colorShape, colorLetters, letters){
        this.colorShape = (colorShape);
        this.colorLetters = (colorLetters);
        this.letters = (letters);
    }
    
}

class Circle extends Shapes {
    render(){
        return `
        <rect width="100%" height="100%" fill="white"/>
        <circle cx="150" cy="100" r="80" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="${this.colorShape}" />
        <text x="148" y="120" font-size="60" text-anchor="middle" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="${this.colorLetters}">${this.letters}</text>
      `;
    }
}

class Triangle extends Shapes {
    render(){
        return `   
        <rect width="100%" height="100%" fill="white"/>
        <polygon points="150, 18 244, 182 56, 182" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="${this.colorShape}" />
        <text x="152" y="152" font-size="50" text-anchor="middle" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="${this.colorLetters}">${this.letters}</text>
    `;
    }
}

class Square extends Shapes{
    render(){
        return `
        <rect width="100%" height="100%" fill="white" />
        <rect x="70" y="28" width="150" height="150" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="${this.colorShape}" /> 
        <text x="145" y="120" font-size="50" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" text-anchor="middle" fill="${this.colorLetters}">${this.letters}</text>
    `;}
}

module.exports = {Circle, Triangle, Square};