// Example of Temporal Dead Zone (TDZ) with let

// The following console.log is inside the TDZ for `score`.
// JavaScript knows the variable exists, but it is not initialized until the `let` line is executed.
// Accessing it before declaration causes a ReferenceError.

try {
  console.log(score); // ReferenceError: Cannot access 'score' before initialization
} catch (error) {
  console.error("TDZ example error:", error.message);
}

let score = 100;
console.log("score after declaration:", score); // 100

// TDZ is the time between entering a block and the actual declaration/initialization
// of a `let` or `const` variable in that block. During this interval, the variable
// cannot be accessed, even though it is technically hoisted.

{
  // Another TDZ example inside a block
  try {
    console.log(name); // ReferenceError
  } catch (error) {
    console.error("Block TDZ error:", error.message);
  }

  let name = "JavaScript";
  console.log("name after declaration:", name);
}

// Comparison: var hoisting vs let TDZ
// With `var`, the variable is hoisted and initialized with `undefined`, so accessing it
// before the declaration does not throw an error, but it returns `undefined`.

console.log(age); // undefined
var age = 30;
console.log("age after declaration:", age); // 30

// With `let`, the variable is also hoisted, but it is not initialized until the
// declaration line is executed. That period before initialization is the TDZ.
// This is why `let` gives a ReferenceError if you access it before declaration.
