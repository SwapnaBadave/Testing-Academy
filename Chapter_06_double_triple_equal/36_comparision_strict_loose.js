//number== string
console.log(5 == "5"); // Output: true (loose equality, type coercion occurs)
console.log(5 === "5"); // Output: false (strict equality, no type coercion)

console.log(5===5); 
console.log(5=="5");

console.log (5==5); 
console.log(5=="5");


console.log(0== ""); // Output: true (loose equality, type coercion occurs)
console.log(0 === ""); // Output: false (strict equality, no type coercion)

console.log (false == 1); // Output: true (loose equality, type coercion occurs)
console.log(false === 0);    // Output: false (strict equality, no type coercion)
console.log(true == 2); // Output: true (loose equality, type coercion occurs)
console.log (true === "1"); // Output: false (strict equality, no type coercion)