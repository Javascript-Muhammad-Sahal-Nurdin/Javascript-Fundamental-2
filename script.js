'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // ada bug (kurang s)
if (hasDriversLicense) console.log('I can drive ');

// const interface = 'Audio'; // error (reserved word)
// const private = 534;   //error (reserved word)


// Functions
/* Funstions is piece a code yang dapat digunakan berkali-kali. 
*/
function logger() {
    console.log('My name is Jonas');
    
}

logger(); // invoke or calling or running the functions
logger();
logger();

function fruitProcessor(apples, oranges) { // disamping namanya parameter
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice; // return any value
}

const appleJuice = fruitProcessor(5, 0); // Di samping namanya arguments
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
