let nameArray = ['Shweta', 'Anushka', 'Gaurav', 'Neha', 'Ankita'];

// push -> Inserting a new element in array at the end
console.log(nameArray);
console.log('Pushing Aditya');
nameArray.push('Aditya');
console.log(nameArray);

// pop -> Deletes last element of an array

let lastElement = nameArray.pop();
console.log("Popped name - ",lastElement);
console.log(nameArray);

// reverse -> Reverses entire array
let revArray = nameArray.reverse();
console.log('Reversed array');
console.log(revArray);

// shift -> Removes the first element from array
console.log('Removing first element');
nameArray.shift()
console.log(nameArray);

// sort -> Arranges array in ascending order
nameArray.sort();
console.log('Sorting the array');
console.log(nameArray);

// insert element at start of an array
console.log('Unshift array with ankita');
nameArray.unshift('Ankita');
console.log(nameArray);

// Changing value in an array with map
nameArray = nameArray.map( name=> {
    if (name.endsWith('a')) {
        name = name + " Thakur"
    }
    return name.toUpperCase();
});

console.log(nameArray);