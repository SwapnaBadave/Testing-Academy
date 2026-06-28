function openBrowser(){
    return new Promise( function(resolve){
 resolve("browser opened")
    })
}
function GotoLogin(){
    return new Promise( function(resolve){
 resolve("login page loaded")
    })
}
function enterCred(){
    return new Promise( function(resolve){
 resolve("Entered cred")
    })
}
function LoginSuccess(){
    return new Promise( function(resolve){
 resolve("Logged in Successfully")
    })
}
async function runE2EFlow() {
    let msg1= await openBrowser();
    console.log("step 1:", msg1);

    let msg2= await GotoLogin();
    console.log("step 2:", msg2);

    let msg3= await enterCred();
    console.log("step 3:", msg3);

    let msg4= await LoginSuccess();
    console.log("step 4:", msg4);

    //console (msg1, msg2, msg3, msg4);
}
runE2EFlow();