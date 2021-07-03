let i = 0;
while (i<10) {
    // console.log("2 x ",i+1," = ",2*(i+1));
    // i++;
    i = i+1;
}

// Find number of digits in a given number.

let number = 24;
console.log("No. of digits in "+number+" is ");
let noOfDigits = 0;
while (number > 0) {
    number = Math.floor(number/10);
    noOfDigits++;
}
console.log(noOfDigits);


