let apicall= new Promise(function(resolve, reject){
    resolve({
status: 200, body: "userdata"
    })
})
apicall.then(function(response){
    console.log(response)
})
apicall.then(function(response){
    console.log(response.status)
}) //.then() only runs when the promise resolves successfully