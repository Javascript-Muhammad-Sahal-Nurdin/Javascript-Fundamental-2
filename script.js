/** @format */

/////////////////////////////////////////////////////////////////////
// Activating Strict Mode
// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true; // ada bug (kurang s)
// if (hasDriversLicense) console.log('I can drive ');

// const interface = 'Audio'; // error (reserved word)
// const private = 534;   //error (reserved word)
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// Functions
// Funstions is piece a code yang dapat digunakan berkali-kali.

// function logger() {
//   console.log("My name is Jonas");
// }

// logger(); // invoke or calling or running the functions
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   di samping namanya parameter
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice; // return any value
// }

// const appleJuice = fruitProcessor(5, 0); // Di samping namanya arguments
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console
// function describeCountry(country, population, capitalCity) {
//   const describe = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return describe;
// }

// const country1 = describeCountry(
//   prompt("Masukkan nama country: "),
//   prompt("Masukkan banyak population: "),
//   prompt("Masukkan nama capital city: ")
// );
// const country2 = describeCountry(
//   prompt("Masukkan nama country: "),
//   prompt("Masukkan banyak population: "),
//   prompt("Masukkan nama capital city: ")
// );
// const country3 = describeCountry(
//   prompt("Masukkan nama country: "),
//   prompt("Masukkan banyak population: "),
//   prompt("Masukkan nama capital city: ")
// );
// console.log(country1);
// console.log(country2);
// console.log(country3);

/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// Functions Declarations vs Expressions

// Function Declarations
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(2003);
// console.log(age1);

// Function expressions
// anonymus function as expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear; // Functions with Expressions
// };
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// The different
// kita bisa panggil function delarations sebelum di definisikan
// const age1 = calcAge1(2003);

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// Namun tidak bisa dengan Functions Expression. Jadi untuk penggunaannya kita lebih ke fuction expressions. sama saja lebih ke preferensi masing-masing
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)
// function percentageOfWorld1(country, population) {
//   const calculatedPercentage = (population / 7900) * 100;
//   return `${country} has ${population} million people, so it's about ${calculatedPercentage}% of the world population`;
// }
// const country1 = percentageOfWorld1(
//   prompt("Masukkan nama country: "),
//   Number(prompt("Masukkan banyak population: "))
// );
// const country2 = percentageOfWorld1(
//   prompt("Masukkan nama country: "),
//   Number(prompt("Masukkan banyak population: "))
// );
// const country3 = percentageOfWorld1(
//   prompt("Masukkan nama country: "),
//   Number(prompt("Masukkan banyak population: "))
// );
// console.log(country1);
// console.log(country2);
// console.log(country3);

// const percentageOfWorld2 = function (country, population) {
//   const calculatedPercentage = (population / 7900) * 100;
//   return `${country} has ${population} million people, so it's about ${calculatedPercentage}% of the world population`;
// };

/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// Arrow Function
// Arrow function digunakan sebagai mempersingkat penulisan fuction

// Tradisional Function
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear; // Functions with Expressions
// };
// With arrow function (satu parameter dengan 1 logic)
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(2003);
// console.log(age3);

// Arrow function satu parameter namun banyak logics
// const yearUntilRetirement = (birthYear) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };
// console.log(yearUntilRetirement(2003));

// Arrow function sama dengan 2 atau lebih
// const yearUntilRetirement2 = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearUntilRetirement2(2003, "Sahal"));

// Kekurangan menggunakan arrow function ini adalah tidak bisa menggunakan 'this' keyword
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'
const percentageOfWorld3 = (population) => {
  const calculatedPercentage = (population / 7900) * 100;
  return calculatedPercentage;
};

/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// Functions calling other functions
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// Dengen menggunakan arrow function maka code di atas akan menjadi
// const cutFruitPieces = (fruit) => fruit * 4;
// const fruitProcessor = (apples, oranges) => {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//   return juice;
// };

// console.log(fruitProcessor(4, 3));
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

