// logical operators 

//&& (logical AND), || (logical OR), ! (logical NOT)
 let a = true;
 let b = false; 
    console.log(a && b); // Output: false (both operands must be true for AND to be true)           
    console.log(a || b); // Output: true (at least one operand must be true for OR to be true)
    console.log(!a); // Output: false (NOT operator negates the value of a)
    console.log(!b); // Output: true (NOT operator negates the value of b)      
    console.log (5 != b); // Output: true (5 is not equal to false, type coercion occurs)
    console.log (5 !== b); // Output: true (5 is not equal to false, no type coercion occurs)