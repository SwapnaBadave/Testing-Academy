console.log (null >= 0) // Output: true 
// (null is coerced to 0, and 0 >= 0 is true)
console.log (null === 0) // Output: false 
// (strict equality, no type coercion)



//Nullish coalescing operator (??) is a logical operator that returns the right-hand side operand when the left-hand side operand is null or undefined, and otherwise returns the left-hand side operand.

let a = null;
let b = a ?? "default value";
console.log(b); // Output: "default value"

let amul= null;
let milk_required= amul ?? 'nandini milk';
console.log(milk_required); // Output: "nandini milk"

let amul= "Amul Milk";// if amul is not null or undefined, it will return amul, 
// otherwise it will return 'nandini milk'
let milk_required= amul ?? 'nandini milk';
console.log(milk_required); // Output: "Amul Milk"