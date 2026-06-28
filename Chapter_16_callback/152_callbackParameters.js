function greetTester(name, callback){
console.log("welcome," +name)
callback();
}

greetTester("dev", function(){
console.log("Lets start testing")
});

//callback with parameters
function runtest (testname,callback){
    let status ="pass"
    callback(testname, status)
}
runtest("login test", function(name, result){
console.log(name + "=" + result)
});

//synchcallback for each 

let bugs =["UI glitch", "api timeout", "wrong redirect"]
bugs.forEach(function(bug,i){
console.log("bug #",+ (i+1) + ";" +bug)
});
console.log("total bugs:" +bugs.length)