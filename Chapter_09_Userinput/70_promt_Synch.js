const prompt = require('prompt-sync')();
let num = Number(prompt("Enter a number"));

if(num % 2 === 0){
    console.log("The number is even");
} else{
    console.log("The number is odd");
}

//we neveruse this also in automation,
//  this is only for learning purpose