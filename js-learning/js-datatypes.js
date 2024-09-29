// how the data is put in memory and accessed on that basis there are two categorizations 
// of data types 1. primitive and 2. non-primitive
// primitive data types are called by value
// primitive data types include, string, number, boolean, null, undefined, symbol, bigint
// non primitive data types are called by reference allocated in the memory
// non primitive data types include, array, object, function

"use strict";  // treat all JS code as newer version
// alert(4+4);  // this way of calling alert is used in browser from console, not in nodejs

let name = "Sagar";  // string datatype
let age = 30;  // number datatype
let isLoggedIn = true;  // boolean datatype
const id = Symbol("1234");
const id2 = Symbol("1234");
// console.log(id === id2);


// data types
// number => 2 to power of 53
// bigint
// string
// boolean
// null => standalone value
// undefined
// symbol => used for uniqueness
// object

// console.log(typeof 78);  // typeof is used to find the data type

// console.log(typeof null);  // output will be object because it is a object in javascript
// console.log(typeof undefined);  // output will be undefined because it is a type in javascript

// stack and heap //
// stack is used with all the primitive data types
// heap is used with all the non primitive data types

let myChannelName = "sagardotcom";
let anotherName = myChannelName;
anotherName = "sagarali"
// console.log(myChannelName);
// console.log(anotherName);

let user1 = {
    email: "user1@gmail.com",
    upi: "user1upi@gmail.com"
}

let user2 = user1;

user2.email = "sagar@gmail.com";

console.log(user1.email);
console.log(user2.email);

