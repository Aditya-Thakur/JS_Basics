function sum(a,b) {
    let sum = a + b;
    console.log('sum of ' + a + " and " + b + " = " + sum + ".");
}

sum(7,8);
// sum(47,8);
// sum(77,8);
// sum(7,48);

var varGlobal = 15;
let letLocal = 16;

function checkLocalGlobal() {
    var varGlobal = 4;
    let letLocal = 5;
    varGlobal++;
    letLocal++;
    console.log('Global '+ varGlobal);
    console.log('Local ',+letLocal);
}

checkLocalGlobal();
console.log('Global '+ varGlobal);
console.log('Local ',+letLocal);

function bigSum(a,b,c) {
    let sum = a+b+c;
    return sum;
}

let mySum = bigSum(1,2,3);

console.log("sum of 1,2 and 3 is "+mySum);

console.log("sum of 4,5 and 6 is "+bigSum(4,5,6));