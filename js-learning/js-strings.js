const name = "Sagar";
const age = 30;

// console.log(name + " is " + age + " years old.");  // this way is out of date
console.log(`Hello my name is ${name} and my age is ${age}`);  // this is modern way

const gameName = new String("SuperMario");

console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("i"));

const newString = gameName.substring(0, 6);
console.log(newString);

const newString2 = gameName.slice(-10, 4);
console.log(newString2);

const newString3 = "      Sagar    ";
console.log(newString3);
console.log(newString3.trim());

const url = "https://sagar.com/sagar%30ali";
console.log(url.replace("%30", "-"));
console.log(url.includes("sagar1"));





