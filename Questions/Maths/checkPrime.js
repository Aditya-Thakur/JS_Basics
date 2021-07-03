let num = 12;
let isPrime = true;
for (let i = 2; i <= num/2; i++){
   if (num % i == 0) {
       isPrime = false;
       break;
   }
}
if (isPrime) {
    console.log(num + " is prime.");
} else {
    console.log(num + " is not prime.");
}
