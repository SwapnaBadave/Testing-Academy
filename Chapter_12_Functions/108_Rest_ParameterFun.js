//Rest of the Parameter funtion is used to pass 
// multiple arguments in a function and it will return an 
// array of those arguments.

function logresult(suiteName,...results) { 
    // it will take multiple arguments and return 
    // an array of those arguments
    console.log(suiteName);
    console.log(results);
}

logresult("login test", 1,2,3);
logresult("reg test", "hello","pramod");
