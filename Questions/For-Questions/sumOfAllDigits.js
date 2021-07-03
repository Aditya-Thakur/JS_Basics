let number = 1234;
let sum = 0;
for (let i = 0; i < 4; i++) {
  const last = number % 10;
    sum = sum + last;
    number = Math.floor(number/10);
}
console.log(sum);