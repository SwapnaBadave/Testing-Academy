
printValues();
function printValues() {
    console.log(a);
    var a = 5;
   console.log(a);
    
}
//printValues(); // Output: undefined 5
// In the above code, the variable 'a' is hoisted to the top of the function scope, but its initialization is not. 
// Therefore, when we try to access 'a' before its initialization, it returns 'undefined'. After the initialization, it returns 5.
// if we delcare print value above or below it will not give error because of hoisting. 
// In JavaScript, function declarations are also hoisted. This means that you can call a function before it is defined in the code.