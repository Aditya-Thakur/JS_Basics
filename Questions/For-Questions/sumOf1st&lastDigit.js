let number = 4567;

const lastDigit = number % 10;
const firstDigit = Math.floor(number/1000);
console.log(lastDigit + firstDigit);