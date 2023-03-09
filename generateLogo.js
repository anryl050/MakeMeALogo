const generateLogoTriangle = (answers) => {
  return `

  <svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">

<rect width="100%" height="100%" fill="white"/>

<polygon points="150, 18 244, 182 56, 182" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="${answers.colorShape}" />

<text x="153" y="140" font-size="50" text-anchor="middle" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="${answers.colorLetter}">${answers.letters}</text>

</svg>

  `;
}

module.exports = generateLogoTriangle;