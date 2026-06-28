console.log("Test 1: started")
setTimeout(function(){
    console.log(" Test 2 : API Response recevied")
}, 2000); //asynchroous in nature so executed lastly 
console.log("Test 3 : move to next test")// executed fast as no timeout added