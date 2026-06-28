//String properties
//console.log (typeof (200)); // returns "number"
console.log (typeof ("200"));// returns "string"
let str = "hello , World!";
console.log (str.length); // returns 13 //Length always starts from 1
 
console.log(str[0]); // returns "h" //first character
console.log(str[1]); // returns "e" //second character
console.log(str[str.length-1]); // returns "!" //last character 

//index start with 0, but length starts with 1, 
console.log(str.charAt(0)); // returns "h" //first character
console.log(str.charAt(1)); // returns "e" //second character
console.log(str.charCodeAt(0)); // returns 104 (ASCII code for 'h')
console.log(str.charCodeAt(1)); // returns 101 (ASCII code for 'e')