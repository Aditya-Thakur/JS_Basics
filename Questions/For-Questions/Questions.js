// 1. Print 1 to 15 numbers
// 2. Print 10 to 1 numbers
// 3. Sum of first n even numbers
// 4. Sum of first & last digit of number
// 5. Sum of all digits of number
// 6. Print reverse of a number

// let number = 7859;
// let reverseNumber = 0;
// for (let i = 0; i < 4; i++) {
//     const digit = number % 10;
//     number = Math.floor(number/10);
//     reverseNumber = reverseNumber*10 + digit;
// }
// console.log(reverseNumber);


let num = 7894;
let revNum = 0;
while (num>0) {
    const digit = num % 10;
    revNum = revNum*10 + digit;
    console.log(revNum);
    num = Math.floor(num/10);
}

console.log(revNum);