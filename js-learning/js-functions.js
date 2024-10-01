function myName() {
    console.log("S");
    console.log("a");
    console.log("g");
    console.log("a");
    console.log("r");
};
// myName();

function addTwoNumbers(num1, num2) {
    // console.log(num1 + num2);
    let result = num1 + num2;
    return result;
};
// addTwoNumbers(7, 9);
const result = addTwoNumbers(60, 40);
// console.log("Result is:", result);

function loginUserMessage(username = "Ali") {
    // if(username === undefined | username === "") {
    if(!username) {
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
};
// console.log(loginUserMessage("Sagar"));

function calculateCartPrice(...num1) {
    return num1;
};
// console.log(calculateCartPrice(5, 50, 500, 5000));

const user = {
    username: "Sagar",
    price: 299
};

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
};
// handleObject(user);
handleObject({
    username: "Andy",
    price: 499
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
};

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

