function generateLogo(answers) {
    return `
  
    # ${answers.letters}
    # ${answers.colorLetter}
    # ${answers.shape}
     # ${answers.colorShape}
    `;
  }
  
  module.exports = generateLogo;