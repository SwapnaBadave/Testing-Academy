let results =["pass", "fail", "skip","error"];

//indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(results.indexOf("fail"));
console.log(results.indexOf("skip"));
console.log(results.indexOf("error"));
console.log(results.indexOf("not found"));

//find return matching elements
let numbers =[1,2,3,4,5];
numbers.find(x => x >4); // returns 5
console.log(numbers.find(x => x >4));
numbers.find(x => x >5); // returns undefined