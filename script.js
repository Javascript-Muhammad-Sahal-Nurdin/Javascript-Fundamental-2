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


// Arrow Function
// Arrow function digunakan sebagai mempersingkat penulisan fuction

// Tradisional Function
const calcAge2 = function (birthYear) {
    return 2037 - birthYear; // Functions with Expressions
}
// With arrow function (satu parameter dengan 1 logic)
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2003);
// console.log(age3);

// Arrow function satu parameter namun banyak logics
// const yearUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearUntilRetirement(2003));

// Arrow function sama dengan 2 atau lebih
// const yearUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
    
// console.log(yearUntilRetirement(2003, 'Sahal'));

// Kekurangan menggunakan arrow function ini adalah tidak bisa menggunakan 'this' keyword


// Functions calling other functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }


// function fruitProcessor(apples, oranges) { 
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//     return juice; 
// }

// console.log(fruitProcessor(2, 3));


// Dengen menggunakan arrow function maka code di atas akan menjadi
const cutFruitPieces = fruit => fruit * 4;
const fruitProcessor = (apples, oranges) => { 
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice; 
}

// console.log(fruitProcessor(4, 3));

// Reviewing Functions

const calcAge = function age(birthYear) {
    return 2037 - birthYear;
}

const yearUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear) ;
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
         console.log(`${firstName} has already retired 🎉`);
        return -1; // Ini adalah simbol default kesalahan yang sering digunakan dalam programming
    }
   
}
    
// console.log(yearUntilRetirement(2003, 'Sahal'));
// console.log(yearUntilRetirement(1950, 'Jonas'));


// Coding Challenge #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
function checkWinner(avgDolphins, avgKoalas ) { // Urutan penempatan dari parameter ini berpengaruh postikan tidak tertukar.

    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if  (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('both team are draw');
    }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(666, 333)
// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


// Introduction Array
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// Bundle variabel di atas menjadi array (big container)
// Deklarasi array secara umum
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// Deklarasi Array juga bisa seperti berikut
const years1 = new Array(1991, 1984, 2000, 2020);

console.log(friends[0]);
console.log(friends[2]);

// Length ini akan mengambil banyak elemen di dalam array, dihitung dari 1

console.log(friends.length);
console.log(friends[friends.length - 1]); // Kenapa -1 karena array di sini bukan zero based untuk menghitung banyaknay length
// array tidak bisa menerima statement di dalam kurung

friends[2] = 'Jay';
console.log(friends); // array bisa diubah dan bukan immutable
// Bisa di mutate
// friends = ['Bob', 'Alice'] // error kalo di deklarasikan ke constant

// di js array dapat berisi macam2 tipe data
const firstName = 'Sahal';
const sahal = [firstName, 'Nurdin', 2037 - 2003, 'Student', friends];
console.log(sahal);
console.log(sahal.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years)); // Hasilnya adalah NaN maka array tidak bisa dioperasikan seperti ini, bisanya satu-satu

// Berikutnya adalah caranya
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]); // INi akan memilih elemen terakhir

console.log(age1, age2, age3);

// Ini akan work
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages);


// Basic Array Operations (Methods)

// Add elements
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay') // Push adalah Function yang dipanggil untuk menambahkan elemen
console.log(friends);
// Untuk mencari length
const newLength = friends.push('Jay');
console.log(newLength);

friends.unshift('John'); // Menambahkan elemen menjadi yang pertama
console.log(friends);

// Remove Elements
friends.pop(); // Menghapus element terakhir
const popped = friends.pop() // akan menampilkan elemen yang dihapus
console.log(popped);
console.log(friends);

friends.shift(); // Akan menghapus elemen pertama
console.log(friends);

// Ini akan mencari indeks
console.log(friends.indexOf('steven'));
console.log(friends.indexOf('Bob')); // output akan -1 karena error

// Inludes hasilnya akan boolean // Strict equality jadi akan dicheck tipe datanya juga
friends.push(23)
console.log(friends.includes('Bob'));
console.log(friends.includes('Steven'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

// Cara pakai include
if (friends.includes('Peter')) {
    console.log('You have a friend called Steven');
} 
*/

// Coding Challenge # 2
// Tip Calculator

const calcTip = (billValue) => {
    if (billValue >= 50 && billValue <= 300) {
        return billValue * 0.15;
    } else {
        return billValue * 0.2;
        
    }

    // Bisa juga menggunakan ternary operator
}
calcTip(100);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

// bonus
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
console.log(total);

// Introduction to Objects

// Contoh array
const 

