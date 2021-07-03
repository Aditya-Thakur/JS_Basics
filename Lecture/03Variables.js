let a = 6; //Number
var b = 8;
const c = 9;
let firstName = "Shweta"; //String
let lastName = "Thakur";

let isPassed = true //boolean

console.log("Hi I am "+ firstName +" " + lastName + " and I am " + (a+b) + " years young.");
// a = a + 1; method one of increment
a++; // method two of increment 
console.log("checking let: ",a);
b = b + 1;
console.log("checking var: ",b);
// c = c + 1;   --> Assignment to constant variable is not allowed.
console.log("checking const: ",c);

// ----------------------------------------------------------------------------------

// Array

let arrayOfNumbers = [1,2,3,4,5];

console.log(arrayOfNumbers);

let arrayOfString = ["Aditya", "Rahul", "Neha", "Richa"];

console.log(arrayOfString);

let mixArray = ["aditya", 21, "Richa", 22];

console.log(mixArray);

console.log(mixArray[0]);
console.log(mixArray[3]);
