//higher order function is a function that takes 
// another function as an argument or returns a 
// function as a result.
 function runwithlogin(testfn, testname){

    console.log(`starting: ${testname}`);
    let result = testfn();
    console.log(`fininshed: ${testname} -> ${result}`);
    return result;
 }
 function logintest(){
    return "pass";
 }
 function loginfailed(){
    return "fail";
 }
 runwithlogin(logintest, "login test");
 runwithlogin(loginfailed, "login failed test");