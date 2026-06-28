let testresults=[ "Pass", " Fail", "blocked", "Skip"]
testresults.forEach(function(result, index){
    console.log("Test" +index + "=>",result)
})

// Test0=> Pass
// Test1=>  Fail
// Test2=> blocked
// Test3=> Skip  : run one by one for synchronous
