//checking Array : check if something is an aaray 
let result= Array.isArray("TestingAcademy");
console.log(result); // false
let result1= Array.isArray([1,2,3]); 
console.log(result1); // true

//Every and some
[80 ,90,95 ].every((score) => score > 70); // true
[80 ,90,65 ].every((score) => score > 70); // false

//playwright API 
[201,400,401].every((statuscode) => statuscode > 200 );//