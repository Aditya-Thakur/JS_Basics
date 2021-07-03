function biggestNumber(numArray) {
    let biggestNumber = numArray[0];
    for (let i = 1; i < numArray.length; i++) {
        const element = numArray[i];
        if(element > biggestNumber ){
            biggestNumber = element;
        }
    }
    console.log(biggestNumber);
}

function smallestNumber(numArray) {
    let smallestNumber = numArray[0];
    for (let i = 1; i < numArray.length; i++) {
        const element = numArray[i];
        if(element < smallestNumber){
            smallestNumber = element;
        }
    }
    console.log(smallestNumber);
}
function sumOfNumbers(numArray){
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        const element = numArray[i];
         sum = sum + element;
    }
    console.log("Sum of all element is " + sum);
}
function multiplicationOfNumbers(numArray){
    let multiply = 1;
    for (let i = 0; i < numArray.length; i++) {
        const element = numArray[i];
         multiply = multiply * element;
    }
    console.log("Multiply of all element is " + multiply);
}

// let myArray = [12,14,32,4,84,78,19,3,25,-1];
let myArray = [4,3,2,5,8,9,6,7,1];
biggestNumber(myArray);
smallestNumber(myArray);
sumOfNumbers(myArray);
multiplicationOfNumbers(myArray);