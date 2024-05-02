/*
let country = "India"
let continent = "Asia"
let population = 1417; // In million

console.log(country);
console.log(continent);
console.log(population);

let IsIsland = false;
let languase;

console.log(typeof IsIsland);
console.log(typeof country);
console.log(typeof population);
console.log(typeof langause);


langause = 'hindi';
const country = 'India';
const continent = 'Asia';
const isIsland = false;
isIsland = true;
*/

let country = 'India';
let population = 1417; // in millions
let continent = 'Asia';
let language = 'Hindi';
let hindiSpeakingPopulation = 623.48; // in millions

// Calculate the population in each half if the country splits
console.log("Population per half if the country splits:", population / 2);

// Increase the population by 1 and log the result
population++;
console.log("Increased population:", population);

// Compare the population with Finland (6 million) and log the result
const finlandPopulation = 6;
console.log("Does the country have more people than Finland?", population > finlandPopulation);

// Compare the population with the average country population (33 million) and log the result
const averagePopulation = 33;
console.log("Does the country have less people than the average country?", population < averagePopulation);

// Create description using variables and log it
const description =
  country +
  ' is in ' +
  continent +
  ', and its ' +
  population +
  ' million people, out of which ' +
  hindiSpeakingPopulation.toFixed(2) +
  ' million speak ' +
  language;

console.log(description);




























