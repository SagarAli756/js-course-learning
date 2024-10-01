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


// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = {...obj1, ...obj2};
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course;

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]