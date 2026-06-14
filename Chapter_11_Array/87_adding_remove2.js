let arr =[1,2,3];
arr.push(4,5,6); // adds 4,5,6 to the end of the array
console.log(arr);
//splice
arr.splice(2,1); // removes 1 element at index 2 (which is the number 3)

console.log(arr);
arr.splice(2,0,3); // adds 3 at index 2 without removing any element
console.log(arr);
arr.splice(2,1,10); // replaces 1 element at index 2 (which is the number 3) with 10
console.log(arr);
arr.splice(1,2,10,20); // replaces 2 elements at index 1 (which are the numbers 2 and 10) with 10 and 20
console.log(arr);