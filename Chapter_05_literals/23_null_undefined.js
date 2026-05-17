// null vs undefined in JavaScript

// undefined means a variable has been declared but not assigned a value.
let a;
console.log("a:", a); // undefined
console.log("type of a:", typeof a); // "undefined"

// null means a variable is intentionally set to have no value.
let b = null;
console.log("b:", b); // null
console.log("type of b:", typeof b); // "object" (this is a known JavaScript quirk)

// Simple difference:
// - undefined is the default value when something is missing or not initialized.
// - null is a value that means "no value" or "empty value" by design.

// Example: function returns undefined when no return value is provided.
function greet(name) {
  console.log("Hello, " + name);
}

const result = greet("Alice");
console.log("result:", result); // undefined

// Example: null is used when you want to clear a variable intentionally.
let selectedOption = "Option 1";
selectedOption = null; // now it intentionally has no value
console.log("selectedOption:", selectedOption);

// Important note:
// undefined often means "not set yet".
// null means "set to nothing".

// Comparison examples:
console.log("a === undefined:", a === undefined); // true
console.log("b === null:", b === null); // true
console.log("a == b:", a == b); // true, because == does type-converting comparison
console.log("a === b:", a === b); // false, because === checks both type and value
