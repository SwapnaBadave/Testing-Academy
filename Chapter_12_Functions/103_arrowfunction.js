//arrow functions
const greet = function (name) {
    return name;
}   

let r= greet("Swapna");
console.log(r); //Swapna    

const greet1 = (name) => name; //arrow function
let r1= greet1("Swati");
console.log(r1); //Swati

// why arrow functions are used?
//1. less code
//2. no need to write function keyword
//3. no need to write return keyword if only one statement is there 

const doubleIt = n=> n+2;
console.log (doubleIt(10)); //12

const printIt= name => console.log(name);
//console.log(printIt("Swapna")); //Swapna
printIt("Swapna"); //Swapna
