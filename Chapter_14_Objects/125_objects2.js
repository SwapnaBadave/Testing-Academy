// objects // key and value 
let student = {name: "swapna", age: 30};
let student1= {name: "swati"};
let student2= {name :"aarati", age: 25, phone:12345678};

// key will not be in double quetoes 
// below key in doubt is actually json

let json_student3= {name: "Kiran", age: 40, phone: 345678976}

 let a= {status: "pass"};
// console.log(a.status);
// console.log(a["status"])
// let a1={status: "pass"}
// console.log(a1.status);

let b=a
b.status= "Fail"
console.log(b.status)
console.log(a.status)

if (b===a){
    console.log("true")
}else {
    console.log("false")
}