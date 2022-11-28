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
