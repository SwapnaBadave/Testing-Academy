// Confusing comparison in JavaScript: == vs ===

// == (loose equality) compares values after type conversion.
console.log(0 == false); // true because false is converted to 0
console.log('' == false); // true because '' is converted to 0
console.log(1 == '1'); // true because '1' is converted to number 1
console.log(null == undefined); // true because they are treated as equal in loose comparison

// === (strict equality) compares value and type without conversion.
console.log(0 === false); // false because number is not boolean
console.log('' === false); // false because string is not boolean
console.log(1 === '1'); // false because number is not string
console.log(null === undefined); // false because types differ

// Example showing why === is safer:
let value = '5';
if (value == 5) {
  console.log("Loose equality says they match");
}
if (value === 5) {
  console.log("Strict equality says they match");
} else {
  console.log("Strict equality says they do not match");
}

// Summary:
// - Use == when you want value conversion before comparison.
// - Use === when you want both value and type to match exactly.
// - In most cases, prefer === to avoid unexpected type coercion.
