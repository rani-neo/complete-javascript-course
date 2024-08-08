'use scrict';
/*
function describeCountry(country, population, capitalCity) {
 return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
const descGermany = describeCountry('Germany', 83, 'Berlin');
const descFinland = describeCountry('Finland', 6, 'Helsinki');

console.log(descPortugal,descGermany,descFinland);



function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);

console.log(percPortugal1, percChina1, percUSA1);


// Arrow function

const percentageOfWorld3 = population => (population / 7900) * 100;
const percPortugal3 = percentageOfWorld3(10);

const percPortugal1 = percentageOfWorld3(10);
const percChina1 = percentageOfWorld3(1441);
const percUSA1 = percentageOfWorld3(332);
console.log(percPortugal1, percChina1, percUSA1);
*/
function percentageOfWorld1(population) {
  const worldPopulation = 7900; // in millions
  return (population / worldPopulation) * 100;
}
const describePopulation = function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country}has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);
}
describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);