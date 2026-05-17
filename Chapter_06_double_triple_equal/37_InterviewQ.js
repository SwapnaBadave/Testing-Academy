console.log (0==""); // Output: true (loose equality, type coercion occurs)
console.log(0 == "0"); // Output: true (loose equality, type coercion occurs)
console.log("" == "0"); // Output: false (strict equality, no type coercion) // transivity broken

console.log(0== false); // Output: true (loose equality, type coercion occurs)

console.log (null == 0 )
console.log (null == undefined)
 // Output: true (loose equality, type coercion occurs)
 console.log (null === undefined) // Output: false (strict equality, no type coercion)
console.log (undefined == 0) // Output: false (strict equality, no type coercion)
