// to store data in memory we use variables and constants
// constant (const) means if i declare it once then i can't change it
// variable (var) means that can be changed later on
// variable (var) is not used as much, only constant (const) and let are used mostly
// scope means anything inside curly braces {}

const accountId = 43287655;
let accountEmail = "sagar@gmail.com";
var accountPassword = "123456";  // prefer not to declare variable using var
accountCity = "Karachi";  // not a preffered way to declare variable
let accountState;  // this will give undefined

// accountId = 675;
accountEmail = "s@s.com";
accountPassword = "123";
accountCity = "Lahore";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