function describePopulation(country, population) {
  const percentage = percentageOfWorld3(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
  return description;
}

const Indonesia = describePopulation("Indonesia", 280);
const China = describePopulation("China", 1441);
const Singapore = describePopulation("Singapore", 5);
console.log(Indonesia, China, Singapore);
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// Reviewing Functions

// const calcAge = function age(birthYear) {
//   return 2037 - birthYear;
// };

// const yearUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1; // Ini adalah simbol default kesalahan yang sering digunakan dalam programming
//   }
// };

// console.log(yearUntilRetirement(2003, "Sahal"));
// console.log(yearUntilRetirement(1950, "Jonas"));
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// Coding Challenge #1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);
// function checkWinner(avgDolphins, avgKoalas) {
//   // Urutan penempatan dari parameter ini berpengaruh postikan tidak tertukar.

//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("both team are draw");
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(666, 333);
//  Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// Introduction Array

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// Bundle variabel di atas menjadi array (big container)
// Deklarasi array secara umum
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// Deklarasi Array juga bisa seperti berikut
// const years1 = new Array(1991, 1984, 2000, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// Length ini akan mengambil banyak elemen di dalam array, dihitung dari 1

// console.log(friends.length);
// console.log(friends[friends.length - 1]); // Kenapa -1 karena array di sini bukan zero based untuk menghitung banyaknya length
// array tidak bisa menerima statement di dalam kurung

// friends[2] = "Jay";
// console.log(friends); // array bisa diubah dan bukan immutable
// Bisa di mutate
// friends = ["Bob", "Alice"]; // error kalo di deklarasikan ke constant

// di js array dapat berisi macam2 tipe data
// const firstName = "Sahal";
// const sahal = [firstName, "Nurdin", 2037 - 2003, "Student", friends];
// console.log(sahal);
// console.log(sahal.length);

// Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years)); // Hasilnya adalah NaN maka array tidak bisa dioperasikan seperti ini, bisanya satu-satu

// Berikutnya adalah caranya
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]); // Ini akan memilih elemen terakhir

// console.log(age1, age2, age3);

// Ini akan work
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// Basic Array Operations (Methods)

// Add elements
// const friends = ["Michael", "Steven", "Peter"];
// friends.push("Jay"); // Push adalah Function yang dipanggil untuk menambahkan elemen
// console.log(friends);

// Untuk mencari length
// const newLength = friends.push("Jay");
// console.log(newLength);

// friends.unshift("John"); // Menambahkan elemen menjadi yang pertama
// console.log(friends);

// Remove Elements
// friends.pop(); // Menghapus element terakhir
// const popped = friends.pop(); // akan menampilkan elemen yang dihapus
// console.log(popped);
// console.log(friends);

// friends.shift(); // Akan menghapus elemen pertama
// console.log(friends);

// Ini akan mencari indeks
// console.log(friends.indexOf("steven"));
// console.log(friends.indexOf("Bob")); // output akan -1 karena error

// Inludes hasilnya akan boolean // Strict equality jadi akan dicheck tipe datanya juga
// friends.push(23);
// console.log(friends.includes("Bob"));
// console.log(friends.includes("Steven"));
// console.log(friends.includes("23"));
// console.log(friends.includes(23));

// Cara pakai include
// if (friends.includes("Peter")) {
//   console.log("You have a friend called Steven");
// }
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// Coding Challenge # 2
// Tip Calculator

// const calcTip = (billValue) => {
//     if (billValue >= 50 && billValue <= 300) {
//         return billValue * 0.15;
//     } else {
//         return billValue * 0.2;

//     }

// Bisa juga menggunakan ternary operator
// }
// calcTip(100);

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

//   bonus
// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
// console.log(total);
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// Introduction to Objects

// Contoh array
// const jonasArray = [
//   "Jonas",
//   "Schemedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];
// console.log(jonasArray);

// Dalam bentuk objecknya (Key; Property (atau biasa disebut value)
// Urutan dalam object adalah TIDAK PENTING
// const jonasObject = {
//   firstname: "Jonas",
//   lastname: "Schemedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonasObject);
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// Dot vs Bracket Notation
// Di sini akan mempelajari mengabil dan mengakses dari object
// harus menggunakan bracket harus menggunakan real value

// DOT
// console.log(jonasObject.lastname);

// BRACKET
// console.log(jonasObject['lastname']);

// Jika ingin melakukan operasi menggunakan bracket maka harus menggunakan real key dari object tersebut
// const nameKey = 'name';
// console.log(jonasObject['first' + nameKey]);
// console.log(jonasObject['last' + nameKey]);

// JIKA MENGGUNAKAN DOT AKAN ERROR
// console.log(jonasObject.'last' + nameKey); // error
// JADI KITA TIDAK BISA MENGGUNAKAN DOT HARUS MENGGUNAKAN BRACKET
// KAPAN SAAT KITA MELAKUKAN DOT DAN BRACKET, KETIKA KITA INGIN MELAKUKAN SUATU OPERASI MAKA KITA HARUS MENGGUNAKAN BRACKET SEDANGKAN JIKA KITA HANYA INGIN MEMANGGIL NAMA DARI SUATU PROPERTY MAKA KITA BISA MENGGUNAKAN OBJECT

// Sekarang kita akan mencari key dari jonasObject dengan menggunakan prompt

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastname, age, job, and friends')

//console.log(jonasObject[interestedIn]);

// Kita juga bisa menggunakan dalam if else karena ini bentuknya trusly and falsy

// if (jonasObject[interestedIn]) {
//     console.log(jonasObject[interestedIn]);
// } else {
//     console.log('Wrong answer! Choose between firstName, lastName, age, job, and friends');
// }

// Sekarang kita akan menambahkan elemen ke object
// jonasObject.location = 'Portugal';
// jonasObject['twitter'] = '@jonassschemtmann';
// console.log(jonasObject);

