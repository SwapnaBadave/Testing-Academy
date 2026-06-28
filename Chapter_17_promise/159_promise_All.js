let checkauth=  Promise.resolve("check auth is ok")

let dbconnection= Promise.resolve(" DB COnnection works")
let checkcache= Promise.resolve("cache is ok")

Promise.all([checkauth, checkcache,dbconnection]).then(function(results){
console.log("all the caches are fine! ")
})

Promise.all([
Promise.resolve("ok"),
Promise.reject("db down"),
Promise.resolve("ok")
]

).then(function(r){
    console.log(r)
}).catch(function(error){
    console.log(error)
})