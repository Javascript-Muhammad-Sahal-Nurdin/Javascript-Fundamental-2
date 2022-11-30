'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // ada bug (kurang s)
if (hasDriversLicense) console.log('I can drive ');

// const interface = 'Audio'; // error (reserved word)
// const private = 534;   //error (reserved word)


// Functions
 Funstions is piece a code yang dapat digunakan berkali-kali. 

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


// Functions Declarations vs Expressions

// Function Declarations
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(2003);
console.log(age1);

// Function expressions
// anonymus function as expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear; // Functions with Expressions
    }
const age2 = calcAge2(1991);
console.log(age1, age2);

// The different
// kita bisa panggil function delarations sebelum di definisikan
const age1 = calcAge1(2003);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}
// Namun tidak bisa dengan Functions Expression. Jadi untuk penggunaannya kita lebih ke fuction expressions. sama saja lebih ke preferensi masing-masing

*/
// Arrow Function
// Arrow function digunakan sebagai mempersingkat penulisan fuction

// Tradisional Function
const calcAge2 = function (birthYear) {
    return 2037 - birthYear; // Functions with Expressions
}
// With arrow function (satu parameter dengan 1 logic)
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2003);
console.log(age3);

// Arrow function satu parameter namun banyak logics
// const yearUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearUntilRetirement(2003));

// Arrow function sama dengan 2 atau lebih
const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
    
console.log(yearUntilRetirement(2003, 'Sahal'));

// Kekurangan menggunakan arrow function ini adalah tidak bisa menggunakan 'this' keyword
