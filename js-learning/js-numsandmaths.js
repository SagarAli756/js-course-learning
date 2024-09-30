// Numbers //

const score = 786;
console.log(score);

const balance = new Number(2498);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const num = 736.7654;
console.log(num.toPrecision(4));

const hundreds = 2000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString("en-IN"));


// Math //

console.log(Math.abs(-87));
console.log(Math.round(90.7));
console.log(Math.ceil(65.3));
console.log(Math.floor(65.9));
console.log(Math.min(8, 9, 0, 4, 7));
console.log(Math.max(8, 9, 0, 4, 7));
console.log(Math.random());
console.log(Math.random()*10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

