const name = "mirza";
const repoCount = 50;

// Corrected the template literal by using a valid variable name.
console.log(`Hello, my name is ${name} and I have ${repoCount} repositories.`);

const gameName = new String('mirza-hhc');

// Fixed typo: `chartAt` should be `charAt`.
console.log(gameName.charAt(2)); 

// Fixed the variable `t` by wrapping it in quotes for a valid string.
console.log(gameName.indexOf('t')); 

const newString = gameName.substring(0, 4);
console.log(newString);


const anotherString = gameName.slice(-8 , 4)
console.log(anotherString);

const newStringOne = "   mirza  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://mirza.com/mirzagoogle%20com"

console.log(url.replace('%20', '-' ))

console.log(url.includes('mirza'));


