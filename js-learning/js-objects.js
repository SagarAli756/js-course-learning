// singleton //
// Object.create // used when creating object from constructor

// object literals //

const JSUser = {
    name: "Sagar",
    "full name": "Sagar Ali",
    age: 30,
    city: "Karachi",
    email: "sagar@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Tuesday", "Sunday"]
}

// console.log(JSUser.city);  // 1st way to access object data
// console.log(JSUser["full name"]);  // 2nd way to access object data, preffered way

JSUser.email = "sagar@facebook.com";  // to change value inside object
// Object.freeze(JSUser);  // you can not change anything inside object if you apply freeze
JSUser.email = "sagar@microsoft.com";
// console.log(JSUser);

JSUser.greeting = function(){
    console.log("Hello JS user");
}
JSUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());