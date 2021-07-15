/* Everything in Javascript is an object*/

var obj= "JS_Basics";

console.log(obj.length); //returns length of the string
console.log("Lets do one thing "+obj.__proto__); //returns String.prototype
console.log(obj.__proto__ == String.prototype); //returns True 
console.log(obj.__proto__.__proto__ == String.prototype.__proto__); // return true 
console.log(obj.__proto__.__proto__== Object.prototype);
console.log(Object.prototype.__proto__) //returns null, you dont have anything next to Object, this proves everything in Javascript is an object

let object = {
    name: "Ben",
  
    address: "Omniverse",
    getIntro: function (params) {
      console.log("Hello I am " + this.name + " " + this.address);
    },
  };
  
  object.getIntro();
console.log(object.__proto__); //returns Object.prototype
console.log(object.getIntro().__proto__); //returns undefined
console.log(object.__proto__.__proto__); // returns null

let arr = [1, 2, 3];

console.log(arr.__proto__);
//proto is the object here and it has several properties the above is same as
console.log(arr.__proto__ == Array.prototype);

//Since __proto__ is an object and every object in javascript has a prototype
//and when you do

console.log(arr.__proto__.__proto__); //prototype chaining
//which is same as
console.log(Object.prototype);

//but
console.log(arr.__proto__.proto__.proto__ == null);
//because Object.prototype.prototype does not exit and its null, this is the end
//of prototype chaining

//lets try it out it with the object we created

console.log(object.__proto__);
//gives us Object.prototype, because we have created an object here.
//Now when we try to do
console.log(object.__proto__.__proto__);
//the above gives us null, as Object.prototype.prototype is null

//Similarly for a function

function myFun() {
  console.log("Just a function");
}
console.log(myFun.__proto__ == Function.prototype);

console.log(myFun.__proto__.__proto__ == Object.prototype);

//Conclusion: Everything in javascript is an Object



//Another Example

let myNewObject={name:"Satya",
place:"Hyderabad", 
getIntro:function()
{return "Hello my name is "+this.name+ " from "+this.place);
}}

let childObject={name:"Sitaram", class:"1"}

//You should never do this
childObject.__proto__=myNewObject;
console.log(childObject.place);
//it returns Hyderabad, also it attaches prototype object of myNewObject which is nothing but Object.prototype
//so next time when you do this childObject.__proto__.__proto__ doesnt return you null like in other object cases, it returns Object.prototype

//childObject is checking if the property exists in its own object if it doesn't find it doesn't return null
//it is going search for it in its parent.

//Scenario
childObject.getIntro();
//output
// "Hello My Name is Sitaram from Hyderabad";

// this inside the getIntro method, even though is inside myNewObject, but it points childobject
// and when the getIntro method requests for name, javascript looks it inside prototype chain, since our prototype chain has been assigned to childObject, first if not found
// then seaches through parentObject.