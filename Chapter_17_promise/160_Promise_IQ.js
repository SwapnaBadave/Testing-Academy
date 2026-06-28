let p = new Promise(function(resolve, reject){
resolve(42);
})
p.then(function(value){
console.log("answer :", value)
})

let p = new Promise(function(resolve, reject){
reject("something broke");
})
p.catch(function(erorr){
console.log("caught :", erorr)
})


let p= Promise.resolve(5)
p.then(function(v){
    return v * 10;

}).then(function(v){
    console.log("result:", v)
})

Promise.resolve(1)
.then(function(v){
    console.log(v)
    return v+1;
}).then(function(v){
    console.log(v)
    return v+1;

}).then(function(v){
    console.log(v)
})

let t1= Promise.resolve("login: pass")
let t2= Promise.resolve("search: pass")
let t3= Promise.resolve("logout: pass")

Promise.all([t1,t2,t3]).then(function(results){
    console.log(results)
})