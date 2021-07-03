const n = 10;
let sum = 0;
for (let i = 2; i <= 2*n; i=i+2) {
    sum = sum + i;
}

console.log(sum);
let sum2 = 0;
for (let i = 1; i <= n; i++) {
    sum2 = sum2 + i*2;
}

console.log(sum2);