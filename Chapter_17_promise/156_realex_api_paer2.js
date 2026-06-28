let apicall= new Promise (function (resolve, reject){

reject(" 500 error messgae")
    
})
apicall.then(function(data){
    console.log("resolve or success")
}).catch(function(error){
console.log(error)
});

//catch () only run when promise is rejected 
//. then() is completly skipped