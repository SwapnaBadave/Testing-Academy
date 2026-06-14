//combine array

let a =[1,2];
let b =[3,4];

// we can combine two arrays using concat method
let c = a.concat(b);
console.log(c);

// let c=a+b;
// console.log(c); // it will convert the array 
// // into string and then combine it

//spred or modern way to combine two arrays
let d = [...a, ...b];
console.log(d);

//Join
let s= ["hello", "world"].join(" |");
console.log(s);