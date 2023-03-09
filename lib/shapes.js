class Shapes {
    constructor(colorShape, colorletter, letters) {
        this.colorShape = colorShape;
        this.colorletter = colorletter;
        this.letters = letters;
    }
}

class Circle extends Shapes {
    constructor(colorShape, colorletter, letters){
        super(colorShape, colorletter, letters)
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
        <rect width="100%" height="100%" fill="white"/>
    
        <circle cx="150" cy="100" r="80" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="${this.colorShape}" />
    
        <text x="145" y="120" font-size="60" text-anchor="middle" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="${this.colorLetter}">${this.letters}</text>
    
        </svg>
      `;
    }
}

class Triangle extends Shapes {
    constructor(colorShape, colorletter, letters){
        super(colorShape, colorletter, letters)
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
        <rect width="100%" height="100%" fill="white"/>
    
        <polygon points="150, 18 244, 182 56, 182" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="${answers.colorShape}" />
    
        <text x="152" y="143" font-size="50" text-anchor="middle" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="${answers.colorLetter}">${answers.letters}</text>
    
        </svg>
    `;
    }
}

class Square extends Shapes{
    constructor (colorShape, colorletter, letters){
        super(colorShape, colorletter, letters)
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
        <rect width="100%" height="100%" fill="white"/>
    
        <polygon points="150, 18 244, 182 56, 182" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="${answers.colorShape}" />
    
        <text x="152" y="143" font-size="50" text-anchor="middle" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="${answers.colorLetter}">${answers.letters}</text>
    
        </svg>
    `;
    }
}

module.exports = Shapes;