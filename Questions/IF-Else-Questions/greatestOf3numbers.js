let a = 45
let b = 56;
let c = 234;

// Find greatest of three numbers.
if(  b > c && b > a){
    console.log(b + " is greatest in "+ a + ", "+ b +" and "+c );
}
if(  a > b && a > c){
    console.log(a + " is greatest in "+ a + ", "+ b +" and "+c );
}
if( c > a  && c > b){
    console.log(c + " is greatest in "+ a + ", "+ b +" and "+c );
}

if(a > b) {
    if(a>c) {
        console.log(a + " is greatest in "+ a + ", "+ b +" and "+c );
    } else {
        console.log(c + " is greatest in "+ a + ", "+ b +" and "+c );
    }
} else {
    if(b>c) {
        console.log(b + " is greatest in "+ a + ", "+ b +" and "+c );
    }
}
