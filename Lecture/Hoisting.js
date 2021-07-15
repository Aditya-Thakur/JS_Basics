// Hoisiting is a very confusing and yet important concept in JavaScript
console.log(basics); //undefined
console.log(myFunction); //function definition

var basics = "This is Javascript Basics";
var justAnotherFunction = () => {
  console.log("Function Expression");
};
function myFUnction() {
  console.log("Function Expression");
}

//Now let's use let and const

console.log(letHoisting); //Reference Error
console.log(constHoisting); // Reference Error
let letHoisting = "Let Hoisting";
const constHoisting = "Const Hoisting";

/* Take Away
Javascript executes code into two phases 
1. Compilation
2. Execution

During the Compilation javascript scans for 
let, const, var, function and class keywords and allocates a unique space in memory for each declared
This process of lifting the variable and giving it space in memory is called Hoisting
During compilation phase declared variables and functions are stored in memory before the rest of your code
 is read, but they do not move to the top of their scope.
 When javascript discovers let and const, they are hoisted but not initialised.
  These variables get intialized only during runtime. The time between thee variables being 
  declared and being evaluated is called Temporal Dead Zone, when you try ya to access these variables within this zone, you get reference error.
*/