// Challenge : kita harus menampilkan output berikut
//  "Jonas" has 3 friends, and his best friend is called "Michael"
// console.log(`${jonasObject.firstname} has ${jonasObject.friends.length} friends, and his best friend is called ${jonasObject.friends[0]}`);
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// Object Methods

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schemedtmann",
//   birthYeah: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriverLicense: true,

//      Object Method menggunakan fuction expression
//   calcAge: function (birthYeah) {
//     return 2037 - birthYeah;
//   },

//      Menggunakan this karena agar code tetap DRY
//   calcAge: function () {
//     console.log(this);
//     return 2037 - this.birthYeah;
//   },

//      this ini berfungsi untuk menggantikan object dari jonas, jadi this.age sama saja dengan jonas.age
//   calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${
//       this.firstName
//     } is a ${this.calcAge()}-year old tacher, and he has ${
//       this.hasDriverLicense
//     } driver's license`;
//   },
// };

//  Challenge
//  harus print seperti berikut ini "Jonas is a 46-year old teacher, and he has a driver's license"
// console.log(jonas.getSummary()); // Untuk memanggil method lalu maka harus menggunakan () beda dengan variabel dengan yang digunakan tanpa () seperti di bawah

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// CODING CHALLENGE #3
/*
let's go back to Mark and John comparing their BMIs! This time, lets  use objects to implement the calculations! Remember: BMI = mass /height ** 2 = mass / (height*height). (Mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method an each object to calculate the BMI (the same method on both objects). Store the BMI Value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

TEST DATA: Marks weight 78 kg and is 1.69 m tall. John weight 92 kg and is 1.95 m tall.

 */

// Solutions:

// const bmiMark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const bmiJohn = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// bmiMark.calcBMI();
// bmiJohn.calcBMI();
// console.log(bmiJohn.bmi, bmiMark.bmi);

// if (bmiMark.bmi > bmiJohn.bmi) {
//   console.log(
//     `${bmiMark.fullName}'s BMI (${bmiMark.bmi}) is higher than ${bmiJohn.fullName}'s (${bmiJohn.bmi})!`
//   );
// } else if (bmiMark.bmi < bmiJohn.bmi) {
//   console.log(
//     `${bmiJohn.fullName}'s BMI (${bmiJohn.bmi}) is higher than ${bmiMark.fullName}'s (${bmiMark.bmi})!`
//   );
// }
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// Iteration: The for Loop
// FOR LOOP MENGGUNAKAN DEKLARASI LET
// FOR LOOP KEEP RUNNNING WHILE CONDITION IS TRUE

// for (let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weight repetition ${rep} 🏋️‍♂️`);
// }

/////////////////////////////////////////////////////////////////////
// Looping Arrays, Breaking and Continuing
// const jonas = [
//   "Jonas",
//   "Schemedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];
// const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// ...
// console.log(jonas[4]);

// for (let i = 0; i < jonas.length; i++) {
// READING FROM JONAS ARRAY
//   console.log(jonas[i], typeof jonas[i]);

// FILLING TYPES ARRAY PASTIKAN DITULIS DI BAWAH READING ARRAY
// types[i] = typeof jonas[i];
// CARA YANG DI BAWAH LEBIH BERSIH:
//   types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// CONTINUE AND BREAK
// console.log("---ONLY STRINGS---");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log("---BREAK WITH NUMBERS---");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;
//   console.log(jonas[i], typeof jonas[i]);
// }
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// Looping Backwards and Loops in Loops
// const jonas = [
//   "Jonas",
//   "Schemedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// 0, 1, ..., 5
// 4, 4, ..., 0

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Strating exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
//   }
// }

// The while Loop

// for (let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weight repetition ${rep} 🏋️‍♂️`);
// }

// THE WHILE LOOP LEBIH FLEXIBLE KARENA KITA HANYA PERLU MEMERHATIKAN KONDISI SELAMA KONDISI TERSEBUT ADALAH BENAR MAKA LOOP PERLU DIJALANKAN (TIDAK TERGANTUNG VARIABEL COUNTER APAPUN)
// JADI KITA TIDAK TAHU BERAPA PERULANGAN AKAN DILAKUKAN MAKA KITA GUNAKAN WHILE
// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weight repetition ${rep} 🏋️‍♂️`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6)console.log('Loop is about to end ..');
// }

// Coding Challenge #4
/*
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a forloop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays 

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together
4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK 

*/

// SOLUTIONS
// const calcTip = (bill) => {
//     return bill >= 50 && bill <= 300 ?  bill * 0.15 :  bill * 0.2;
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = []
// const totals = []

// for (let i = 0; i < bills.length; i++){
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// BONUS SOLUTION
// const calcAverage = arr => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
// sum = sum + arr[i];
//         sum += arr[i];
//     }
//      return sum / arr.length;
// }
// console.log(calcAverage([2,3,7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
