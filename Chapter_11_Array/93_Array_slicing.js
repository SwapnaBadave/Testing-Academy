//array slice

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Slice from index 1 to 3 (not including index 3)
let slicedFruits = fruits.slice(1, 3);  
console.log(slicedFruits); // Output: ["banana", "cherry"]

// Slice from index 2 to the end of the array
let slicedFruits2 = fruits.slice(2);  
console.log(slicedFruits2); // Output: ["cherry", "date", "elderberry"]