function getstatus (code){
    if (code >= 200 && code <300) return "success";
    if (code >= 400 && code <500) return "client error";
    if (code >= 500) return "server error";
    
}

getstatus(200); // it will return "success"
getstatus(400); // it will return "client error"
getstatus(500); // it will return "server error"

function logtest (name){
    console.log ('running: ${name}')

}

let result =logtest("logintest "); // it will return "running: ${name}"
console.log(result); // it will return undefined because the function logtest does not have a return statement. It only logs the message to the console.

sayHi(bob)

const sayHi =function (name ){
    return `Hi`,$(name);    
}