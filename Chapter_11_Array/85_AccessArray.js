//accessing and modifying array elements
let status =[pass , fail, skip];
console.log(status[0]); //Output: pass
console.log(status[1]); //Output: fail
console.log(status[2]); //Output: skip  
//console. log(status [-1]); //Output: skip
//console. log(status [-2]); //Output: fail
console.log (status.at(-1)); //Output: skip
console.log (status.at(-2)); //Output: fail     
console.log (status.at(-3)); //Output: undefined  
//console. log(status [-3]); //Output: undefined  
