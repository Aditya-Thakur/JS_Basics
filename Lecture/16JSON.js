// JSON - JavaScript Object Notification

var person = {
    "name": "Aditya",
    "age": 23,
    "isStudent": false,
    "address": ["32 Pivot Strt, New York", "115 Baker St, London"]
}
// priniting obj

console.log(person);

// To get name of person
console.log(person.name);

//To get name - 2nd way
console.log(person["name"]);

// To check if given person is student then provide concession

if(person.isStudent) {
    console.log(person.name + " is eligible for discount.");
} else {
    console.log(person.name + " is not eligible for discount");
}