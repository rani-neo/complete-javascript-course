/*
let js = 'amazing';
  console.log(40 + 8 + 23 - 10);
  

 console.log("Rashmi");

console.log(40);

let firstName = "Ishaan";



console.log(firstName);

console.log(firstName);

console.log(firstName);



let rashmi_ishaan = "RI"

let $function = 27;

let person = 'jones'

let PI = 3.1415;



let myFirstJob = "Admin";

let myCurrentJob = "DevOps";

console.log(myFirstJob);




let = true;
let javascriptIsFun = true;
console.log(javascriptIsFun);
 
//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Rashmi');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;

//const job;

var job = 'admin';
job = 'DevOps'
lastname = 'Rani';
console.log(lastname);

//math operator
const now = 2024;
const ageRashmi = now - 1980;
const ageIshaan = now - 2013;

console.log(ageRashmi, ageIshaan);
console.log(ageRashmi * 2, ageRashmi / 10, 2 ** 3);
// 2 ** means 2 to the power of 3 = 2 * 2 * 2 *

const firstName = 'Rashmi';
const lastName = 'Rani';

console.log(firstName + ' ' + lastName);

//assignment operator
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 
x--; // Decrement x by 1, so x = 100
x--; // Decrement x by 1 again, so x = 99
console.log(x); 

//comparison operator
console.log(ageRashmi > ageIshaan); // >, <, >=, <=
console.log(ageIshaan >= 12);

const isFullAge = ageIshaan >= 12;
console.log(now - 1980 > now - 2013);

const now = 2024;
const ageRashmi = now - 1980;
const ageIshaan = now - 2013;

console.log(now - 1980 > now - 2013);

let x, y; 
x = y = 25 - 10 - 5; //x = y = 10, x = 10
console.log(x,y)

const averageAge = (ageRashmi + ageIshaan) / 2
console.log(ageRashmi, ageIshaan, averageAge);


//const massMark = 78;
//const heightMark = 1.69;
//const massJohn = 92;
//const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;


const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn
console.log(BMIMark, BMIJohn, markHigherBMI);
*/
//const massMark = 95;
//const heightMark = 1.88;
//const massJohn = 85;
//const heightJohn = 1.76;//

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn
console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
  console.log(`"Mark's BMI (${BMIMark}) is higher than JOhn's! (${BMIJohn})!"`)
} else {
  console.log(`"John's BMI  (${BMIJohn}) is higher than Mark's! (${BMIMark})!"`)
}