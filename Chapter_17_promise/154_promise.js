let order= new Promise(function(resolve, reject){
    let foodready = true;
    if (foodready){
        resolve("pizza is delivered")
    }
    else{
        reject("pizza not available")
    }
})
console.log(order)