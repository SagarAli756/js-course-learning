const myArray = [0, 1, 2, 3, 4, 5, 6, false, "Sagar"]
// console.log(myArray);
// console.log(myArray[7]);

const myArray2 = new Array(10, 20, 30, 40);
// console.log(myArray2);


// array methods //

// myArray.push(7, 8);
// myArray.pop();
// myArray.unshift(64);  // it will add that value at the start of an array
// myArray.shift();
// console.log(myArray);

// console.log(myArray.includes(4));
// console.log(myArray.indexOf(5));

const newArray = myArray.join();  // it will convert array's type from object to string
// console.log(myArray);
// console.log(newArray);

// slice and splice //

// console.log("A ", myArray);

const myn1 = myArray.slice(1, 3);

// console.log(myn1);
// console.log("B ", myArray);


const myn2 = myArray.splice(1, 3);
// console.log("C ", myArray);
// console.log(myn2);


const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["batman", "superman", "flash"];

const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);


const allNewHeros = [...marvel_heros, ...dc_heros];  // use of spread to combine multiple arrays
// console.log(allNewHeros);

const anotherArray = [1, 2, 3, 4, [5, 6, 7], 8, 9, 10, [11, 12, 13], [14, 15, [16, 17, 18]]];
const realAnotherArray = anotherArray.flat(Infinity);
// console.log(realAnotherArray);

// console.log(Array.isArray("SagarAli"));
// console.log(Array.from("SagarAli"));  // to convert string into array

let score1 = 256;
let score2 = 396;
let score3 = 470;
let score4 = 960;

console.log(Array.of(score1, score2, score3, score4));








