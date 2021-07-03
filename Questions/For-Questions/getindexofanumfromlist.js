let numList = [11,24,23,44,5,24,61,7,18,9];

//Find index of x if exists otherwise print - "x Doesn't exists"

let x = 2;
let doesExist = false;
for (let i = 0; i < numList.length; i++) {
    const element = numList[i];
    if (element == x ){
        console.log(i);
        doesExist = true;
    } 
}
if (!doesExist) {
    console.log(x+" doesn't exist");
}