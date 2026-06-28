let testrun= new Promise(function(resolve, reject){
    
   if (true){ resolve("staus is 200")} 
   else{
    reject("assertion failed")}
})
testrun.then(function(data){
    console.log(data)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    //this code wil be always executed
    console.log("i will execute anyhow")
})
