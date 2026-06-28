//Strings
let a ='hello'; //String with single quotes
let b = "hello";// String with double quotes
let c = `hello`;// String with backticks

let name1 ="john";
let msg = `hello, ${name1}! 2+2 = ${2+2}`; //String interpolation
console.log(msg);

//multiline string
let report = 
`Test : Login
status : pass
duration : 2.5s
`;
console.log(report);

console.log (String (200));
//String(true);-- // returns "true"
// String(false);-- // returns "false"
//String (null);-- // returns "null"
