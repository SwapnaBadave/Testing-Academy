const user= {
    name : "swapna",
    age: 30,
    email: "abc@gmail.com"
};
console.log(user)
console.log(user.name)
console.log(user["age"])

//dynamic property access
const key = "age";
console.log(user[key])

// modifying propeties
user.city = "Pune";
user.age= 40;
console.log(user)

let obj= {name: "Login"}
console.log(Object.getOwnPropertyDescriptor(obj, "name")) 

// not be used 
