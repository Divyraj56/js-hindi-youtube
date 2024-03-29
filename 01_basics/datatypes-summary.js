//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Memory Stack and Heap 
// Primitive = stack (copy) , Reference = heap (reference)

let name ="divyraj"
let name2 = name;

console.log(name2);

name2 = "abhishek"
console.log(name);
console.log(name2);

// reference

let myObj1 = {
    email:"fake@gmail.com",
    name:"bhaskar"
}

let myObj2 = myObj1;

console.log(myObj1)
console.log(myObj2)

myObj2.email= "desi123@gmail.com"

console.log(myObj1)
console.log(myObj2)

// obj2 ka value bhi change karoge to automatically 1 ka bhi hojayega.
