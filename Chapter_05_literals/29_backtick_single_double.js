// Difference between single quotes, double quotes, and backticks in JavaScript

// Single quotes and double quotes behave the same for plain strings.
let singleQuote = 'Hello from single quotes';
let doubleQuote = "Hello from double quotes";
console.log(singleQuote);
console.log(doubleQuote);

// Backticks (template literals) allow expression interpolation and multi-line strings.
let name = "Alice";
let backtickString = `Hello, ${name}! This is a template literal.`;
console.log(backtickString);

// Short difference:
// - Single quotes: 'text'
// - Double quotes: "text"
// - Backticks: `text ${expression}`

// Example of using backticks for interpolation:
let age = 25;
console.log(`Name: ${name}, Age: ${age}`);