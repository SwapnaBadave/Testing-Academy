//let is block scope variable. it is not hoisted. it is not accessible before declaration. it will give error if we try to access it before declaration. it will give error if we try to redeclare it. it will give error if we try to access it outside the block in which it is declared.
let x = "global";
if (true) {
    let x = "block";
    console.log(x); // Output: block
}

console.log(x); // Output: global



