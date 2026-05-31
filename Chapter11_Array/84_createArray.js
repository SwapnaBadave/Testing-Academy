//creating an array
let browser = ["chrome", "firefox", "edge", "safari"];
console.log(browser[0]);


//Array constructor
let score= new Array(3);
score[0]= 1;
score[1]= 1;
score[2]= 1;
let score2= new Array(1,2,3,4,5);
console.log(score);
console.log(score2);

let number =new Array(10,20,40,60,80);
console.log(number);

let num=Array.of(10,20,30,40,50);
console.log(num);

let char=Array.from("Hello");
console.log(char);