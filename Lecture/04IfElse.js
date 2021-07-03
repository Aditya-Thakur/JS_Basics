let marks = 198;
// If example
if( marks > 60 && marks <= 100) {
    console.log('First Division');
}
if (marks > 33) {
    console.log('Pass');
}

if(marks > 100) {
    console.log('Invalid Marks');
}

// If Else 

if(marks > 33) {
    console.log('Congo! You passed');
} else {
    console.log('Oops! You failed. Try Again.');
}

// If else If

if (marks > 60) {
    console.log('You scored first division.');
} else if(marks > 45) {
    console.log('You scored second division');
} else if (marks > 33) {
    console.log('You scored 3rd division');
} else {
    console.log('you failed');
}

// If Else Ladder - nested if else

if(marks <= 100) {
    if(marks>33) {
        console.log('PAssssssssssss');
    } else {
        console.log('Failllllllll');
    }
} else {
    console.log('Invalid marks');
}


let didRahulPass = true;

if(didRahulPass) {
    console.log('Rahul passed');
} else {
    console.log('rahul failed');
}

let x = 19;
if(x==9) {
    console.log('x is 9');
} else {
    console.log('x is not 9');
}