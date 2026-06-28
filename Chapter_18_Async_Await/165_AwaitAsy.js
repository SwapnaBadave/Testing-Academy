 function apicall(name){
    return new Promise (function(resolve){
        setTimeout(function(){
            resolve(name,"200 ok")
        }, 1000)
    })

}
async function seq() {
    console.log("starting the test")
    let start =Date.now()
    let r1= await apicall("login")
 console. log(r1)

 let r2= await apicall("dashboard")
 console. log(r2)

 let r3= await apicall("report")
 console. log(r3)
 
 console. log("Time ~" +(Date.now()-start) + "ms")
}
seq();
