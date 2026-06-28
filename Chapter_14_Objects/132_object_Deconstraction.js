const user={
    name: "pramod",
    age: 30,
    city: "Pune"
}
// basic decontructing 
// const {name, age}= user;
// console.log(name)
// console.log(age)

// rename varialbles 

const { name : username, age: Userage}= user;
console.log(username)
console.log(Userage)

const data ={
    user :{
        name: "swapna",
        age: 30,
        address:{
            city: "delhi"

        }
    }
};
const {user: {address:{delhi}}}=data
console.log(data.user.address.city)