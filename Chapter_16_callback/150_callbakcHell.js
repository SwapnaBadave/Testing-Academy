//real QA Scrnario: E2E login to App.vwo.com

//open browser()
//go to login page()
//Enter credentials ()
//Click on login()
function openbrowser (callback){
console.log ("opening browser")
setTimeout(() => {
    callback();
}, 2000);
}

function Login (callback){
console.log ("Go to login page")
setTimeout(() => {
    callback();
}, 1000);
}
function enterCred (callback){
console.log ("Enter credentials")
setTimeout(() => {
    callback();
}, 500);
}
function logPage (callback){
console.log ("Click on login button")
setTimeout(() => {
    callback();
}, 1500);
}

// this is hell callback

openbrowser( function(){
    Login (function(){
        enterCred(function(){
            logPage(function(){
                console.log("Test complete !")
            })
        })
    })
}) //we  dont use this callback hell 