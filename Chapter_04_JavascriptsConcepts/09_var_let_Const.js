var x= 10
let l=30
const c= 50;

var d= chrome;
var d= firefox 
var d = edge // redeclaration. here its chaging v value from chrome to firefox then firefox to edge 

//for loop function 
var testcases = ["login", "logout", "signup"];
for (var  i=0; i<testcases.length; i++) {
    console.log(testcases[i]);
}

console.log ("loop counter leaked outside ",i)

//fuction scope

function test(){ console.log("hi from function");}
test();
test();
