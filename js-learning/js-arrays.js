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

console.log("A ", myArray);

const myn1 = myArray.slice(1, 3);

console.log(myn1);
console.log("B ", myArray);


const myn2 = myArray.splice(1, 3);
console.log("C ", myArray);
console.log(myn2);





