console.log(greeting);
var greeting = "testingTeam";
console.log(greeting); // No error
// Hoisting is a JavaScript mechanism where variables and function 
// declarations are moved to the top of their containing scope 
// during the compilation phase. This means that you can use variables 
// and functions before they are declared in the code. However, only the
//  declarations are hoisted, not the initializations.

// Example of hoisting with variables
//console.log(x); // Output: undefined (due to hoisting)
//var x = 5;
//console.log(x); // Output: 5