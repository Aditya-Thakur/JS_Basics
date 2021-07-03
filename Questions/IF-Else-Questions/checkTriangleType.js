// check if a triangle is equilateral, scalene or isoscles. given 3 sides.
let a = 90
let b = 90
let c = 45
if(a == b && b == c ){
    console.log("Equilateral triangle");
}
if(a != b && b != c && a!=c){
    console.log("Scalene triangle");
}
if((a==b && b!=c) || (a==c && b!=c)){
    console.log("Isoscles triangle");
}