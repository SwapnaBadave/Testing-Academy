let scores =[10,20,30,40,50];
// map -transform the array

let grades= scores.map(function(score){
    if(score>=40){
        return "pass";  
    } else {
        return "fail";
    }
});

console.log(grades); // Output: ["fail", "fail", "fail", "pass", "pass"]

//reduce - to get a single value from an array
let total = scores.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0);  
console.log(total); // Output: 150  

//flat - to flatten a nested array
let nestedArray = [1, 2, [3, 4], [5, 6]];
let flatArray = nestedArray.flat();
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]