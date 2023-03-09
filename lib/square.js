const Square = (answers) =>  {
    return `
      <svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">

      <rect width="100%" height="100%" fill="white" style=";stroke-width:1;stroke:rgb(0,0,0)" />

      <rect x="90" y="50" width="110" height="110" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="${answers.colorShape}" /> 

      <text x="145" y="120" font-size="60" text-anchor="middle" fill="${answers.colorLetter}">${answers.letters}</text>

      </svg>
    `;
  }
  
  module.exports = Square;