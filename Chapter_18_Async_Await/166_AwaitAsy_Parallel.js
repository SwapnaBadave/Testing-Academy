 function apicall(name){
    return new Promise (function(resolve){
    })


 async function parallelTest() {

         let  [r1,r2,r3]= await Promise.allSettled([
            
            apicall ["auth service"],
            apicall ["user account creation"],
            apicall ["support page API"]
         ])
         

    }
         console.log(r1)
         console.log(r2)
         console.log(r3)
}
parallelTest();
